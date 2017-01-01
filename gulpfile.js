var gulp = require('gulp'),
    gutil = require('gulp-util'), //彩色打印
    watchPath = require('gulp-watch-path'), //路径获取
    jshint = require('gulp-jshint'), //代码验证检查
    uglify = require('gulp-uglify'), //压缩js代码
    cleanCSS = require('gulp-clean-css'), //压缩css代码
    rename = require('gulp-rename'), //文件重命名
    concat = require('gulp-concat'), //合并js文件
    notify = require('gulp-notify'), //更改提醒
    livereload = require('gulp-livereload'), //自动刷新页面
    combiner = require('stream-combiner2'), //error捕获
    sourcemaps = require('gulp-sourcemaps'), //用于解决压缩代码后调试困难
    autoprefixer = require('gulp-autoprefixer'), //自动添加css前缀
    imagemin = require('gulp-imagemin'), //图片压缩
    less = require('gulp-less') //less
    // , sass = require('node-sass');

// error捕获
var handleError = function(err) {
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('lineNumber: ' + colors.red(err.lineNumber))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
};

// 复制html
gulp.task('html', function() {
    //发生错误时让gulp继续运行
    var combined = combiner.obj([
        gulp.src('src/*.html'), //源路径
        gulp.dest('dist/') //输出路径
    ]);
    // 打印错误信息
    combined.on('error', handleError)
});

// 压缩指定目录下所有js文件
gulp.task('uglifyjs', function() {
    var combined = combiner.obj([
        gulp.src('src/js/**/*.js'), //源路径
        sourcemaps.init(), //开启sourcemaps
        uglify(), //压缩混淆
        concat('index.min.js'), //添加后缀
        /*rename({
            suffix: '.min'
        }),*/
        sourcemaps.write('./'), //输出sourcemaps
        gulp.dest('dist/js/') //输出文件
    ])
    combined.on('error', handleError)
});


// gulp默认任务所关联的任务
gulp.task('auto', function() {
    livereload.listen()
    gulp.watch(['dist/**']).on('change', livereload.changed)
})
