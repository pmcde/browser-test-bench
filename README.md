# Browser Test Bench

The Browser Test Bench is a template based ([nunjucks](https://mozilla.github.io/nunjucks/templating.html)), staic HTML, intentionally vulnerable web site showcasing browser based vulnerabilities.

 

## Getting Started

The static site is generated into the *dist* folder. If you want to simply view or test the project (without dealing with node or building the project) you can use the python or PHP static servers to host / view it locally. 

ex: 

1. checkout the project.
2. `cd dist`
3. `python -m SimpleHTTPServer 8000`
4. Browse to http://localhost:8000 


### Development Quick Start

The project uses - [Node.js](http://nodejs.org) and ([nunjucks](https://mozilla.github.io/nunjucks/templating.html) to generate the static HTML files. 

*Please do not edit files in the dist folder directly.*

1. Install nodejs.
1. `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. run `npm start` to serve and watch files with BrowserSync.

Alternatively run:
    - `npm run build` to only build static files to "dist" folder (will not run static http server).

## TODO
 - Remove dist from git and use github action. (use a branch much like github pages for compiled output)  
 - Add more rules and examples.
 - Add more documentation
