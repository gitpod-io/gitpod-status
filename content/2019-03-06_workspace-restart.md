---
title: Workspaces need restart
date: '2019-03-06T15:35:34.711Z'
severity: degraded-performance
affectedsystems:
  - workspaces
resolved: true
---
Due to an unexpected issue while deploying a fresh version, running workspaces can not connect to the API any more. As a result, git actions as well as controlling the workspace from within Theia stopped working.
As a workaround, stop running workspaces from the your [dashboard](https://gitpod.io/workspaces) and restart them. Your state will be restored as usual.

<!--- language code: en -->
