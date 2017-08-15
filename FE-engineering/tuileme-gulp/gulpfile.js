var gulp = require('gulp')

var cssnano = require('gulp-cssnano'),  //css压缩
    uglify = require('gulp-uglify'),         //js压缩
    concat = require('gulp-concat'),         //合并文件
    rename = require('gulp-rename'),         //重新命名
    clean = require('gulp-clean'),           //清空文件夹
    jshint = require('gulp-jshint')          //js代码规范性检查

gulp.task('css',function(){
    gulp.src('./styles/*.css')
        .pipe(concat('style.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('js',function(){
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('index.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('clear',function(){
    gulp.src('dist/*',{read: false})
        .pipe(clean())
})

gulp.task('default', ['css','js'])