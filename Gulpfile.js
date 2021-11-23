'use strict';

const { src, dest, watch, series, parallel } = require('gulp');
const data = require('gulp-data');
const rimraf = require('gulp-rimraf');
const nunjucksRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const glob = require('glob');

const path = {
  input: 'app/',
  output: 'dist/',
  scripts: {
    input: 'app/scripts/*.js',
    output: 'dist/js'
  },
  rules: {
    input: 'app/templates/rules/**/**/*.njk',
    output: 'dist/js/rules'
  },
  sources: {
    input: 'app/templates/sources/**/**/*.njk',
    output: 'dist/js/sources'
  },
  nunjucks: {
    pages: 'app/pages/**/*.+(html|njk|nunjucks)',
    templates: 'app/templates/**/*.+(html|njk|nunjucks)',
    data: './app/data.json'
  },
  images: {
    input: 'app/images/**/*',
    output: 'dist/img'
  },
  static: {
    css: 'app/css/*.css',
    other: 'app/static/*'
  }
};


console.log(glob.sync(path.nunjucks.pages));

var manageEnvironment = function(environment) {
  environment.addGlobal('rulesTemplatePath', 'templates/rules/native/')
  environment.addGlobal('sourcesTemplatePath', 'templates/sources/native/')
}

function scriptTask() {
  return src([
    'app/scripts/plugins.js',
    'app/scripts/main.js'
  ])
    .pipe(concat({
      path: 'main.js'
    }))
    //.pipe(uglify())
    .pipe(dest(path.scripts.output))
    .pipe(browserSync.stream());
}

function nunjucksTask() {
  return src(path.nunjucks.pages)
    .pipe(data(function () {
      var d = require(path.nunjucks.data);
      d.listFiles = function(path){return glob.sync(path)}
      return d
    }))
    .pipe(nunjucksRender({
      path: ['app'],
      manageEnv: manageEnvironment
    }))
    .pipe(dest(path.output))
    .pipe(browserSync.stream());
}

function rulesTask() {
  return src(path.rules.input)
    .pipe(rename(function (path){
      path.extname = '.js'
    }))
    .pipe(dest(path.rules.output));
}

function sourcesTask() {
  return src(path.sources.input)
    .pipe(rename(function (path){
      path.extname = '.js'
    }))
    .pipe(dest(path.sources.output));
}

function imagesMinTask() {
  return src(path.images.input)
/*    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))*/
    .pipe(dest(path.images.output));
}

function cleanTask() {
  return src(path.output, {
    read: false,
    allowEmpty: true
  }).pipe(rimraf());
}

function copyStaticTask() {
  return src(path.static.other).pipe(dest(path.output));
}

function copyCssTask() {
  return src(path.static.css).pipe(dest(path.output + 'css'));
}

function watchTask() {
  watch([path.scripts.input], scriptTask);
  watch([path.nunjucks.pages, path.nunjucks.templates], nunjucksTask).on('change', browserSync.reload);
}

function browserSyncTask() {
  browserSync.init({
    server: {
      baseDir: path.output
    }
  });
}

exports.clean = cleanTask;
exports.nunjucks = nunjucksTask;
exports.scripts = scriptTask;
exports.rules = rulesTask;
exports.sources = sourcesTask;
exports.copystatic = series(copyStaticTask, copyCssTask);
exports.build = series(nunjucksTask, copyStaticTask, copyCssTask, scriptTask, rulesTask, sourcesTask);
exports.default = series(cleanTask, nunjucksTask, copyStaticTask, copyCssTask, scriptTask, rulesTask, sourcesTask);
exports.serve = parallel(browserSyncTask, watchTask);