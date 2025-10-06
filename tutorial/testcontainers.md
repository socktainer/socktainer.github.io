# Testcontainers

This guide demonstrates how to use [Testcontainers](https://testcontainers.com/) with Socktainer, which provides a Docker-compatible socket interface on top of [Apple Container](https://github.com/apple/container).

## Overview

Testcontainers is a popular testing library that provides lightweight, throwaway instances of common databases, web browsers, or anything else that can run in a Docker container. With Socktainer, you can use Testcontainers on macOS with Apple Silicon using Apple's native container framework.

## Prerequisites

Before you begin, ensure you have:

- ☕ **Java 23 or higher** installed
- 📦 **Maven 3.9 or higher** installed
- 🔌 **Socktainer installed and running** (see [Download](/download))

## Socktainer Configuration

### Step 1: Start Socktainer

First, start Socktainer to expose the socket that Testcontainers will use:

```bash
./socktainer
```

You should see output similar to:

```
[ NOTICE ] Server started on http+unix: $HOME/.socktainer/container.sock
```

### Step 2: Configure Docker Host for Testcontainers

Following the [Testcontainers Docker host configuration](https://java.testcontainers.org/features/configuration/#customizing-docker-host-detection), you need to configure Testcontainers to use the Socktainer socket instead of the standard Docker socket.

There are three ways to configure this:

#### Option 1: Environment Variable (Recommended)

Set the `DOCKER_HOST` environment variable:

```bash
export DOCKER_HOST=unix://$HOME/.socktainer/container.sock
```

#### Option 2: System Property

Pass the Docker host as a JVM system property:

```bash
-Ddocker.host=unix://$HOME/.socktainer/container.sock
```

#### Option 3: Testcontainers Configuration File

Create or edit `~/.testcontainers.properties` and add:

```properties
docker.host=unix://$HOME/.socktainer/container.sock
```

:::tip
Replace `$HOME` with the actual path (e.g., `/Users/yourusername`) in the properties file.
:::

### Step 3: Disable Ryuk Container

:::warning Important
The Ryuk container expects to mount the Docker socket inside containers. This feature is not currently supported in Socktainer mode, so you must disable Ryuk.
:::

Set the `TESTCONTAINERS_RYUK_DISABLED` environment variable when running tests:

```bash
export TESTCONTAINERS_RYUK_DISABLED=true
```

Or pass it directly when running Maven:

```bash
TESTCONTAINERS_RYUK_DISABLED=true mvn test
```

## Running Tests

Once Socktainer is configured, you can run your Testcontainers tests:

### Using Maven

```bash
TESTCONTAINERS_RYUK_DISABLED=true mvn test
```

### Full Installation with Tests

```bash
TESTCONTAINERS_RYUK_DISABLED=true mvn install
```

## Example Project

For a complete working example, check out the [sample-testcontainers-java](https://github.com/socktainer/sample-testcontainers-java) repository on GitHub.

## Troubleshooting

### Testcontainers can't find Docker

**Problem**: Testcontainers reports it can't find Docker.

**Solution**: Ensure that:

1. Socktainer is running (`./socktainer`)
2. `DOCKER_HOST` is set correctly to `unix://$HOME/.socktainer/container.sock`
3. The socket file exists at `~/.socktainer/container.sock`

### Ryuk container fails to start

**Problem**: Tests fail with Ryuk-related errors.

**Solution**: Make sure `TESTCONTAINERS_RYUK_DISABLED=true` is set in your environment.

### Container fails to start

**Problem**: Containers fail to start or run.

**Solution**:

1. Check that you're running on macOS 26 (Tahoe) or later with Apple Silicon
2. Verify Apple Container framework is installed
3. Check Socktainer logs for any error messages

## Next Steps

- Explore more [Testcontainers modules](https://testcontainers.com/modules/)
- Learn about [Socktainer configuration](/docs/intro)
- Try the [example project](https://github.com/socktainer/sample-testcontainers-java)
