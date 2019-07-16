// CONFIGS
const RELEASE_DIR = './dist'
const DEFINITIONS_RELEASE_DIR = RELEASE_DIR + '/definitions'
const JS_RELEASE_DIR = RELEASE_DIR + '/js'
const DEV_DIR = './src'

// PATTERNS
const DEV_DIR_TS = DEV_DIR + '/**/*.ts'

// PACKAGES
const { task, src, dest, series, watch } = require('gulp'),
       plumber = require('gulp-plumber'),
       del     = require('del'),
       ts      = require('gulp-typescript'),
       merge2  = require('merge2'),
       clip    = require('gulp-clip-empty-files')

// FOR GENERATING JS FILES
let tsProjectJs = ts.createProject('tsconfig.json', {
    declaration: false
})

// FOR GENERATING DEFINITION FILES WITH TSDOC
let tsProjectDefinition = ts.createProject('tsconfig.json', {
    declaration: true,
    removeComments: false
})

// FRESH START
task('clean', function() {
    return del([ RELEASE_DIR ], { force: true })
})

// COMPILE SCRIPTS
task('scripts', function() {
    // GENERATE RESOURCE
    let tsResource = src(DEV_DIR_TS).pipe(plumber())

    // MERGE DEFINITION AND JS FILES
    return merge2([
        // DEFINITIONS
        tsResource.pipe(tsProjectDefinition())
                  .dts
                  .pipe(clip())
                  .pipe(dest(DEFINITIONS_RELEASE_DIR)),
        // JS
        tsResource.pipe(tsProjectJs())
                  .js
                  .pipe(clip())
                  .pipe(dest(JS_RELEASE_DIR))
    ])
})

// WATCH CHANGES
task('watch', function() {
    return watch(DEV_DIR_TS, series([ 'scripts' ]))
})

// DEFAULT TASK
task('default', series([ 'scripts', 'watch' ]))
