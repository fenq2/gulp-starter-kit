const gulp = require('gulp'),
	pug2html = require('./gulp/tasks/pug2html');

module.exports.start = gulp.series(pug2html);