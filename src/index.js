import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// Parcel note (very important)
// Hey! An important note here!

// In the next video we finally start to develop an app. The tool that will power the project is going to be Parcel

// The template that we install is called nano-react-app

// The template adds the latest and unstable version of Parcel which is bad because it's the latest alpha version.

// So in the next video right after running npx nano-react-app folderName please do the following to avoid having errors:

// 1) Open package.json

// 2) Find "parcel": "^2.0.0-alpha.3.2" (or whatever version you have) under devDependencies

// 3) Edit the line so it looks like that:

// "parcel": "1.12.4",
// 4) Also in package.json add new resolutions section below "scripts" section:

//   "scripts": {
//     // ...
//   },
//   "resolutions": {
//     "@babel/preset-env": "7.13.8"
//   },
// 5) Also in package.json add one more script fix-parcel to "scripts":

//   "scripts": {
//     "fix-parcel": "npx npm-force-resolutions && npm i && npm i",
//     // ...
//   },
// 6) In the terminal (git-bash, bash, MacOS), run one after another:

//   rm -rf node_modules package-lock.json
//   npm install
//   npm run fix-parcel
// That's it. Continue and enjoy ;)

// Thanks!

// Source of error: https://github.com/parcel-bundler/parcel/issues/5943

// ---------------------------------

// Later in the videos you will see that the instructor does almost the same thing.

// Fullscreen
// Go to Previous lecture38. Required Assets
// Go to Next lecture40. Link to Github repository
