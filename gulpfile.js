const gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
    pump = require('pump'),
    babel = require('gulp-babel');

const scssFile = 'assets/sass/**/*.scss';

const cssDest = 'assets/css/';

const sassDevOptions = {
	outputStyle: 'expanded'
}

const sassProdOptions = {
	outputStyle: 'compressed'
}

const jsFile = 'assets/js/*js';

const jsDest = 'assets/js/dist/';

gulp.task('sassdev', function() {

	return gulp.src(scssFile)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cssDest))

});

gulp.task('sassprod', function() {

	return gulp.src(scssFile)
		.pipe(sass().on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(cssDest))

});

gulp.task('minifyConcatJS', function(cb){

	pump([
		gulp.src(jsFile),
		gulp.dest(jDdest),
		rename({suffix: '.min'}),
        uglify(),
        babel(),
		gulp.dest(jsDest)
	], cb);

});

gulp.task('w', function() {

	gulp.watch(scssFile, ['sassdev']);
	gulp.watch(scssFile, ['sassprod']);
    gulp.watch(jsFile, ['minifyConcatJS']);
});

gulp.task('default', ['sassdev', 'sassprod', 'minifyConcatJS', 'w']);
