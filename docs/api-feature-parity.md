---
sidebar_position: 2
---

# Docker Engine API Feature Parity

This page tracks the implementation status of Docker Engine API v1.51 endpoints in Socktainer, comparing against Apple container `v0.5.0`.

## Status Legend

- ✅ **Implemented** - Endpoint is fully functional
- ❌ **Not Implemented** - Endpoint is stubbed but not yet functional
- ⚠️ **Limited/Not Applicable** - Cannot be implemented due to Apple container limitations or not applicable to Socktainer's use case

## Containers

| Endpoint                     | Status | Notes                                                                                        |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `/containers/json`           | ✅     | List containers                                                                              |
| `/containers/create`         | ✅     | Create container ([#37](https://github.com/socktainer/socktainer/pull/37))                   |
| `/containers/{id}/json`      | ✅     | Inspect container                                                                            |
| `/containers/{id}/top`       | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/logs`      | ✅     | Container logs                                                                               |
| `/containers/{id}/changes`   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/export`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/stats`     | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/resize`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/start`     | ✅     | Start container                                                                              |
| `/containers/{id}/stop`      | ✅     | Stop container                                                                               |
| `/containers/{id}/restart`   | ✅     | Restart container ([#82](https://github.com/socktainer/socktainer/pull/82))                  |
| `/containers/{id}/kill`      | ✅     | Kill container ([#82](https://github.com/socktainer/socktainer/pull/82))                     |
| `/containers/{id}/update`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/rename`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/pause`     | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/unpause`   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/attach`    | ✅     | Attach to container ([#94](https://github.com/socktainer/socktainer/pull/94))                |
| `/containers/{id}/attach/ws` | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/wait`      | ✅     | Wait for container ([#82](https://github.com/socktainer/socktainer/pull/82))                 |
| `/containers/{id}`           | ✅     | Remove container                                                                             |
| `/containers/{id}/archive`   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/prune`          | ✅     | Prune containers ([#65](https://github.com/socktainer/socktainer/pull/65))                   |

## Images

| Endpoint                 | Status | Notes                                                                                                                                     |
| ------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `/images/json`           | ✅     | List images                                                                                                                               |
| `/build`                 | ✅     | Build image ([#101](https://github.com/socktainer/socktainer/pull/101))                                                                   |
| `/build/prune`           | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/images/create`         | ✅     | Pull/import image ([#12](https://github.com/socktainer/socktainer/pull/12))                                                               |
| `/images/{name}/json`    | ✅     | Inspect image                                                                                                                             |
| `/images/{name}/history` | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)), could be handled entirely within socktainer |
| `/images/{name}/push`    | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/images/{name}/tag`     | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/images/{name}`         | ✅     | Remove image                                                                                                                              |
| `/images/search`         | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/images/prune`          | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/images/{name}/get`     | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/images/get`            | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/images/load`           | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |

## Exec

| Endpoint                | Status | Notes                 |
| ----------------------- | ------ | --------------------- |
| `/containers/{id}/exec` | ✅     | Create exec instance  |
| `/exec/{id}/start`      | ✅     | Start exec instance   |
| `/exec/{id}/resize`     | ✅     | Resize exec TTY       |
| `/exec/{id}/json`       | ✅     | Inspect exec instance |

## Volumes

| Endpoint          | Status | Notes                                                                           |
| ----------------- | ------ | ------------------------------------------------------------------------------- |
| `/volumes`        | ✅     | List volumes ([#58](https://github.com/socktainer/socktainer/pull/58))          |
| `/volumes/create` | ✅     | Create volume ([#58](https://github.com/socktainer/socktainer/pull/58))         |
| `/volumes/{name}` | ✅     | Inspect/remove volume ([#58](https://github.com/socktainer/socktainer/pull/58)) |
| `/volumes/prune`  | ✅     | Prune volumes ([#58](https://github.com/socktainer/socktainer/pull/58))         |

## Networks

| Endpoint                    | Status | Notes                                                                                                                                     |
| --------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `/networks`                 | ✅     | List networks ([#44](https://github.com/socktainer/socktainer/pull/44))                                                                   |
| `/networks/{id}`            | ✅     | Inspect/remove network ([#44](https://github.com/socktainer/socktainer/pull/44), [#52](https://github.com/socktainer/socktainer/pull/52)) |
| `/networks/create`          | ✅     | Create network ([#52](https://github.com/socktainer/socktainer/pull/52))                                                                  |
| `/networks/{id}/connect`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/networks/{id}/disconnect` | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18))                                              |
| `/networks/prune`           | ✅     | Prune networks ([#52](https://github.com/socktainer/socktainer/pull/52))                                                                  |

## System

| Endpoint                    | Status | Notes                                                                                        |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `/auth`                     | ✅     | Authentication ([#105](https://github.com/socktainer/socktainer/pull/105))                   |
| `/info`                     | ✅     | System information ([#28](https://github.com/socktainer/socktainer/pull/28))                 |
| `/version`                  | ✅     | Version information ([#28](https://github.com/socktainer/socktainer/pull/28))                |
| `/_ping`                    | ✅     | Ping endpoint                                                                                |
| `/events`                   | ✅     | System events                                                                                |
| `/system/df`                | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/commit`                   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/distribution/{name}/json` | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/session`                  | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |

## Plugins

:::info
Apple container supports a plugin system. These endpoints should be revisited once the project matures.
:::

| Endpoint                  | Status | Notes                                                                                                           |
| ------------------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| `/plugins`                | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/privileges`     | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/pull`           | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/{name}/json`    | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/{name}`         | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/{name}/enable`  | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/{name}/disable` | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/{name}/upgrade` | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/create`         | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/{name}/push`    | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/plugins/{name}/set`     | ⚠️     | Apple container supports plugins, revisit in future ([#18](https://github.com/socktainer/socktainer/issues/18)) |

## Swarm (Not Applicable)

:::warning
Swarm-related endpoints are not applicable to Socktainer and should return appropriate errors to users.
:::

| Endpoint                | Status | Notes                                                                                     |
| ----------------------- | ------ | ----------------------------------------------------------------------------------------- |
| `/nodes`                | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/nodes/{id}`           | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/nodes/{id}/update`    | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/swarm`                | ⚠️     | Not applicable ([#17](https://github.com/socktainer/socktainer/pull/17))                  |
| `/swarm/init`           | ⚠️     | Not applicable ([#17](https://github.com/socktainer/socktainer/pull/17))                  |
| `/swarm/join`           | ⚠️     | Not applicable ([#17](https://github.com/socktainer/socktainer/pull/17))                  |
| `/swarm/leave`          | ⚠️     | Not applicable ([#17](https://github.com/socktainer/socktainer/pull/17))                  |
| `/swarm/update`         | ⚠️     | Not applicable ([#17](https://github.com/socktainer/socktainer/pull/17))                  |
| `/swarm/unlockkey`      | ⚠️     | Not applicable ([#17](https://github.com/socktainer/socktainer/pull/17))                  |
| `/swarm/unlock`         | ⚠️     | Not applicable ([#17](https://github.com/socktainer/socktainer/pull/17))                  |
| `/services`             | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/services/create`      | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/services/{id}`        | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/services/{id}/update` | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/services/{id}/logs`   | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/tasks`                | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/tasks/{id}`           | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/tasks/{id}/logs`      | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/secrets`              | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/secrets/create`       | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/secrets/{id}`         | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/secrets/{id}/update`  | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/configs`              | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/configs/create`       | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/configs/{id}`         | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/configs/{id}/update`  | ⚠️     | Not applicable, part of swarm ([#18](https://github.com/socktainer/socktainer/issues/18)) |

## Contributing to API Coverage

This feature parity list is subject to change as both Socktainer and Apple's container framework mature. If you're interested in implementing any of the missing endpoints:

1. Check if there's an existing GitHub issue for the endpoint
2. Review the Apple container framework capabilities
3. File a new issue before starting implementation to coordinate with other contributors
