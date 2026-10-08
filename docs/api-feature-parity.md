---
sidebar_position: 2
---

# Docker Engine API Feature Parity

This page tracks how much of the [Docker Engine API v1.51](https://github.com/moby/moby/blob/v28.5.2/api/swagger.yaml) Socktainer supports on top of Apple container.

Source ticket: [socktainer/socktainer#14](https://github.com/socktainer/socktainer/issues/14)

| ✅ Supported | ⚠️ Partial / pending | ❌ Not applicable |
| :----------: | :------------------: | :---------------: |
|    **52**    |        **17**        |      **28**       |

**52 of 69 applicable endpoints are supported (~75%).**

:::note
Compared against Apple container `1.5.0` (commit `d265d669ecae041bf338cb3b39c4118316d138f0`).
Last updated October 8th, 2026.
:::

## Status Legend

- ✅ **Implemented** - The linked PRs and issues give details and limitations
- ⚠️ **Partial / pending** - Not implemented or stubbed yet. Apple container may add support later, or Socktainer may emulate it
- ❌ **Not applicable** - Not applicable to Apple container (for example swarm or pause). Returns a "not supported" error

## Containers

| Endpoint                     | Status | Notes                                                                                                                                                        |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/containers/json`           | ✅     |                                                                                                                                                              |
| `/containers/create`         | ✅     | [#37](https://github.com/socktainer/socktainer/issues/37)                                                                                                    |
| `/containers/{id}/json`      | ✅     |                                                                                                                                                              |
| `/containers/{id}/top`       | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18))                                                                 |
| `/containers/{id}/logs`      | ✅     |                                                                                                                                                              |
| `/containers/{id}/changes`   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18))                                                                 |
| `/containers/{id}/export`    | ✅     | [#313](https://github.com/socktainer/socktainer/issues/313)                                                                                                  |
| `/containers/{id}/stats`     | ✅     | [#217](https://github.com/socktainer/socktainer/issues/217)                                                                                                  |
| `/containers/{id}/resize`    | ✅     | [#232](https://github.com/socktainer/socktainer/issues/232)                                                                                                  |
| `/containers/{id}/start`     | ✅     |                                                                                                                                                              |
| `/containers/{id}/stop`      | ✅     |                                                                                                                                                              |
| `/containers/{id}/restart`   | ✅     | [#82](https://github.com/socktainer/socktainer/issues/82)                                                                                                    |
| `/containers/{id}/kill`      | ✅     | [#82](https://github.com/socktainer/socktainer/issues/82)                                                                                                    |
| `/containers/{id}/update`    | ✅     | [#308](https://github.com/socktainer/socktainer/issues/308) — restart policy only; resource limits are ignored with a warning (VM resources fixed at create) |
| `/containers/{id}/rename`    | ✅     | [#418](https://github.com/socktainer/socktainer/issues/418) — never-started containers only (409 otherwise)                                                  |
| `/containers/{id}/pause`     | ❌     | Not supported by Apple container, returns an error                                                                                                           |
| `/containers/{id}/unpause`   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18))                                                                 |
| `/containers/{id}/attach`    | ✅     | [#94](https://github.com/socktainer/socktainer/issues/94)                                                                                                    |
| `/containers/{id}/attach/ws` | ✅     | [#243](https://github.com/socktainer/socktainer/issues/243)                                                                                                  |
| `/containers/{id}/wait`      | ✅     | [#82](https://github.com/socktainer/socktainer/issues/82)                                                                                                    |
| `/containers/{id}`           | ✅     |                                                                                                                                                              |
| `/containers/{id}/archive`   | ✅     | [#169](https://github.com/socktainer/socktainer/issues/169)                                                                                                  |
| `/containers/prune`          | ✅     | [#65](https://github.com/socktainer/socktainer/issues/65)                                                                                                    |

## Images

| Endpoint                 | Status | Notes                                                                                                                                                                     |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/images/json`           | ✅     |                                                                                                                                                                           |
| `/build`                 | ✅     | [#101](https://github.com/socktainer/socktainer/issues/101)                                                                                                               |
| `/build/prune`           | ✅     | [#183](https://github.com/socktainer/socktainer/issues/183)                                                                                                               |
| `/images/create`         | ✅     | [#12](https://github.com/socktainer/socktainer/issues/12) [#321](https://github.com/socktainer/socktainer/issues/321) (import via `fromSrc=-`; URL `fromSrc` unsupported) |
| `/images/{name}/json`    | ✅     |                                                                                                                                                                           |
| `/images/{name}/history` | ✅     | [#188](https://github.com/socktainer/socktainer/issues/188)                                                                                                               |
| `/images/{name}/push`    | ✅     | [#128](https://github.com/socktainer/socktainer/issues/128)                                                                                                               |
| `/images/{name}/tag`     | ✅     | [#126](https://github.com/socktainer/socktainer/issues/126)                                                                                                               |
| `/images/{name}`         | ✅     |                                                                                                                                                                           |
| `/images/search`         | ✅     | [#309](https://github.com/socktainer/socktainer/issues/309) — Docker Hub only                                                                                             |
| `/images/prune`          | ✅     | [#133](https://github.com/socktainer/socktainer/issues/133)                                                                                                               |
| `/images/{name}/get`     | ✅     | [#137](https://github.com/socktainer/socktainer/issues/137)                                                                                                               |
| `/images/get`            | ✅     | [#137](https://github.com/socktainer/socktainer/issues/137)                                                                                                               |
| `/images/load`           | ✅     | [#137](https://github.com/socktainer/socktainer/issues/137)                                                                                                               |

## Exec

| Endpoint                | Status | Notes |
| ----------------------- | ------ | ----- |
| `/containers/{id}/exec` | ✅     |       |
| `/exec/{id}/start`      | ✅     |       |
| `/exec/{id}/resize`     | ✅     |       |
| `/exec/{id}/json`       | ✅     |       |

## Volumes

| Endpoint          | Status | Notes                                                     |
| ----------------- | ------ | --------------------------------------------------------- |
| `/volumes`        | ✅     | [#58](https://github.com/socktainer/socktainer/issues/58) |
| `/volumes/create` | ✅     | [#58](https://github.com/socktainer/socktainer/issues/58) |
| `/volumes/{name}` | ✅     | [#58](https://github.com/socktainer/socktainer/issues/58) |
| `/volumes/prune`  | ✅     | [#58](https://github.com/socktainer/socktainer/issues/58) |

## Networks

| Endpoint                    | Status | Notes                                                                                                                                         |
| --------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `/networks`                 | ✅     | [#44](https://github.com/socktainer/socktainer/issues/44)                                                                                     |
| `/networks/{id}`            | ✅     | [#44](https://github.com/socktainer/socktainer/issues/44) [#52](https://github.com/socktainer/socktainer/issues/52)                           |
| `/networks/create`          | ✅     | [#52](https://github.com/socktainer/socktainer/issues/52)                                                                                     |
| `/networks/{id}/connect`    | ⚠️     | No-op returning 200 so Compose proceeds; Apple container cannot attach networks ([#212](https://github.com/socktainer/socktainer/issues/212)) |
| `/networks/{id}/disconnect` | ⚠️     | No-op returning 200 so Compose proceeds; Apple container cannot detach networks ([#212](https://github.com/socktainer/socktainer/issues/212)) |
| `/networks/prune`           | ✅     | [#52](https://github.com/socktainer/socktainer/issues/52)                                                                                     |

## System

| Endpoint                    | Status | Notes                                                                                        |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `/auth`                     | ✅     | [#105](https://github.com/socktainer/socktainer/issues/105)                                  |
| `/info`                     | ✅     | [#28](https://github.com/socktainer/socktainer/issues/28)                                    |
| `/version`                  | ✅     | [#28](https://github.com/socktainer/socktainer/issues/28)                                    |
| `/_ping`                    | ✅     |                                                                                              |
| `/commit`                   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/events`                   | ✅     |                                                                                              |
| `/system/df`                | ✅     | [#191](https://github.com/socktainer/socktainer/issues/191)                                  |
| `/distribution/{name}/json` | ✅     | [#311](https://github.com/socktainer/socktainer/issues/311)                                  |
| `/session`                  | ❌     | Not supported by Apple container, returns an error                                           |

## Plugins

| Endpoint                  | Status | Notes                                                                                                                                    |
| ------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `/plugins`                | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/privileges`     | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/pull`           | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/{name}/json`    | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/{name}`         | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/{name}/enable`  | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/{name}/disable` | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/{name}/upgrade` | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/create`         | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/{name}/push`    | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/plugins/{name}/set`     | ⚠️     | Apple container supports a plugin system, should be revisited in the future ([#18](https://github.com/socktainer/socktainer/issues/18)). |

## Swarm (Not Applicable)

| Endpoint                | Status | Notes                                                                                                               |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `/nodes`                | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/nodes/{id}`           | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/nodes/{id}/update`    | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/swarm`                | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/swarm/init`           | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/swarm/join`           | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/swarm/leave`          | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/swarm/update`         | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/swarm/unlockkey`      | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/swarm/unlock`         | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/services`             | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/services/create`      | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/services/{id}`        | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/services/{id}/update` | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/services/{id}/logs`   | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/tasks`                | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/tasks/{id}`           | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/tasks/{id}/logs`      | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/secrets`              | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/secrets/create`       | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/secrets/{id}`         | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/secrets/{id}/update`  | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/configs`              | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/configs/create`       | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/configs/{id}`         | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |
| `/configs/{id}/update`  | ❌     | Not applicable (swarm), returns a "not supported" error ([#17](https://github.com/socktainer/socktainer/issues/17)) |

## Contributing to API Coverage

This feature parity list is subject to change as both Socktainer and Apple's container framework mature. If you're interested in implementing any of the missing endpoints:

1. Check if there's an existing GitHub issue for the endpoint
2. Review the Apple container framework capabilities
3. File a new issue before starting implementation to coordinate with other contributors
