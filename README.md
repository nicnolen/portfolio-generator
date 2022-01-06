# Portfolio Generator
## Description
I built this project to allow people to create a portfolio without using the browser. A big advantage of node.js is that since you don't have to run it through the browser, it reduces runtime for users. In addition, it allows JavaScript to run both client-side (front-end) and server-side (back-end) applications, making the app more versitile then running it in the browser.

## Installation
### node.js installation
Make sure that you have node.js downloaded. If you don't, follow this link: https://nodejs.org/en/ and click on the LTS version to download node.js to your entire computer. If you are on Windows, make sure to look for the section that says `Download for Windows (x64)`. If you are using macOS, make sure to look for the section that says `Download for MacOS (x64)` 
### Clone the code
Once node.js is downloaded, click on the green code button and copy the link to this repository. Then open up your favorite code editor and open the terminal. In the terminal use `cd` to go to the root directory you want this repository to be cloned to. Finally, in the terminal, type `git clone <file link>` to clone this repository to your directory. 
### Inquirer
You must also install the Inquirer npm package to see the portfolio. Since Inquirer is an npm package instead of being built directly into node.js, you must type `npm init` into the command line to allow npm packages to be installed. Next, go to the app.js file, and in the command line, type `npm install inquirer` to install Inquirer on your computer. For documentation on Inquirer or other npm packages, follow this link: https://www.npmjs.com/ and type the npm you want to search in the search bar.

## Usage
To create a portfolio, type `node app` into your terminal and you will be prompted with a series of questions. Answer the questions accordingly and then go to the `index.html` file and open it in your browser. If the resulting page looks like the screenshot below, you're good to go!

![Portfolio Generator Homepage](https://user-images.githubusercontent.com/88728912/148402243-9cda2263-0650-4992-bf2a-ac194543c501.png)

## License
MIT License

Copyright (c) 2022 Nicholas Nolen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features
- Click on the `GitHub` button in the top right corner to go to the GitHub Repository
- Click on the `View Project on GitHub` button to view a specific project
- Featured projects are listed first, followed by non-featured projects
