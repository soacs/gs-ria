var exec = require('child_process').exec;

// Fetch angular.json for referring to project config like output folder, root folder.
var angularCfg = require('./angular.json');

// ENV variables -
// 1. PROJECT - It's project name which we want to build and pack,
// 2. VERSION - Next version of the package. Values can be major, minor, and patch.

var projectName = process.env.PROJECT;

// JSON Config for the specified project.
var projectConfig = angularCfg.projects[projectName];

// Next version for the package.
var bumpVersion = process.env.VERSION;
var bumpVersionValues = ['major', 'minor', 'patch'];
var dirRoot = __dirname;

// If there is no config present, it means either the project name is incorrect or project is not available in the workspace.
if (!projectConfig) {
  console.log(`PROJECT - Config not found for peoject name: ${projectName}`);
  return;
}

// Check if proper version value is provided.
if (!bumpVersion || !bumpVersionValues.includes(bumpVersion)) {
  console.log(`VERSION - Specify a valid version value. ${bumpVersionValues.join(', ')}`);
  return;
}

var projectOutputPath = projectConfig.architect.build.options.outputPath;

// Following command will update the project's package version
var bumpVersionCommand = `cd ${projectConfig.root} && npm version ${bumpVersion} --force`;

// Following command will build the project, create <project-name>.js bundle and copy project's package.json to the project's output path
var buildProjectCommand = `nx build --prod --project ${projectName} --output-hashing none && cat ./${projectOutputPath}/{runtime,polyfills,main}.js > ./${projectOutputPath}/${projectName}.js && cp ./${projectConfig.root}/package.json ./${projectOutputPath}/`;

// Following command will create .tgz file for the package. The generated .tgz file then can be used to publich to the npm.
var packProjectCommand = `cd ${projectOutputPath} && npm pack`;

var execCmd = exec(
  `${bumpVersionCommand} && cd ${dirRoot} && ${buildProjectCommand} && ${packProjectCommand}`,
  function (err, stdout, stderr) {
    if (err) {
      console.log(err);
      console.log(stderr);
    }
    console.log(stdout);
  }
);

// listen to the stdout on data event to see live output on the console
execCmd.stdout.on('data', function (data) {
  console.log(data);
});

// listen to the stderr on data event to see live output of error on the console
execCmd.stderr.on('data', function (data) {
  console.log(data);
});
