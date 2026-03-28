---
sidebar_position: 3
---

# Docker Context

Socktainer can be used through a dedicated Docker context, so standard Docker CLI commands target the Socktainer socket instead of the default Docker daemon.

## Current Status

Issue [socktainer/socktainer#26](https://github.com/socktainer/socktainer/issues/26)
tracks adding a built-in option to generate a Docker context automatically.

Today, you can create the context manually and use it immediately with the Docker CLI.

## Create the Context

Run:

```bash
docker context create --description socktainer --docker "host=unix://${HOME}/.socktainer/container.sock" socktainer
```

This creates a Docker context named `socktainer` pointing at:

```text
unix://${HOME}/.socktainer/container.sock
```

## Switch to Socktainer

```bash
docker context use socktainer
```

After that, regular Docker commands such as `docker ps`, `docker images`, and `docker logs` will go through Socktainer.

## Verify

```bash
docker context ls
```

You should see a context similar to:

```text
NAME            DESCRIPTION                               DOCKER ENDPOINT                                     ERROR
default         Current DOCKER_HOST based configuration   unix:///var/run/docker.sock
desktop-linux   Docker Desktop                            unix:///Users/your-user/.docker/run/docker.sock
socktainer *    socktainer                                unix:///Users/your-user/.socktainer/container.sock
```

## Switch Back

To go back to your default Docker context:

```bash
docker context use default
```
