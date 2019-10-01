---
title: Deployment gone awry
date: '2019-10-01T08:20:00.141Z'
severity: partial-outage
affectedsystems:
  - dashboard
  - workspaces
resolved: false
---
A recent database migration took longer than expected. In the meantime the backend wasn't updated which caused a mismatch between the database and the consuming services. Once the migration finishes service will be back to normal.

<!--- language code: en -->
