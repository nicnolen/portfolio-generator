// Use the require() function to include inquirer in the app.js file
const inquirer = require('inquirer');
inquirer
  // pass questions
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ])
  // use the user feedback
  .then((answers) => console.log(answers));
// // Define the file system (fs)
// const fs = require('fs');
// // Recieve the generatePage function from the page-template function
// const generatePage = require('./src/page-template.js');

// // Variable to store the generatePage function with arguments
// const pageHTML = generatePage(name, github);

// // Create an HTML file. In write file the arguments are ('file name', data, callbackFunction)
// fs.writeFile('./index.html', pageHTML, (err) => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
