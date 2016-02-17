Package.describe({
  name: 'classcraft:googleapis',
  summary: "Wrapper around npm package : googleapis",
  version: "2.1.7",
  git: 'https://github.com/classcraft/meteor-googleapis.git'
});

Npm.depends( {
	"googleapis": "2.1.7"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('classcraft:googleapis.js', "server");
  if(api.export) api.export('googleapis');
});
