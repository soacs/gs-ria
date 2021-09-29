# Ria

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## What should in a Application level (Driver/Host)

    Interceptors
    	Auto populate http header
    	Error Handling
    	Logging
    State Management -
    	Root level state - userProfile, dashBoard

, Feature level state can be in library associated with it,
Ex: Questionaire library can have the questionnaire
Event emitters (broadcast pattern etc)
Routing aspects (Resolvers), Route init, lazy loaded.
DOM management (Angular philosophy is against managing DOM directly) Ex: Draggable.

## What should be in a library

Any functionality or feature that could be of value add for sharing among several applications.

Ex: If a component should leverage Content Stack APIs this component should go into a library.

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@ria/mylib`.

## Generate a service

with the project tag indicating which project it goes into

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Linting - To run lint in all projects across workspace

Run nx run-many --all --target=lint --parallel
    nx run-many --silent --all --target=test --parallel

remove (--parallel) switch if linting need to be run sequence

## Linting - To run lint in single projects

Run nx lint <project name>

## Linting - To run lint in projects and their dependencies

Run nx lint <project name> --with-deps
Example: nx lint trading --with-deps 

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

Run `nx test my-app --code-coverage` to execute the unit tests and generate code coverage file in project root.
## To run tests in all projects across workspace

Run nx run-many --all --target=test --parallel

remove (--parallel) switch if tests need to be run sequence

## Running test in projects with their dependencies

Run nx test <project name> --with-deps
Example: nx test trading --with-deps

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Code Coverage
Run `nx run-many --all --target=test --parallel --code-coverage` to see a code coverage dashboard of your projects.
## Understand your workspace
Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## NX way to build angular elements

## Step1. Make a script in package.json
"scripts": [{
"input": "node_modules/document-register-element/build/document-register-element.js"
}]
"concat": "^1.0.3",
"document-register-element": "^1.7.2",
"fs-extra": "^7.0.1",

## Script2. Make a new component in libs
nx g @nrwl/angular:lib breaking-news --publishable --importPath='@ria/breaking-news'

## Step 3. Register the customized html tag in the element app’s app.module.ts

Import that lib module Into the ria-elements app

const element = createCustomElement(AppComponent, { injector: this.injector })
customElements.define("breaking-news-element", element); // each element has their own tag and component

## Step4. build ts components into a set of js and css

nx build --prod --project ria-elements --output-hashing none

## Step5. Combine the js and css files into one by making a new js file to run the scripts. (Can make an one line command like the NX doc)

const fs = require('fs-extra');
const concat = require('concat');

async function build() {
const files = [
'dist/apps/ria-elements/runtime.js',
'dist/apps/ria-elements/polyfills.js',
'dist/apps/ria-elements/scripts.js',
'dist/apps/ria-elements/main.js',
];
await fs.ensureDir('elements');
await concat(files, 'elements/ria-elements-elements.js');
await fs.copyFile('dist/apps/ria-elements/styles.css', 'elements/ria-elements-styles.css');
};

outputhashing = none;

build()

//node apps/ria-elements/build-element.js

## ngx-build-plus way to build angular elements

nx add ngx-build-plus
nx add ngx-build-plus --project ria-elements
nx g ngx-build-plus:wc-polyfill --project ria-elements
nx g ngx-build-plus:externals --project ria-elements
nx build --extra-webpack-config apps/ria-elements/webpack.externals.js --prod --project ria-elements --single-bundle

Then the dist/apps/ria-elements will have all the js, css and the index.html needed.
Add <news-widget-element></news-widget-element> to the built index.html for testing.
start http-server in that folder: e.g. http-server -a localhost -p 8080
or any website server hosts it

## added shared-aws-integration

nx g @nrwl/angular:lib shared/aws-integration --add-module-spec --import-path=@shared/aws-integration --publishable --prefix=ria
ng g service services/contentstack --project=shared-aws-integration

nx g interface aws-api-interface --directory=shared/aws-integration/interfaces --import-path=@aws-api-interface --dry-run
nx g interface aws-api-interface --project=shared-aws-integration --dry-run

## added investing

nx g @nrwl/angular:lib shared/investing --add-module-spec --import-path=@shared/investing --publishable --prefix=ria --dry-run
nx test --project=shared-investing

nx generate module investing --routing --dry-run

nx g component investing/components/investing --dry-run


## Storybook Added for shared-investing library
@nrwl/storybook plugin 
https://nx.dev/latest/angular/plugins/storybook/overview

Generating Storybook Configuration
> npx ng generate storybook-configuration shared-investing

Create e2e app for the library? - Yes
Create *.stories file for components in the library? - Yes
Create *.spec files in e2e application? - Yes

Running Storybook
> nx run shared-investing:storybook

Run Cypress Tests Against a Storybook Instance
> nx run shared-investing-e2e:e2e

Run Cypress Tests Against a Storybook Instance watch mode
> nx run shared-investing-e2e:e2e --watch

Run Cypress Tests Against a Storybook Instance headlessly
> nx run shared-investing-e2e:e2e --headless
