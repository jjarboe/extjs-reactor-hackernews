# Sencha Reactor Demo App

This project expands on a simple demo app originally hosted at [https://github.com/prabirshrestha/hn-react](https://github.com/prabirshrestha/hn-react).

This project updated the build toolchain to use webpack with babel, and added Ext JS components to improve
the user experience.  It is intended to provide a simple example of how Ext JS can be integrated into a React app.
It is not intended to show best practices for either React or Ext JS apps.

To get started, first make sure you have a recent version of Sencha Command, node and npm installed.  Extract
or clone the repo and copy Ext JS (with the premium packages) into <project_dir>/ext.  Then:

```
cd <project_dir>
npm install
```

At this point, you should have all the necessary packages to start the development server with ```npm start```.
The website will run on http://localhost:8080.

The readme from the original project follows:

===========

# Hacker News Client built using ReactJS

This is a port of the Hacker News Client writter in AngularJS. [https://coderwall.com/p/0pfmvq](https://coderwall.com/p/0pfmvq).
Source code of the angular port can be found at [https://github.com/codealpha/hn-angular](https://github.com/codealpha/hn-angular).

## What this sample isn't

* Not meant to be compared with the angular js port
* show best practices

## What this sample is

* shows how to use the streaming build system - [gulp.js](http://gulpjs.com/)
* use [browserify](http://browserify.org/) - browser-side require() the node.js way
* use [babel](https://babeljs.io) to help tranform jsx syntax to js
* use gulp-concat
* use-gulp-imagemin
* shows how to split different components in different file
* also shows how to define multiple components in the same file

## Running the sample

```bash
npm install -g gulp
npm install
gulp dev
```

To build only use `gulp build`.

## Running tests

```bash
npm install -g jest-cli
npm test
```
