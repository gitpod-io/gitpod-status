---
title: Cluster outage
date: '2019-01-28T09:10:47.335Z'
severity: partial-outage
affectedsystems:
  - workspaces
  - imagebuilds
resolved: true
---
In the EU cluster some workspaces did not start properly or if they ran reported "Out of disk space" issues.

<!--- language code: en -->
::: update Resolved | 2019-01-28T12:15:20.322Z
In an attempt to resolve a Google Cloud Platform related issue we introduced a misconfiguration in our cluster which caused severly degraded IO performance.
We are monitoring things closey. For the time being users in Europe will be working on the US cluster.
:::