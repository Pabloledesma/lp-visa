module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/*.js", "test/*.js"],
			options: {
				esnext: true,
				globals: {
					jQuery: true
				}
			}
		},
		less: {
			production: {
				files: {
					"assets/css/style.css": ["assets/less/*.less"]
				}
			}
		},
		autoprefixer: {
			single_file: {
				src: "assets/css/style.css",
				dest: "assets/css/style.css"
			}
		},
		 
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'release/css',
		      src: ['css/*.css', 'css/!*.min.css'],
		      dest: 'css',
		      ext: '.min.css'
		    }]
		  }
		},
		browserify: {
			client: {
				src: [
					"assets/js/pcfunctions_270616.js",
					"assets/js/origenes_destinos_fechas_270616.js",
					"assets/js/jquery.ui.datepicker-es.min.js",
					"assets/js/jqueryui", 		// v 1.8.24
					"assets/js/jquery.min.js",  //v 1.7.1
					"assets/js/s_code.js",
				],
				dest: "assets/js/bundle.js"
			}
		}, 
		watch: {
			css: {
				files: ["assets/less/*.less"],
				tasks: ["css"]
			},
			scripts: {
				files: ["assets/js/*.js"],
				tasks: ["jshint", "browserify"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	//grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-cssmin");

	grunt.registerTask("css", ["less", "autoprefixer" ]);
	grunt.registerTask("js", ["browserify"]);

	grunt.registerTask("default", ["jshint", "css", "js"]);
};