// Use the require() function to include inquirer in the app.js file
const inquirer = require('inquirer');

/* Profile Questions */
const promptUser = () => {
  return inquirer.prompt([
    // pass questions
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
    },
  ]);
};

/* Project questions */
const promptProject = (portfolioData) => {
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  =================
  Add a New Project
  =================
  `);
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: [
          'JavaScript',
          'HTML',
          'CSS',
          'ES6',
          'jQuery',
          'Bootstrap',
          'Node',
        ],
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project',
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      // Call the promptProject(portfolioData) function when confirmAddProject evaluates to true
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

// use the user feedback
promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });

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
