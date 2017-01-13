var gulp = require('gulp'),
	watch = require('gulp-watch'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	sourceMaps = require('gulp-sourcemaps'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	copy = require('gulp-copy'),
	plumber = require('gulp-plumber');

gulp.task('babel', () => {
	return gulp.src('src/main.js')
		.pipe(plumber({
			errorHandler: (err) => {
				console.log(err);
				// this.emit('end');
			}
		}))
		.pipe(sourceMaps.init())
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
	return gulp.src('src/**.css')
		.pipe(plumber({
			errorHandler: (err) => {
				console.log(err);
				// this.emit('end');
			}
		}))
		.pipe(sourceMaps.init())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(cleanCSS())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('dist'))
});

gulp.task('copy', () => {
	return gulp.src('src/**.html')
		.pipe(plumber({
			errorHandler: (err) => {
				console.log(err);
				// this.emit('end');
			}
		}))
		.pipe(copy('dist/', { prefix: 1 }));
});

gulp.task('watch', () => {
	gulp.watch('src/**.js', ['babel']);
	gulp.watch('src/**.css', ['minify-css']);
	gulp.watch('src/**', ['copy']);
});

gulp.task('default', () => {
});
