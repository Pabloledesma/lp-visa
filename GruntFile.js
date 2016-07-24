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
					"css/style.css": ["*.less"]
				}
			}
		},
		autoprefixer: {
			single_file: {
				src: "css/style.css",
				dest: "css/style.css"
			}
		},
		 sass: {
		    dist: {
		      files: [{
		        expand: true,
		        cwd: 'styles',
		        src: ['*.scss'],
		        dest: 'css',
		        ext: '.css'
		      }]
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
				src: ["app-client.js"],
				dest: "js/bundle.js"
			}
		}, 
		watch: {
			css: {
				files: ["*.less", "*.sass"],
				tasks: ["css"]
			},
			scripts: {
				files: ["app-client.js", "lib/*.js"],
				tasks: ["jshint", "browserify"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-cssmin");

	grunt.registerTask("css", ["less", "sass", "autoprefixer" ]);
	grunt.registerTask("js", ["browserify"]);

	grunt.registerTask("default", ["jshint", "css", "js"]);
};