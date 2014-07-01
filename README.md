# _TerraPass Carbon Emissions Calculator_



## Steps to getting an app running on OpenShift with a custom Node.js version
Based on https://github.com/ramr/nodejs-custom-version-openshift

Create a github repo. In this case git://github.com/sidecar/tpcalc.git.git
Create an account at http://openshift.redhat.com/
Create a namespace, if you haven't already do so for example 'sidecar'
	rhc domain create <yournamespace>
Create a nodejs application (you can name it anything via -a) and choose node versino with -t
	rhc app create -a <yourappname>  -t nodejs-0.10
Open shift will create a local repo called '<yourappname>' 
Merge the github repo as the upsteam of the existing local repo

	cd tpcalc
	git remote add upstream -m master git://github.com/sidecar/tpcalc.git.git
	git pull -s recursive -X theirs upstream master

Optionally, specify the custom version of Node.js you want to run with (Default is v0.10.25). If you want to more later version of Node (example v0.11.11), you can change to that by just writing it to the end of the NODEJS_VERSION file and committing that change.

echo 0.11.11 >> .openshift/markers/NODEJS_VERSION
git commit . -m 'use Node version 0.11.11'

Then push the repo to OpenShift
	git push

This application will then run at http://<yourappname>-<yournamespace>.rhcloud.com
( See env @ http://<yourappname>-<yourappname>.rhcloud.com/env )


## Build concerns 
I based the build concerns for this project on http://davidtucker.net/articles/automating-with-grunt/
note: This list can and should be edited/ammeded and is not 100% fufilled
- lint JavaScript code 
- compile my SASS/Compass code to a standard file that includes the Bootstrap framework.
- delete the contents of the build directory before I initiate a new build process. 
- utilize Browserify to manage dependencies between different logic groups of my JavaScript code using CommonJS modules and compile that to a single JavaScript file that I can load for my site. 
- create a build then launch the preview server 
- be able to automatically compile my SASS code or my 
- minify images that are included in my static site after the site is built but before it is deployed to the host. 
- remove empty lines from HTML and XML files which are generated by Wintersmith.
- automatically package JavaScript code with Browserify when any of those files in my work directory change
- be able to automatically compress and minify my JavaScript when building 
- minify all CSS files that are compiled from the SASS code before deployment
- Nice to haves:
- be able to utilize a hash of my CSS/JS files' filename to help ensure that the viewers of my site don't end up loaded an older cached version of these files. 
- be able to deploy to both a staging or production environment
- be able to automatically change the version number and tag production releases in my git repository. 

## Tech Stack
- NPM - Package Mangagement
- Gulp - Task Runner
- Browserify - JS Module management
- SASS- CSS Preprocessing handled by gulp-sass
- Flatstrap sass - A flat version of Bootstrap
- jQuery Mobile - Will be used for UI elements that need to be touch enabled for mobile
- Backbone (jQuery, Underscore) - MV* framework
- Backbone.Marionette (Backbone, Backbone.BabySitter, Backbone.Wreqr) - Adds structure to Backbone
- Handlebars - Templating
- hbsfy - Handlebars template transform for browserify
note: there is another way to do handlebars templateting in Marionette, see 'Building Better Backbone Apps With Marionette pg. 38'
- Epoxy - Two-way databinding
- Karma/Karma-Jasmine(2.*) - Test runner/Test framework
- numerals.js and JS-Quantities for number formatting

## Project Setup

### Install node
- If you're using the excellent homebrew package manager, you can install node with one command: 
	brew install node
- Or follow the directions here: http://howtonode.org/how-to-install-nodejs

### Install npm
	curl http://npmjs.org/install.sh | sh
More info here: http://howtonode.org/introduction-to-npm

### Install nodemon
	npm install -g nodemon

### Install gulp
	npm install -g gulp

### Install dependencies
	npm install

## Run the project locally for development
	gulp server
Project will be running at port 3000 on localhost
gulp-livereload is handling the browser reload. It only works with this script:
http://feedback.livereload.com/knowledgebase/articles/86180-how-do-i-add-the-script-tag-manually-
I have no fucking clue how these two things work together (in other words: magic)

## Testing
Test suite is built with Jasmine and the test runner is Karma
	gulp test

## Building
	gulp build
Produces a complete project in the /dist directory

## Features

## Responsive iframe
http://stackoverflow.com/questions/12676725/responsive-iframe-google-maps-and-weird-resizing?rq=1
http://stackoverflow.com/questions/17838607/making-an-iframe-responsive

## Configurable via url parameters
Categories should can be turned on and off based on url params

## Dump csv of data ready for pivot table

## Use existing data end points
http://www.terrapass.com/wp-content/themes/terrapass/flight/airports/airport_names.php?key=oak
http://www.terrapass.com/wp-content/themes/terrapass/flight/models/flight-model.php?from=oak&to=den (seems broken)
http://www.terrapass.com//wp-content/themes/terrapass/js/year_make.js
http://www.terrapass.com/wp-content/themes/terrapass/road/models/car-model.php?year=2013&make=toyota

## Contributing changes

## License
