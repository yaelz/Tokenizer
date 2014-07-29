var grunt = require("grunt");

function standaloneTmpDir(path) {  return "dist/tmp.js/" + path; }

grunt.registerTask("build:compileSpecRunner",
    "Processes the spec runner template and writes to a tmp.js file",
    function() {
        var runnerHtml = grunt.template.process(
            grunt.file.read("grunt/templates/SpecRunner.html.jst"),
            { data: { jasmineVersion: global.jasmineVersion }});

        grunt.file.write(standaloneTmpDir("SpecRunner.html"), runnerHtml);
    }
);

grunt.registerTask("build:cleanSpecRunner",
    "Deletes the tmp.js spec runner file",
    function() {
        grunt.file.delete(standaloneTmpDir(""));
    }
);

grunt.registerTask("buildStandaloneDist",
    "Builds a standalone distribution",
    [
      "buildDistribution",
      "build:compileSpecRunner",
      "compress:standalone",
      "build:cleanSpecRunner"
    ]
);
