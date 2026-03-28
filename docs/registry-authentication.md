---
sidebar_position: 4
---

# Registry Authentication

Registry authentication currently depends on Apple `container` behavior.
If login appears to succeed but registry pulls or builds still fail, a manual workaround may be required.

See:

- [apple/container#816 comment 3534438608](https://github.com/apple/container/issues/816#issuecomment-3534438608)
- [apple/container#816 comment 3503618765](https://github.com/apple/container/issues/816#issuecomment-3503618765)

## Workaround

You can create a custom shell function that mimics the `docker login` ergonomics and writes the registry credential into the macOS System keychain in the format expected by Apple `container`.

The command:

- accepts `docker login`-style arguments such as `--username`, `--password`, and `--password-stdin`
- stores the credential as an internet password entry for the target registry
- marks the entry with the `com.apple.container.registry` kind expected by Apple `container`
- grants the Apple `container` binaries access to that keychain entry so private pulls and builds can reuse it

:::warning
This function only works in **`bash`** and **`zsh`**.
:::

:::warning
`sudo` is required because the command writes the credential into `/Library/Keychains/System.keychain`, which is the system-wide keychain and requires elevated privileges to modify.
:::

<details>
<summary>Option: Apple `container` installed from another source</summary>

Use this version if `container`, `container-core-images`, and `socktainer` are available on your `PATH`.

Add it to your shell configuration:

```bash
container_login () {
	local CONTAINER_USERNAME=""
	local CONTAINER_PASSWORD=""
	local CONTAINER_REGISTRY=""
	local CONTAINER_PASSWORD_STDIN=0
	local CONTAINER_BIN="$(which container 2>/dev/null)"
	local CONTAINER_CORE_IMAGES_BIN="$(which container-core-images 2>/dev/null)"
	local SOCKTAINER_BIN="$(which socktainer 2>/dev/null)"
	while [[ ${#} -gt 0 ]]
	do
		case "${1}" in
			(--username) if [[ ${#} -lt 2 ]]
				then
					echo "Error: --username requires a value" >&2
					return 1
				fi
				CONTAINER_USERNAME="${2}"
				shift 2 ;;
			(--password) if [[ ${#} -lt 2 ]]
				then
					echo "Error: --password requires a value" >&2
					return 1
				fi
				if [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]
				then
					echo "Error: --password and --password-stdin cannot be used together" >&2
					return 1
				fi
				CONTAINER_PASSWORD="${2}"
				shift 2 ;;
			(--password-stdin) if [[ -n "${CONTAINER_PASSWORD}" ]]
				then
					echo "Error: --password and --password-stdin cannot be used together" >&2
					return 1
				fi
				CONTAINER_PASSWORD_STDIN=1
				shift ;;
			(--help | -h) echo "Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY" >&2
				return 0 ;;
			(--*) echo "Error: unknown option: ${1}" >&2
				return 1 ;;
			(*) if [[ -n "${CONTAINER_REGISTRY}" ]]
				then
					echo "Error: expected a single registry argument" >&2
					return 1
				fi
				CONTAINER_REGISTRY="${1}"
				shift ;;
		esac
	done
	if [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]
	then
		IFS= read -r CONTAINER_PASSWORD
	fi
	if [[ -z "${CONTAINER_USERNAME}" || -z "${CONTAINER_PASSWORD}" || -z "${CONTAINER_REGISTRY}" ]]
	then
		echo "Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY" >&2
		return 1
	fi
	if [[ -z "${CONTAINER_BIN}" || -z "${CONTAINER_CORE_IMAGES_BIN}" || -z "${SOCKTAINER_BIN}" ]]
	then
		echo "Error: could not find container, container-core-images, or socktainer on PATH" >&2
		return 1
	fi
	sudo security add-internet-password -a "${CONTAINER_USERNAME}" -s "${CONTAINER_REGISTRY}" -w "${CONTAINER_PASSWORD}" -d "com.apple.container.registry" -T "${CONTAINER_BIN}" -T "${CONTAINER_CORE_IMAGES_BIN}" -T "${SOCKTAINER_BIN}" -U "/Library/Keychains/System.keychain"
}
```

After storing the credential, retry the registry pull or build command through Socktainer.

</details>

<details>
<summary>Option: Apple `container` installed from Homebrew</summary>

Use this version if you installed the Apple `container` tooling with Homebrew and want to reference the known Homebrew locations directly.

```bash
container_login () {
	local CONTAINER_USERNAME=""
	local CONTAINER_PASSWORD=""
	local CONTAINER_REGISTRY=""
	local CONTAINER_PASSWORD_STDIN=0
	while [[ ${#} -gt 0 ]]
	do
		case "${1}" in
			(--username) if [[ ${#} -lt 2 ]]
				then
					echo "Error: --username requires a value" >&2
					return 1
				fi
				CONTAINER_USERNAME="${2}"
				shift 2 ;;
			(--password) if [[ ${#} -lt 2 ]]
				then
					echo "Error: --password requires a value" >&2
					return 1
				fi
				if [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]
				then
					echo "Error: --password and --password-stdin cannot be used together" >&2
					return 1
				fi
				CONTAINER_PASSWORD="${2}"
				shift 2 ;;
			(--password-stdin) if [[ -n "${CONTAINER_PASSWORD}" ]]
				then
					echo "Error: --password and --password-stdin cannot be used together" >&2
					return 1
				fi
				CONTAINER_PASSWORD_STDIN=1
				shift ;;
			(--help | -h) echo "Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY" >&2
				return 0 ;;
			(--*) echo "Error: unknown option: ${1}" >&2
				return 1 ;;
			(*) if [[ -n "${CONTAINER_REGISTRY}" ]]
				then
					echo "Error: expected a single registry argument" >&2
					return 1
				fi
				CONTAINER_REGISTRY="${1}"
				shift ;;
		esac
	done
	if [[ ${CONTAINER_PASSWORD_STDIN} -eq 1 ]]
	then
		IFS= read -r CONTAINER_PASSWORD
	fi
	if [[ -z "${CONTAINER_USERNAME}" || -z "${CONTAINER_PASSWORD}" || -z "${CONTAINER_REGISTRY}" ]]
	then
		echo "Usage: container_login --username USERNAME [--password PASSWORD | --password-stdin] REGISTRY" >&2
		return 1
	fi
	sudo security add-internet-password -a "${CONTAINER_USERNAME}" -s "${CONTAINER_REGISTRY}" -w "${CONTAINER_PASSWORD}" -d "com.apple.container.registry" -T "$(brew --prefix container)/bin/container" -T "$(brew --prefix container)/libexec/container-plugins/container-core-images/bin/container-core-images" -U "/Library/Keychains/System.keychain"
}
```

</details>

## Usage

With an inline password:

```bash
container_login --username my-user --password my-token your.registry.example.com
```

With `stdin`:

```bash
printf '%s\n' "$REGISTRY_TOKEN" | container_login --username my-user --password-stdin your.registry.example.com
```

After storing the credential, retry the registry pull or build command through Socktainer.
