**If you experience an issue with Gitpod, please file an issue [here](https://github.com/gitpod-io/gitpod/issues).**

This repository backs our status page (https://status.gitpod.io).
The status page is generated statically and pushed to a Google bucket where their CDN serves it.

[![Open in Gitpod](http://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/gitpod-io/gitpod-status)

### How do I create a new incident?
```
# create the incident and fill in your incident details
yarn new-incident

# regenerate status page
yarn generate

# make sure everything looks fine
cd dist && npx http-server -p 8080

# push to Github and let Jenkins update the bucket
git commit -a -m 'Updated incidents'
git push
```

### Is it ok to push my changes directly to master?
Yes

### How do I update an incident?
Check out the [Statusfy](https://docs.statusfy.co/guide/incidents.html#updates-containers) documentation.
Don't forget to go through the _generate, preview and push_ sequence as during incident creation.
