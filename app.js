// Use the require() function to include inquirer in the app.js file
const inquirer = require('inquirer');

/* Profile Questions */
const promptUser = () => {
  return inquirer.prompt([
    // pass questions
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      // validate that the user hasnt left the name blank
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      // validate that the user hasnt left the github username blank
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter a valid GitHub username!');
        }
      },
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message:
        'Would you like to enter some information about yourself for an "about" section?',
      default: true,
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      },
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
        message: 'What is the name of your project? (Required)',
        // validate that the user hasnt left the github username blank
        validate: (projectName) => {
          if (projectName) {
            return true;
          } else {
            console.log('Please enter a valid project name!');
          }
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        // validate that the user hasnt left the github username blank
        validate: (projectDescription) => {
          if (projectDescription) {
            return true;
          } else {
            console.log('Please enter a valid project description!');
          }
        },
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
        // validate that the user hasnt left the github username blank
        validate: (githubLink) => {
          if (githubLink) {
            return true;
          } else {
            console.log('Please enter a valid GitHub link!');
          }
        },
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
