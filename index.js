// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generateReadme = require('./src/README-template');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Welcome to the README generator! Please begin by entering the title of your project. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title to continue!');
                    return false;
                }
            }
        }
    ]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
//questions();