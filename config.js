module.exports = {
  "title": "Gitpod",
  "name": "gitpod",
  "description": "Gitpod service status",
  "defaultLocale": "en",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],
  "content": {
    "frontMatterFormat": "yaml",
    systems: [
      'dashboard',
      'workspaces',
      'imagebuilds',
      'website'
    ]
  }
}