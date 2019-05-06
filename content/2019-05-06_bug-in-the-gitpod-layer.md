---
title: Bug in the Gitpod layer
date: '2019-05-06T06:06:28.538Z'
severity: degraded-performance
affectedsystems:
  - imagebuilds
resolved: true
---
Images based on some versions of Debian currently do not build. This is due to a bug in the Gitpod layer which gets added at the end of each image build. As a workaround the `workspace-full` image could be used. Related issue [gitpod-io#542](https://github.com/gitpod-io/gitpod/issues/542).

<!--- language code: en -->
