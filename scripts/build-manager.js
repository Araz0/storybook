const { buildStaticStandalone } = require('../lib/builder-webpack5/dist/cjs/build-static');

process.env.NODE_ENV = 'production';

buildStaticStandalone({
  managerOnly: true,
  outputDir: './lib/core/prebuilt',
  configDir: './scripts/build-manager-config',
});
