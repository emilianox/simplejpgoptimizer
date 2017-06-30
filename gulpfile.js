const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('default', () =>
	gulp.src('./input/**/*')
		.pipe(imagemin([
            imageminMozjpeg()
        ]))
		.pipe(gulp.dest('./output/'))
);