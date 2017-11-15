var gulp = require('gulp')
var uglify = require('gulp-uglify');
var pump = require('pump')
var del = require('del');
var replace = require('gulp-replace');
var zip = require('gulp-zip');
var fs = require('fs');
var argv = require('yargs').argv;
var Q = require('q');
const env = argv.env;
const pn = argv.pn;
const help = argv.h;


gulp.task('test',function(){
	console.log(env);
	console.log(pn);
})

function readVersion () {
	var currentVer = fs.readFileSync('./version.json','utf-8');
	return JSON.parse(currentVer);
}

function writeVersion (newVersion) {
	fs.writeFileSync('./version.json',JSON.stringify(newVersion,null,'  '),'utf-8');
}

function printHelp () {
	console.log('gulp --env=... --pn=...启动\nenv是项目环境，pn是项目名（参考version.json）')
}

gulp.task('default',function(){
	if(!env || !pn || help) {
		printHelp();
    } else {
		console.log('开始压缩');
		gulp.start('zip');
	}
})

//删除所有文件夹及文件
gulp.task('del',function(cb){
	console.log('开始删除')

	var deferred = Q.defer()
	del([
		pn + '/build/**/*'
	]).then(function(paths){
		//'删除的文件和文件夹(' + paths.length + '):\n', paths.join('\n')
		console.log('删除的文件和文件夹(' + paths.length + '):\n',paths.join('\n'));
		deferred.resolve();
	})
	console.log('删除完毕!');
	return deferred.promise;
})

//plugin-properties
gulp.task('copy:plugin',['del'],function(cb){
	console.log('begin copy plugin-properties')
	var version = readVersion();
	version[env][pn].version += 1;
	writeVersion(version);
	return gulp.src(pn + '/plugin.properties')
	.pipe(replace(/<version>/ig,version[env][pn].version))
	.pipe(gulp.dest(pn + '/build'))
});

//www
gulp.task('copy:www',['copy:plugin'],function(cb) {
	console.log('begin copy www')

	return gulp.src([pn + '/www/**/*',`!${pn}/www/lib/ionic/js/ionic.bundle.js`],{base: `${pn}`})
			.pipe(gulp.dest(pn + '/build'))

})

//.zip
gulp.task('zip',['copy:www'],function(cb){
		return gulp.src(pn + '/build/**/*')
			.pipe(zip('www.zip'))
			.pipe(gulp.dest(pn + '/build'))
})