const gulp = require('gulp'),
	pug2html = require('./gulp/tasks/pug2html'),
	styles = require('./gulp/tasks/styles');

module.exports.start = gulp.series(pug2html, styles);