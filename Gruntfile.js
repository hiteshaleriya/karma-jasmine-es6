module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
};
