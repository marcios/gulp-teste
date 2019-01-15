var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var less = require('gulp-less');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin')
var rename = require('gulp-rename')
var uglifycss = require('gulp-uglifycss')
var imagemin = require('gulp-imagemin')




gulp.task('default',['compileBootstrap','lib','appJs','imagem','html']);

gulp.task('compileBootstrap', function() {
  return gulp.src('./node_modules/bootstrap/less/bootstrap.less')
    .pipe(customizeBootstrap('./dev/styles/less/*.less'))
    .pipe(less())
    .pipe(uglifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('lib', function() {
  return gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/angular/angular.min.js'
      
    ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('appJs',function(){

  return gulp.src([
    './dev/**/*.js/'
  ]).pipe(concat('app.all.js'))
  .pipe(jsmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/js/'))

});


gulp.task('imagem',function(){
  return gulp.src('./dev/imagens/*')
    .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'))
})


gulp.task('watcher', function() {
    gulp.watch('./dev/app/**/*.js',['appJs'])
    gulp.watch('./dev/**/*.css',['compileBootstrap'])
});



gulp.task('html',function(){
  return gulp.src('./*.html')
            .pipe(gulp.dest('./public'))
})

gulp.task('dist',function(){
  return gulp.src('./dist/**/')
        .pipe(gulp.dest('./public'))
})
gulp.task('prod',['default','dist'])
  