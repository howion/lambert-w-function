// Config
const RELEASE_DIR = './dist'
const DEFINITIONS_RELEASE_DIR = RELEASE_DIR + '/definitions'
const JS_RELEASE_DIR = RELEASE_DIR + '/js'
const DEV_DIR = './src'

// Patterns
const DEV_DIR_TS = DEV_DIR + '/**/*.ts'

// Packages
const { task, src, dest, series, watch } = require('gulp'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    ts = require('gulp-typescript'),
    merge2 = require('merge2'),
    clip = require('gulp-clip-empty-files')

let tsProjectJs = ts.createProject('tsconfig.json', {
    declaration: false
})

let tsProjectDefinition = ts.createProject('tsconfig.json', {
    declaration: true,
    removeComments: false
})

task('clean', function () {
    return del([RELEASE_DIR], { force: true })
})

task('scripts', function () {
    let tsResource = src(DEV_DIR_TS).pipe(plumber())

    return merge2([
        // DEFS
        tsResource.pipe(tsProjectDefinition()).dts.pipe(clip()).pipe(dest(DEFINITIONS_RELEASE_DIR)),
        // JS
        tsResource.pipe(tsProjectJs()).js.pipe(clip()).pipe(dest(JS_RELEASE_DIR))
    ])
})

task('watch', function () {
    return watch(DEV_DIR_TS, series(['scripts']))
})

task('build', series(['clean', 'scripts']))
task('default', series(['clean', 'scripts', 'watch']))
