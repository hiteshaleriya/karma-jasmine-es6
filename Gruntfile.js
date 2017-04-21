module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        coveralls: {
            options: {
                debug: true,
                coverageDir: 'test_js',
                dryRun: true,
                force: true,
                recursive: true
            }
        }
    });

    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    grunt.registerTask('default', ['karma']);
};
