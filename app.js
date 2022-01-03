// Define the file system (fs)
const fs = require('fs');
// Recieve the generatePage function from the page-template function
const generatePage = require('./src/page-template.js');

// Create a variable that cant be reassigned (const) and make a new array (slice) from the 3rd element (2nd index) up to but not including argv.length (up to the last array)
const profileDataArgs = process.argv.slice(2);

// Extract the command line arguments and store them in distinct variables using assignment destrucuring
const [name, github] = profileDataArgs;

// Create an HTML file. In write file the arguments are ('file name', data, callbackFunction)
fs.writeFile('./index.html', generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});
