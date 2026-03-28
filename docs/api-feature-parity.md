---
sidebar_position: 2
---

# Docker Engine API Feature Parity

This page tracks the implementation status of Docker Engine API v1.51 endpoints in Socktainer.

Source ticket: [socktainer/socktainer#14](https://github.com/socktainer/socktainer/issues/14)

:::important
This table is just a draft for Docker Engine API v1.51.
Comparing against Apple container `v0.10.0` (commit `6bdb647b69671c037e2188558ed2e5ba49af2e1a`).
Last updated March 18th, 2026.
:::

## Status Legend

- ✅ **Implemented** - Endpoint is fully functional
- ❌ **Not Implemented** - Endpoint is stubbed but not yet functional
- ⚠️ **Limited/Not Applicable** - Cannot be implemented due to Apple container limitations or not applicable to Socktainer's use case

:::note
Endpoints marked with `⚠️` might be implemented by Apple in the future,
or could be "mocked" by socktainer in the future.
:::

## Containers

| Endpoint                     | Status | Notes                                                                                        |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `/containers/json`           | ✅     |                                                                                              |
| `/containers/create`         | ✅     | [#37](https://github.com/socktainer/socktainer/pull/37)                                      |
| `/containers/{id}/json`      | ✅     |                                                                                              |
| `/containers/{id}/top`       | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/logs`      | ✅     |                                                                                              |
| `/containers/{id}/changes`   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/export`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/stats`     | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/resize`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/start`     | ✅     |                                                                                              |
| `/containers/{id}/stop`      | ✅     |                                                                                              |
| `/containers/{id}/restart`   | ✅     | [#82](https://github.com/socktainer/socktainer/pull/82)                                      |
| `/containers/{id}/kill`      | ✅     | [#82](https://github.com/socktainer/socktainer/pull/82)                                      |
| `/containers/{id}/update`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/rename`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/pause`     | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/unpause`   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/attach`    | ✅     | [#94](https://github.com/socktainer/socktainer/pull/94)                                      |
| `/containers/{id}/attach/ws` | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/containers/{id}/wait`      | ✅     | [#82](https://github.com/socktainer/socktainer/pull/82)                                      |
| `/containers/{id}`           | ✅     |                                                                                              |
| `/containers/{id}/archive`   | ✅     | [#169](https://github.com/socktainer/socktainer/pull/169)                                    |
| `/containers/prune`          | ✅     | [#65](https://github.com/socktainer/socktainer/pull/65)                                      |

## Images

| Endpoint                 | Status | Notes                                                                                        |
| ------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| `/images/json`           | ✅     |                                                                                              |
| `/build`                 | ✅     | [#101](https://github.com/socktainer/socktainer/pull/101)                                    |
| `/build/prune`           | ✅     | [#183](https://github.com/socktainer/socktainer/pull/183)                                    |
| `/images/create`         | ✅     | [#12](https://github.com/socktainer/socktainer/pull/12)                                      |
| `/images/{name}/json`    | ✅     |                                                                                              |
| `/images/{name}/history` | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)), could be handled entirely within socktainer. |
| `/images/{name}/push`    | ✅     | [#128](https://github.com/socktainer/socktainer/pull/128)                                    |
| `/images/{name}/tag`     | ✅     | [#126](https://github.com/socktainer/socktainer/pull/126)                                    |
| `/images/{name}`         | ✅     |                                                                                              |
| `/images/search`         | ⚠️     | No matching capability available([#18](https://github.com/socktainer/socktainer/issues/18)), who is responsible for this logic? |
| `/images/prune`          | ✅     | [#133](https://github.com/socktainer/socktainer/pull/133)                                    |
| `/images/{name}/get`     | ✅     | [#137](https://github.com/socktainer/socktainer/pull/137)                                    |
| `/images/get`            | ✅     | [#137](https://github.com/socktainer/socktainer/pull/137)                                    |
| `/images/load`           | ✅     | [#137](https://github.com/socktainer/socktainer/pull/137)                                    |

## Exec

| Endpoint                | Status | Notes |
| ----------------------- | ------ | ----- |
| `/containers/{id}/exec` | ✅     |       |
| `/exec/{id}/start`      | ✅     |       |
| `/exec/{id}/resize`     | ✅     |       |
| `/exec/{id}/json`       | ✅     |       |

## Volumes

| Endpoint          | Status | Notes                                                   |
| ----------------- | ------ | ------------------------------------------------------- |
| `/volumes`        | ✅     | [#58](https://github.com/socktainer/socktainer/pull/58) |
| `/volumes/create` | ✅     | [#58](https://github.com/socktainer/socktainer/pull/58) |
| `/volumes/{name}` | ✅     | [#58](https://github.com/socktainer/socktainer/pull/58) |
| `/volumes/prune`  | ✅     | [#58](https://github.com/socktainer/socktainer/pull/58) |

## Networks

| Endpoint                    | Status | Notes                                                                                        |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `/networks`                 | ✅     | [#44](https://github.com/socktainer/socktainer/pull/44)                                      |
| `/networks/{id}`            | ✅     | [#44](https://github.com/socktainer/socktainer/pull/44) [#52](https://github.com/socktainer/socktainer/pull/52) |
| `/networks/create`          | ✅     | [#52](https://github.com/socktainer/socktainer/pull/52)                                      |
| `/networks/{id}/connect`    | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/networks/{id}/disconnect` | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/networks/prune`           | ✅     | [#52](https://github.com/socktainer/socktainer/pull/52)                                      |

## System

| Endpoint                    | Status | Notes                                                                                        |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `/auth`                     | ✅     | [#105](https://github.com/socktainer/socktainer/pull/105)                                    |
| `/info`                     | ✅     | [#28](https://github.com/socktainer/socktainer/pull/28)                                      |
| `/version`                  | ✅     | [#28](https://github.com/socktainer/socktainer/pull/28)                                      |
| `/_ping`                    | ✅     |                                                                                              |
| `/commit`                   | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/events`                   | ✅     |                                                                                              |
| `/system/df`                | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |
| `/distribution/{name}/json` | ❌     | Not implemented, stubbed for now ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/session`                  | ⚠️     | No matching capability available ([#18](https://github.com/socktainer/socktainer/issues/18)) |

## Plugins

| Endpoint                  | Status | Notes                                                                                        |
| ------------------------- | ------ | -------------------------------------------------------------------------------------------- |
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

| Endpoint                | Status | Notes                                                                                        |
| ----------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `/nodes`                | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/nodes/{id}`           | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/nodes/{id}/update`    | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/swarm`                | ⚠️     | Not applicable, should return some kind of an error to user ([#17](https://github.com/socktainer/socktainer/pull/17)). |
| `/swarm/init`           | ⚠️     | Not applicable, should return some kind of an error to user ([#17](https://github.com/socktainer/socktainer/pull/17)). |
| `/swarm/join`           | ⚠️     | Not applicable, should return some kind of an error to user ([#17](https://github.com/socktainer/socktainer/pull/17)). |
| `/swarm/leave`          | ⚠️     | Not applicable, should return some kind of an error to user ([#17](https://github.com/socktainer/socktainer/pull/17)). |
| `/swarm/update`         | ⚠️     | Not applicable, should return some kind of an error to user ([#17](https://github.com/socktainer/socktainer/pull/17)). |
| `/swarm/unlockkey`      | ⚠️     | Not applicable, should return some kind of an error to user ([#17](https://github.com/socktainer/socktainer/pull/17)). |
| `/swarm/unlock`         | ⚠️     | Not applicable, should return some kind of an error to user ([#17](https://github.com/socktainer/socktainer/pull/17)). |
| `/services`             | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/services/create`      | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/services/{id}`        | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/services/{id}/update` | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/services/{id}/logs`   | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/tasks`                | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/tasks/{id}`           | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/tasks/{id}/logs`      | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/secrets`              | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/secrets/create`       | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/secrets/{id}`         | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/secrets/{id}/update`  | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/configs`              | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/configs/create`       | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/configs/{id}`         | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |
| `/configs/{id}/update`  | ⚠️     | Not applicable, part of swarm. Should return some kind of an error to user ([#18](https://github.com/socktainer/socktainer/issues/18)). |

## Contributing to API Coverage

This feature parity list is subject to change as both Socktainer and Apple's container framework mature. If you're interested in implementing any of the missing endpoints:

1. Check if there's an existing GitHub issue for the endpoint
2. Review the Apple container framework capabilities
3. File a new issue before starting implementation to coordinate with other contributors
