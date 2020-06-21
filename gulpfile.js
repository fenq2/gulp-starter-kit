'use strict';

const { dest, src, watch, series, parallel, task } = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks/');

module.exports.start = series('pug2html');	
