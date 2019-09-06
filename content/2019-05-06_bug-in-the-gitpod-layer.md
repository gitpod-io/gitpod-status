---
title: Bug in the Gitpod layer
date: '2019-05-06T04:51:00.000Z'
severity: degraded-performance
affectedsystems:
  - imagebuilds
resolved: true
---
Images based on some versions of Debian currently do not build. This is due to a bug in the Gitpod layer which gets added at the end of each image build. As a workaround the `workspace-full` image could be used. Related issue [gitpod-io#542](https://github.com/gitpod-io/gitpod/issues/542).

<!--- language code: en -->

::: update Resolved | 2019-05-06T06:02:00.000Z
The fix has been deployed: https://github.com/gitpod-io/gitpod/issues/542#issuecomment-489518744
:::