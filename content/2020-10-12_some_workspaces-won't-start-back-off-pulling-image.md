---
title: "Some workspaces won't start (cannot pull image: Back-off pulling image)"
date: "2020-10-12T09:00:00.000Z"
severity: partial-outage
affectedsystems:
  - workspaces
  - imagebuilds
resolved: true
---
Some workspaces won't start and show the error message "cannot pull image: Back-off pulling image": https://github.com/gitpod-io/gitpod/issues/1979

<!--- language code: en -->

::: Update: Resolved. Problem was Registry Facade stuck on an outdated cert. | 2020-10-12T09:25:00.000Z

:::
