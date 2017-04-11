'use strict';

const program = require('commander');
const updateNotifier = require('update-notifier');
const packageJson = require('../package.json');

// See https://github.com/yeoman/update-notifier#how for how this works.
updateNotifier({pkg: packageJson}).notify();

program
  .version(packageJson.version)
  .description('API console tools')
  .command('build',
    'Builds the API console application source code for given RAML file.')
  .parse(process.argv);
