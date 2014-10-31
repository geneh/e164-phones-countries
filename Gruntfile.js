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
    qunit: {
      all: ['test/*.html']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>.js | (c) <%= grunt.template.today("yyyy") %> Gene Hazan | MIT License */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint','qunit','uglify']);
  grunt.registerTask('travis', ['default']);
};