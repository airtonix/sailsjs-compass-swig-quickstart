/**
 * Gruntfile
 *
 * If you created your Sails app with `sails new foo --linker`,
 * the following files will be automatically injected (in order)
 * into the EJS and HTML files in your `views` and `assets` folders.
 *
 * At the top part of this file, you'll find a few of the most commonly
 * configured options, but Sails' integration with Grunt is also fully
 * customizable.  If you'd like to work with your assets differently
 * you can change this file to do anything you like!
 *
 * More information on using Grunt to work with static assets:
 * http://gruntjs.com/configuring-tasks
 */

module.exports = function (grunt) {



  /**
   * CSS files to inject in order
   * (uses Grunt-style wildcard/glob/splat expressions)
   *
   * By default, Sails also supports LESS in development and production.
   * To use SASS/SCSS, Stylus, etc., edit the `sails-linker:devStyles` task
   * below for more options.  For this to work, you may need to install new
   * dependencies, e.g. `npm install grunt-contrib-sass`
   */

  var screenCssToInject = [
    'linker/styles/*screen.css',
  ];
  var ieCssToInject = [
    'linker/styles/*ie.css'
  ];
  var printCssToInject = [
    'linker/styles/*print.css'
  ];


  /**
   * Javascript files to inject in order
   * (uses Grunt-style wildcard/glob/splat expressions)
   *
   * To use client-side CoffeeScript, TypeScript, etc., edit the
   * `sails-linker:devJs` task below for more options.
   */

  var jsFilesToInject = [

    // Below, as a demonstration, you'll see the built-in dependencies
    // linked in the proper order order

    // Bring in the socket.io client
    'linker/js/socket.io.js',

    // then beef it up with some convenience logic for talking to Sails.js
    'linker/js/sails.io.js',

    // A simpler boilerplate library for getting you up and running w/ an
    // automatic listener for incoming messages from Socket.io.
    'linker/js/app.js',

    // *->    put other dependencies here   <-*

    // All of the rest of your app scripts imported here
    'linker/**/*.js'
  ];


  /**
   * Client-side HTML templates are injected using the sources below
   * The ordering of these templates shouldn't matter.
   * (uses Grunt-style wildcard/glob/splat expressions)
   *
   * By default, Sails uses JST templates and precompiles them into
   * functions for you.  If you want to use jade, handlebars, dust, etc.,
   * edit the relevant sections below.
   */

  var templateFilesToInject = [
    'linker/**/*.html'
  ];



  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //
  // DANGER:
  //
  // With great power comes great responsibility.
  //
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  // Modify css file injection paths to use
  screenCssToInject = screenCssToInject.map(function (path) {
    return '.tmp/public/<%= pkg.version %>/' + path;
  });
  ieCssToInject = ieCssToInject.map(function (path) {
    return '.tmp/public/<%= pkg.version %>/' + path;
  });
  printCssToInject = printCssToInject.map(function (path) {
    return '.tmp/public/<%= pkg.version %>/' + path;
  });

  // Modify js file injection paths to use
  jsFilesToInject = jsFilesToInject.map(function (path) {
    return '.tmp/public/<%= pkg.version %>/' + path;
  });


  templateFilesToInject = templateFilesToInject.map(function (path) {
    return 'assets/' + path;
  });


  // Get path to core grunt dependencies from Sails
  var depsPath = grunt.option('gdsrc') || 'node_modules/sails/node_modules';
  grunt.loadTasks(depsPath + '/grunt-contrib-clean/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-copy/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-concat/tasks');
  grunt.loadTasks(depsPath + '/grunt-sails-linker/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-jst/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-watch/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-uglify/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-cssmin/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-coffee/tasks');

  // load all npm install grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    logLevel: 0,
    rev: {
      prod:{
        files: {
          src: [
            screenCssToInject,
            printCssToInject,
            ieCssToInject,
            jsFilesToInject
          ]
        }
      }
    },

    copy: {
      dev: {
        files: [
          {
          expand: true,
          cwd: './assets',
          src: [
            '**/*.css',
            '**/*.js',
            '**/*.{png,gif,bmp,jpg,jpeg}',
            '**/*.{ttf,otf,woff,eof}',
          ],
          dest: '.tmp/public/<%= pkg.version %>'
        }
        ]
      },
      bower: {
        files: [
          {
          expand: true,
          cwd: './bower_components',
          src: [
            '**/*.js',
          ],
          dest: '.tmp/public/<%= pkg.version %>/js/vendor'
        }
        ]
      },
      build: {
        files: [
          {
          expand: true,
          cwd: '.tmp/public',
          src: ['**/*'],
          dest: 'www'
        }
        ]
      }
    },

    clean: {
      dev: ['.tmp/public/**'],
      build: ['www']
    },

    jst: {
      dev: {

        // To use other sorts of templates, specify the regexp below:
        // options: {
        //   templateSettings: {
        //     interpolate: /\{\{(.+?)\}\}/g
        //   }
        // },

        files: {
          '.tmp/public/<%= pkg.version %>/jst.js': templateFilesToInject
        }
      }
    },


    compass: {
      dev: {
        options: {
          httpPath: '/<%= pkg.version %>/',
          sassDir: 'assets/linker/styles',
          // imagesDir: 'assets/images',
          // imagesPath: '<%= pkg.version %>/images',
          cssDir: '.tmp/public/<%= pkg.version %>/linker/styles/',
          importPath: 'bower_components/foundation/scss',
          quiet: true
        }
      }
    },


    coffee: {
      dev: {
        options:{
          bare:true
        },
        files: [
          {
            expand: true,
            cwd: 'assets/js/',
            src: ['**/*.coffee'],
            dest: '.tmp/public/<%= pkg.version %>/js/',
            ext: '.js'
          }, {
            expand: true,
            cwd: 'assets/linker/js/',
            src: ['**/*.coffee'],
            dest: '.tmp/public/<%= pkg.version %>/linker/js/',
            ext: '.js'
          }
        ]
      }
    },

    concat: {
      js: {
        src: jsFilesToInject,
        dest: '.tmp/public/<%= pkg.version %>/concat/production.js'
      },
      cssScreen: {
        src: screenCssToInject,
        dest: '.tmp/public/<%= pkg.version %>/concat/screen.css'
      },
      cssPrint: {
        src: printCssToInject,
        dest: '.tmp/public/<%= pkg.version %>/concat/print.css'
      },
      cssIe: {
        src: ieCssToInject,
        dest: '.tmp/public/<%= pkg.version %>/concat/ie.css'
      }
    },

    uglify: {
      dist: {
        src: ['.tmp/public/<%= pkg.version %>/concat/production.js'],
        dest: '.tmp/public/<%= pkg.version %>/min/production.js'
      }
    },

    cssmin: {
      distScreen: {
        src: ['.tmp/public/<%= pkg.version %>/concat/screen.css'],
        dest: '.tmp/public/<%= pkg.version %>/min/screen.css'
      },
      distPrint: {
        src: ['.tmp/public/<%= pkg.version %>/concat/print.css'],
        dest: '.tmp/public/<%= pkg.version %>/min/print.css'
      },
      distIe: {
        src: ['.tmp/public/<%= pkg.version %>/concat/ie.css'],
        dest: '.tmp/public/<%= pkg.version %>/min/ie.css'
      }
    },


    'sails-linker': {
      /*
        Development Linkers
       */
      devJs: {
        options: {
          startTag: '<!--SCRIPTS-->',
          endTag: '<!--SCRIPTS END-->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: '.tmp/public'
        },
        files: {
          '.tmp/public/**/*.html': jsFilesToInject,
          'views/**/*.html': jsFilesToInject,
          'views/**/*.ejs': jsFilesToInject,
          'views/**/*.swig': jsFilesToInject
        }
      },
      devScreenStyles: {
        options: {
          startTag: '<!--SCREEN STYLES-->',
          endTag: '<!--SCREEN STYLES END-->',
          fileTmpl: '<link rel="stylesheet" media="screen, projector" href="%s">',
          appRoot: '.tmp/public'
        },

        // cssFilesToInject defined up top
        files: {
          '.tmp/public/**/*.html': screenCssToInject,
          'views/**/*.html': screenCssToInject,
          'views/**/*.ejs': screenCssToInject,
          'views/**/*.swig': screenCssToInject
        }
      },
      devPrintStyles: {
        options: {
          startTag: '<!--PRINT STYLES-->',
          endTag: '<!--PRINT STYLES END-->',
          fileTmpl: '<link rel="stylesheet" media="print" href="%s">',
          appRoot: '.tmp/public'
        },

        // cssFilesToInject defined up top
        files: {
          '.tmp/public/**/*.html': printCssToInject,
          'views/**/*.html': printCssToInject,
          'views/**/*.ejs': printCssToInject,
          'views/**/*.swig': printCssToInject
        }
      },
      devIeStyles: {
        options: {
          startTag: '<!--IE STYLES-->',
          endTag: '<!--IE STYLES END-->',
          fileTmpl: '<link rel="stylesheet" media="screen, projector" href="%s">',
          appRoot: '.tmp/public'
        },
        // cssFilesToInject defined up top
        files: {
          '.tmp/public/**/*.html': ieCssToInject,
          'views/**/*.html': ieCssToInject,
          'views/**/*.ejs': ieCssToInject,
          'views/**/*.swig': ieCssToInject
        }
      },
      // Bring in JST template object
      devTpl: {
        options: {
          startTag: '<!--TEMPLATES-->',
          endTag: '<!--TEMPLATES END-->',
          fileTmpl: '<script type="text/javascript" src="%s"></script>',
          appRoot: '.tmp/public'
        },
        files: {
          '.tmp/public/index.html': ['.tmp/public/<%= pkg.version %>/jst.js'],
          'views/**/*.html': ['.tmp/public/<%= pkg.version %>/jst.js'],
          'views/**/*.ejs': ['.tmp/public/<%= pkg.version %>/jst.js'],
          'views/**/*.swig': ['.tmp/public/<%= pkg.version %>/jst.js']
        }
      },

      /*
        Production Linkers
       */
      prodJs: {
        options: {
          startTag: '<!--SCRIPTS-->',
          endTag: '<!--SCRIPTS END-->',
          fileTmpl: '<script src="%s"></script>',
          appRoot: '.tmp/public'
        },
        files: {
          '.tmp/public/**/*.html': ['.tmp/public/<%= pkg.version %>/min/production.js'],
          'views/**/*.html': ['.tmp/public/<%= pkg.version %>/min/production.js'],
          'views/**/*.ejs': ['.tmp/public/<%= pkg.version %>/min/production.js'],
          'views/**/*.swig': ['.tmp/public/<%= pkg.version %>/min/production.js']
        }
      },
      prodScreenStyles: {
        options: {
          startTag: '<!--SCREEN STYLES-->',
          endTag: '<!--SCREEN STYLES END-->',
          fileTmpl: '<link rel="stylesheet" media="screen, projector" href="%s">',
          appRoot: '.tmp/public'
        },
        files: {
          '.tmp/public/index.html': ['.tmp/public/<%= pkg.version %>/min/screen.css'],
          'views/**/*.html': ['.tmp/public/<%= pkg.version %>/min/screen.css'],
          'views/**/*.ejs': ['.tmp/public/<%= pkg.version %>/min/screen.css'],
          'views/**/*.swig': ['.tmp/public/<%= pkg.version %>/min/screen.css']
        }
      },
      prodPrintStyles: {
        options: {
          startTag: '<!--PRINT STYLES-->',
          endTag: '<!--PRINT STYLES END-->',
          fileTmpl: '<link rel="stylesheet" media="print" href="%s">',
          appRoot: '.tmp/public'
        },
        files: {
          '.tmp/public/index.html': ['.tmp/public/<%= pkg.version %>/min/print.css'],
          'views/**/*.html': ['.tmp/public/<%= pkg.version %>/min/print.css'],
          'views/**/*.ejs': ['.tmp/public/<%= pkg.version %>/min/print.css'],
          'views/**/*.swig': ['.tmp/public/<%= pkg.version %>/min/print.css']
        }
      },
      prodIeStyles: {
        options: {
          startTag: '<!--IE STYLES-->',
          endTag: '<!--IE STYLES END-->',
          fileTmpl: '<link rel="stylesheet" media="screen, projector" href="%s">',
          appRoot: '.tmp/public'
        },
        files: {
          '.tmp/public/index.html': ['.tmp/public/<%= pkg.version %>/min/ie.css'],
          'views/**/*.html': ['.tmp/public/<%= pkg.version %>/min/ie.css'],
          'views/**/*.ejs': ['.tmp/public/<%= pkg.version %>/min/ie.css'],
          'views/**/*.swig': ['.tmp/public/<%= pkg.version %>/min/ie.css']
        }
      },

    },

    watch: {
      api: {
        // API files to watch:
        files: ['api/**/*']
      },
      assets: {
        // Assets to watch:
        files: ['assets/**/*'],
        // When assets are changed:
        tasks: [
          'compileAssets',
          'linkAssets'
        ]
      },
      templates: {
        files: ['views/**/*',],
      }
    }
  });

  // When Sails is lifted:
  grunt.registerTask('default', [
    'compileAssets',
    'linkAssets',
    'watch'
  ]);

  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'compass:dev',
    'coffee:dev',
    'copy:dev',
    'copy:bower',
  ]);

  grunt.registerTask('linkAssets', [

    // Update link/script/template references in `assets` index.html
    'sails-linker:devJs',
    'sails-linker:devScreenStyles',
    'sails-linker:devPrintStyles',
    'sails-linker:devIeStyles',
    'sails-linker:devTpl',
  ]);


  // Build the assets into a web accessible folder.
  // (handy for phone gap apps, chrome extensions, etc.)
  grunt.registerTask('build', [
    'compileAssets',
    'linkAssets',
    'clean:build',
    'copy:bower',
    'copy:build'
  ]);

  // When sails is lifted in production
  grunt.registerTask('prod', [
    'clean:dev',
    'jst:dev',
    'compass:dev',
    'copy:dev',
    'copy:bower',
    'coffee:dev',
    'concat',
    'uglify',
    'cssmin',

    'rev:prod',

    'sails-linker:prodJs',
    'sails-linker:prodScreenStyles',
    'sails-linker:prodPrintStyles',
    'sails-linker:prodIeStyles',
    'sails-linker:devTpl'

  ]);

  // When API files are changed:
  grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);

    // Send a request to a development-only endpoint on the server
    // which will reuptake the file that was changed.
    var baseurl = grunt.option('baseurl');
    var gruntSignalRoute = grunt.option('signalpath');
    var url = baseurl + gruntSignalRoute + '?action=' + action + '&filepath=' + filepath;

    require('http').get(url)
      .on('error', function(e) {
        console.error(filepath + ' has ' + action + ', but could not signal the Sails.js server: ' + e.message);
      });
  });
};
