/* global module:false */
'use strict';

module.exports = function (grunt) {
    let saucekey = null;
    if (typeof process.env.SAUCE_ACCESS_KEY !== 'undefined') {
        saucekey = process.env.SAUCE_ACCESS_KEY;
    }
    const pkg = require('./package.json');
    bumpVersion(pkg);
    grunt.initConfig({
        pkg: pkg,
        browserify: {
            unicode: {
                options: {
                    transform: [['babelify']]
                },
                files: {
                    'dist/<%= pkg.name%>-UnicodeIdentifiers.js': 'src/browser-UnicodeIdentifiers.js'
                }
            },
            unicodeNode: {
                options: {
                    transform: [['babelify']],
                    // Avoid `window` checking
                    browserifyOptions: {
                        standalone: 'dummyPlaceholder',
                        // https://github.com/substack/node-browserify/issues/1277#issuecomment-115198436
                        builtins: false,
                        commondir: false,
                        browserField: false, // Avoid `browser` entry in package.json
                        insertGlobalVars: {
                            process: function () {
                                return;
                            },
                            __filename: function () { // Thankfully, the only __filename
                                return 'require("path").join(__dirname, "../node_modules/sqlite3/lib/trace.js")';
                            },
                            __dirname: function () { // Though two different __dirnames exist, thankfully, the second is of no consequence
                                return 'require("path").join(__dirname, "../node_modules/sqlite3/lib")';
                            }
                        }
                    }
                },
                files: {
                    'dist/<%= pkg.name%>-UnicodeIdentifiers-node.js': 'src/node-UnicodeIdentifiers.js'
                }
            },
            browser: {
                options: {
                    transform: [['babelify', {sourceMaps: true}]]
                },
                files: {
                    'dist/<%= pkg.name%>.js': 'src/browser.js'
                }
            },
            node: {
                options: {
                    transform: [['babelify', {sourceMaps: true}]],
                    // Avoid `window` checking
                    browserifyOptions: {
                        standalone: 'dummyPlaceholder',
                        // https://github.com/substack/node-browserify/issues/1277#issuecomment-115198436
                        builtins: false,
                        commondir: false,
                        browserField: false, // Avoid `browser` entry in package.json
                        insertGlobalVars: {
                            process: function () {
                                return;
                            },
                            __filename: function () { // Thankfully, the only __filename
                                return 'require("path").join(__dirname, "../node_modules/sqlite3/lib/trace.js")';
                            },
                            __dirname: function () { // Though two different __dirnames exist, thankfully, the second is of no consequence
                                return 'require("path").join(__dirname, "../node_modules/sqlite3/lib")';
                            }
                        }
                    }
                },
                files: {
                    'dist/<%= pkg.name%>-node.js': 'src/node.js'
                }
            }
        },
        uglify: {
            unicode: {
                src: 'dist/<%= pkg.name%>-UnicodeIdentifiers.js',
                dest: 'dist/<%= pkg.name%>-UnicodeIdentifiers.min.js'
            },
            unicodeNode: {
                src: 'dist/<%= pkg.name%>-UnicodeIdentifiers-node.js',
                dest: 'dist/<%= pkg.name%>-UnicodeIdentifiers-node.min.js'
            },
            browser: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    sourceMap: true,
                    sourceMapName: 'dist/<%=pkg.name%>.min.js.map',
                    sourceMapRoot: 'http://nparashuram.com/IndexedDBShim/dist/'
                },
                src: 'dist/<%= pkg.name%>.js',
                dest: 'dist/<%=pkg.name%>.min.js'
            },
            node: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    sourceMap: true,
                    sourceMapName: 'dist/<%=pkg.name%>-node.min.js.map',
                    sourceMapRoot: 'http://nparashuram.com/IndexedDBShim/dist/'
                },
                src: 'dist/<%= pkg.name%>-node.js',
                dest: 'dist/<%=pkg.name%>-node.min.js'
            }
        },
        clean: {
            qunitTests: {
                src: ['D_dbname*']
            },
            mochaTests: {
                src: ['D_indexeddbshim_test_database_*', 'D_test.sqlite']
            },
            mock: {
                src: ['D_test_database*']
            },
            w3c: {
                src: ['D_db*', 'D_test-db*']
            },
            w3cOld: {
                src: ['D_testdb-*', 'D_database_name*', 'D_idbtransaction*', 'D_db.sqlite*']
            },
            fake: {
                src: ['D_test0.*']
            },
            sysDB: {
                src: ['__sysdb__*']
            }
        },
        connect: {
            server: {
                options: {
                    base: '.',
                    port: 9999
                }
            }
        },
        qunit: {
            all: {
                options: {
                    urls: ['http://localhost:9999/tests-qunit/index.html']
                }
            }
        },
        'node-qunit': {
            all: {
                deps: ['./tests-qunit/node-init.js', './tests-qunit/queuedUnit.js', './tests-qunit/sampleData.js', './tests-qunit/startTests.js'],
                code: './dist/<%= pkg.name%>-node.js',
                tests: './tests-qunit/nodeTest.js',
                callback: function (err, res) { // var doneCb = this.async();
                    if (err) console.log(err);
                    else console.log(res);
                }
            }
        },

        mochaTest: {
            test: {
                options: {
                    bail: false,
                    timeout: 5000,
                    reporter: 'spec',
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['tests-mocha/test-node.js']
            }
        },

        'saucelabs-qunit': {
            all: {
                options: {
                    username: 'indexeddbshim',
                    key: saucekey,
                    tags: ['master'],
                    urls: ['http://127.0.0.1:9999/tests-qunit/index.html'],
                    testTimeout: 8000,
                    browsers: [{
                        browserName: 'chrome',
                        platform: 'Windows 10',
                        version: '51.0'
                        /*
                        browserName: 'safari',
                        platform: 'Windows 2008',
                        version: '5'
                    }, {
                        browserName: 'opera',
                        version: '12'
                        */
                    }]
                }
            }
        },

        eslint: {
            files: ['src/**/*.js', 'tests-qunit/**/*.js', 'tests-mocha/**/*.js', 'Gruntfile.js'],
            options: {
                configFile: '.eslintrc'
            }
        },

        watch: {
            dev: {
                files: ['src/*'],
                tasks: ['eslint', 'browserify', 'uglify']
            }
        }
    });

    for (const key in grunt.file.readJSON('package.json').devDependencies) {
        if (key !== 'grunt' && key.indexOf('grunt') === 0) { grunt.loadNpmTasks(key); }
    }

    grunt.registerTask('build', ['eslint', 'browserify', 'uglify']);
    const testJobs = ['build', 'connect'];
    grunt.registerTask('nodequnit', testJobs.concat('node-qunit'));
    grunt.registerTask('mocha', ['mochaTest']); // clean:mochaTests isn't working here as locked (even with force:true on it or grunt-wait) so we do in package.json

    if (saucekey !== null) {
        testJobs.push('saucelabs-qunit');
    } else {
        testJobs.push('qunit');
    }

    grunt.registerTask('phantom-qunit', testJobs);

    grunt.registerTask('clean-mocha', ['clean:mochaTests', 'clean:sysDB']);
    grunt.registerTask('clean-qunit', ['clean:qunitTests', 'clean:sysDB']);
    grunt.registerTask('clean-polyfill', ['clean:fake', 'clean:mock', 'clean:w3c-old', 'clean:sysDB']);
    grunt.registerTask('clean-fake', ['clean:fake', 'clean:sysDB']);
    grunt.registerTask('clean-mock', ['clean:mock', 'clean:sysDB']);
    grunt.registerTask('clean-w3c', ['clean:w3c', 'clean:sysDB']);
    grunt.registerTask('clean-w3c-old', ['clean:w3cOld', 'clean:sysDB']);

    grunt.registerTask('default', 'build');
    grunt.registerTask('dev', ['build', 'connect', 'watch']);

    grunt.event.on('qunit.error.onError', function (msg, trace) {
        grunt.log.ok('Grunt qunit: ' + msg + '::' + JSON.stringify(trace));
    });
};

/**
 * Bumps the revision number of the node package object, so the the banner in indexeddbshim.min.js
 * will match the next upcoming revision of the package.
 */
function bumpVersion (pkg) {
    const version = pkg.version.split('.');
    version[2] = parseInt(version[2]) + 1;
    pkg.version = version.join('.');
}
