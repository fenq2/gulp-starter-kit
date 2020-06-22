'use strict';

const { dest, src, watch, series, parallel, task } = require('gulp');
const requireDir = require('require-dir');
const server = require('./gulp/tasks/server');
requireDir('./gulp/tasks/');

const dev = parallel('pug2html', 'styles', 'scripts', 'fonts', 'images', 'sprites');
const build = series('del', '_styles', '_pug2html', 'copyModules', 'scripts', 'fonts', 'images', 'sprites');

module.exports.dev = series(dev, 'browser-sync');
module.exports.build = series(build);