module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        bitwise:true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        evil: true,
        latedef: true,
        quotmark: true,
        unused: true
      },
      all: ['Gruntfile.js', 'src/*.js', 'test/*.js']
    },
    nodeunit: {
      all: ['test/*_test.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %> Gene Hazan | MIT License */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint','nodeunit','uglify']);
  grunt.registerTask('travis', ['default']);
};