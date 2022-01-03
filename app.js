// Create a variable that cant be reassigned (const) and make a new array (slice) from the 3rd element (2nd index) up to but not including argv.length (up to the last array)
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Print each command line argument one by one
const printProfileData = (profileDataArr) => {
  // this for loop is....
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }
  // equal sign to divide the 2 statements
  console.log('================');

  // is the same as this....
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
