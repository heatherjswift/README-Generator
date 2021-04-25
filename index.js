// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generateReadme = require('./src/README-template');

// TODO: Create an array of questions for user input
const promptUser = () => {
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
        },
        {
            type: 'input',
            name: 'description',
            message: "Describe your project. If you're not sure what to write think about what, why, and how did you created this project. What was your motivation? Why did you build it? What problem does it solve? What did you learn? What makes your project stand out? (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description! Something quick as a placeholder will do.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter a description! Something quick as a placeholder will do.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: "Provide instructions and examples for use. (Required)",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter a description! Something quick as a placeholder will do.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: "Would you like to add a credits section?",
            default: true 
        },
        {
            type: 'input',
            name: 'credits',
            message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
            when: ({ confirmCredits }) => {
                if (confirmCredits) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        // {
        //     type: 'rawlist',
        //     name: 'license',
        //     message: 'What type of license is on your project?'
        // }
           
    ]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
promptUser();