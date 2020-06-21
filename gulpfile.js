'use strict';

const { dest, src, watch, series, parallel, task } = require('gulp');
const taskPath = require('./gulp/path/tasks');

module.exports = function() {
    taskPath.forEach(function(taskPath) {
        require(taskPath)();
    });
    return gulp;
};

module.exports.start = series('pug2html');	
