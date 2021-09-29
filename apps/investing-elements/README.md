# investing-elements

- This app defines/registers custom elements for components exported from **@shared/investing** library

### Following are custom elements defined here

### 1. Stock Time Series Chart

- custom element selector : **ria-stock-time-series-chart-element**

### 2. Holdings Pie/Donut Chart

- custom element selector : **ria-holdings-pie-chart-element**

## How to build?

- investing-elements can be build using npm command **PROJECT=investing-elements VERSION=VERSION_NAME npm run build-pack**
- VERSION_NAME can be major OR minor OR patch
- This command will generate **investing-elements.js** file in the project's build output directory.

## Deploying to AWS

- investing-elements can be deployed using npm command **deploy:investing-elements**
- File(investing-elements.js) generated in above step is uploaded to S3 in **ria-elements** bucket. This is uploaded to Sandbox env as of now.
- This file can be accessed using CloudFront URL **https://ria-elements.sbxaws.foliofn.com/investing-elements/investing-elements.js**

## Packaging and Publishing for npm

Packaging the investing-elements to publish to the npm. Following commands will build the investing-elements and will create the .tgz file which can be used to publish to the npm.
Following commands can be used to create major, minor and patch versions of the investing-elements.

### For Building and Packaging major version

**PROJECT=investing-elements VERSION=major npm run build-pack**

### For Building and Packaging minor version

**PROJECT=investing-elements VERSION=minor npm run build-pack**

### For Building and Packaging patch version

**PROJECT=investing-elements VERSION=patch npm run build-pack**

### Publishing

- For publishing the npm package, user needs to be authenticated. In order to authenticate the publish command, we need to have a publish token. For creating access tokens refer https://docs.npmjs.com/creating-and-viewing-access-tokens.
- There are some best practises when using an npm token in the CI/CD process. Those can be viewed at https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow.
- Package can be published using npm publish <package name> command.
  For example, **npm publish ria-investing-elements-2.0.0.tgz** command.

### Accessing using unpkg.com

Following way, we will be able to access the investing-elements.js file using the URL like below:
https://www.unpkg.com/@ria/investing-elements@latest/investing-elements.js
**Please note that above URL is shown just for demonstration purpose and it is not a correct URL.
**@latest\*\* in the URL will make sure we are always pointing to the latest version of the investing-elements.js OR a specific version can be provided to access that version of the file.

## Issue Using this element in Angular application built using prod mode.

<em style="color:red">
main.js:1 ERROR Error: Uncaught (in promise): TypeError: n.e is not a function
TypeError: n.e is not a function
    at loadChildren (main.js:1)
</em>
<br>

This error occurrs due to conflicting angular packages which webpack is not able to resolve correctly. Since we are using an Angular web component which is built using prod mode(have its own Angular vendor code) and also the consumer Angular application is built using prod mode which has its own Angular code, they both are getting conflicted and hence we see the reference error.

To resolve this issue, the web component(investing-elements) needs to be built using a custom webpack builder using which we can isolate the web component code using a unique namespace name.

**Custom Builder Used:** @angular-builders/custom-webpack<br>
**jsonpFunction**: 'investing-elements'

Fix is made and pushed through PR
https://stash.foliofn.com/projects/ANG/repos/gs-ria/pull-requests/50/overview
