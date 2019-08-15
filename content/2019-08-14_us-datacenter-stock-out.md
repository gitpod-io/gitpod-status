---
title: US datacenter stock-out
date: '2019-08-14T14:31:14.942Z'
severity: degraded-performance
affectedsystems:
  - workspaces
  - imagebuilds
resolved: true
---
The US GCP Compute zone (i.e. datacenter) we're using is currently out of resources, so our US cluster is having trouble finding new nodes to scale up. This means that starting new workspaces may get stuck in "Building Workspace Image" or "Acquiring Node" for a long time.

<!--- language code: en -->
