// Use template literals to insert JavaScript expressions into a string through interpoliation (substitution of text for a variable we build into the html ($(variable)))
const generatePage = (name, github) => {
    return `
      <!DOCTYPE html> 
      <html lang="en"> 
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
      </head>
    
      <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
      </body>
      </html>
      `;
  };

  // allow the app.js file to use the generatePage() function
  module.exports = generatePage;