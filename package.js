Package.describe({
  name: 'gaydamaka:easy-elasticsearch',
  summary: "Elasticsearch Engine for EasySearch",
  version: "1.0.0",
  git: "https://github.com/gajdamaka/easy-elasticsearch",
  documentation: 'README.md'
});

Npm.depends({
  'elasticsearch': '13.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');

  // Dependencies
  api.use(['check', 'ecmascript']);
  api.use(['easysearch:core@2.2.0', 'erasaur:meteor-lodash@4.0.0']);

  api.addFiles([
    'lib/data-syncer.js',
    'lib/engine.js',
  ]);

  api.export('EasySearch');
  api.mainModule('./lib/main.js');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'ecmascript']);
  api.use('gaydamaka:easy-elasticsearch');

  api.addFiles(['tests/engine-tests.js']);
});
