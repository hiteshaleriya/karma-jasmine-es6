// Karma configuration
// Generated on Fri Feb 19 2016 12:09:53 GMT+0530 (India Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            //{ pattern: 'test-context.js' }
            'test/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            //'test-context.js': ['webpack'],
            'test/*.js': ['webpack']
        },
        webpack: {
            module: {
                rules: [{
                    test: /\.js?/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        presets: ['es2015', 'stage-2']
                    }
                }, {
                    test: /\.js/,
                    exclude: /node_modules|test|test_js/,
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true
                    }
                }]
            },
            watch: true
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage', 'junit'],

        coverageReporter: {
            type: 'html', //lcov
            dir: 'test_js',
            subdir: '.'
        },

        junitReporter: {
            outputDir: 'test_js',
            outputFile: 'output.xml',
            useBrowserName: false
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'], //PhantomJS


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}