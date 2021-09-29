
# Trading Center 2.0
> This project is a new generation of Angular 11 Trading Center for Folio Institutional.
> Live demo [_here_](https://folioinstitutional.dapaws.foliofn.com/servlets/ProcessAction/itc/main). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->

## General Information
- Trading Center 2.0
- Provides a new generation of a trading center for Folio Institutional.
- Added fixed income, equities, options etc.
- New Allocation and Trade Blotter

## Technologies Used
- NX Workspace 11
- Angular 11
- Material Design 11
- GSToolkit 11

## Features
- Allocation Blotter
- Allocation Detail Screen
- Trade Blotter

## Setup

1)	Install node 12  -  https://nodejs.org/en/download/
2)	Install @nrwl/cli – command: npm I -g @nrwl/cli@11.0.3
3)	Node -v
4)	Git clone ssh://git@stash.foliofn.com:7999/ang/gs-ria.git
5)	Cd gs-ria
6)	README
7)	Npm install
8)	Nx serve trading
9)	Nx lint trading –with-deps –silent
10)	Nx test trading –with-deps –silent
11)	See https://Nx.dev – watch video https://nx.dev/latest/angular/getting-started/intro

## Plugins

1)	nx list
2)	ng add @nrwl/angular

## Usage

### Generate an application

> nx g @nrwl/angular:app my-app`--dryRun

> nx g @nrwl/angular:app etfs --dryRun

> nx g @nrwl/angular:lib etfs --importPath='@trading/etfs' --add-module-spec --dryRun

### Generate a library

> nx g @nrwl/angular:lib my-lib` to generate a library.
> nx g @nrwl/angular:lib util --importPath='@ria/trading/util' --add-module-spec --dryRun

### Generate a component

> nx g component my-component --project=my-app --dryRun

### Generate a service

> nx g service services/mappings --project=trading --dryRun

### Development server

> nx serve trading

Navigate to http://localhost:4200/.
The app will automatically reload if you change any of the source files.

### Moving apps and libs

> nx g @nrwl/workspace:move --project old-e2e new-e2e

> nx g @nrwl/workspace:move --project old new

### Moving apps and libs using DDD

Renaming fixed-income-domain
> ng generate @nrwl/angular:move --destination=trading/domain --projectName=fixed-income-domain --importPath=@ria/trading/domain

Renaming fixed-income-feature-allocation
> ng generate @nrwl/angular:move --destination=trading/feature-allocation --projectName=fixed-income-feature-allocation --importPath=@ria/trading/feature-allocation

Renaming fixed-income-feature-trade-center
> ng generate @nrwl/angular:move --destination=trading/feature-trade-center --projectName=fixed-income-feature-trade-center --importPath=@ria/trading/feature-trade-center

Renaming fixed-income-feature-trade-blotter
> ng generate @nrwl/angular:move --destination=trading/feature-trade-blotter --projectName=fixed-income-feature-trade-blotter --importPath=@ria/trading/feature-trade-blotter

Renaming fixed-income-feature-trade-entry
> ng generate @nrwl/angular:move --destination=trading/feature-trade-entry --projectName=fixed-income-feature-trade-entry --importPath=@ria/trading/feature-trade-entry

Renaming fixed-income-feature-app-load
> ng generate @nrwl/angular:move --destination=trading/feature-app-load --projectName=fixed-income-feature-app-load --importPath=@ria/trading/feature-app-load

Renaming trading-feature-trade-entry
> ng generate @nrwl/angular:move --destination=trading/feature-order-entry --projectName=trading-feature-trade-entry --importPath=@ria/trading/feature-order-entry


### Build

nx build my-app`
The build artifacts will be stored in the `dist/` directory.

nx build my-app`--prod --aot
for a production build and ahead of compile.

### Linting

To run lint in single projects
> nx lint trading

To run lint in single project with dependencies
> nx lint trading --with-deps --silent

To run lint in all projects across workspace
> nx run-many --all --target=lint --parallel
> nx run-many --silent --all --target=test --parallel

To run lint in all projects across workspace in sequence
> nx run-many --all --target=lint

### Running unit tests

`nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

`nx affected:test` to execute the unit tests affected by a change.

`nx test my-app --code-coverage` to execute the unit tests and generate code coverage file in project root.

### To run tests in all projects across workspace

> nx run-many --all --target=test --parallel

remove (--parallel) switch if tests need to be run sequence

### Running test in projects with their dependencies

> nx test <project name> --with-deps

Example:
> nx test trading --with-deps

### Running end-to-end tests

`ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).
`nx affected:e2e` to execute the end-to-end tests affected by a change.

### Code Coverage
`nx run-many --all --target=test --parallel --code-coverage` to see a code coverage dashboard of your projects.

### Understand your workspace

`nx dep-graph`
to see a diagram of the dependencies of your projects.

### add shared-aws-integration

> nx g @nrwl/angular:lib shared/aws-integration --add-module-spec --import-path=@shared/aws-integration --publishable --prefix=ria

> ng g service services/contentstack --project=shared-aws-integration

> nx g interface aws-api-interface --directory=shared/aws-integration/interfaces --import-path=@aws-api-interface --dry-run

>nx g interface aws-api-interface --project=shared-aws-integration --dry-run

### Add storybook plugin and configure for a particular library

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

### Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## Project Status
Project is: _in progress_.

## Room for Improvement

Refactoring trading center module, appload module,

Room for improvement:
- Move Appload Module out fo fixed income domain.
- Move Trade Center Module out fo fixed income domain.
- Move Trade Entry and rename to Order Entry and out fo fixed income domain.

## Acknowledgements
- This project was inspired by addition of fixed income to Folio Instituional

## Contact

Steve Buonincontri:
[steve@gs.com](mailto:steve@gs.com)
