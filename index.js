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
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'What type of license is on your project?',
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT (recommended)", "Boost Software License 1.0", "The Unlicense"]
        },
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: "Would you like to add a Features section? If your project has a lot of features, this is recommended",
            default: true 
        },
        {
            type: 'input',
            name: 'features',
            message: "Describe your features.",
            when: ({ confirmFeatures }) => {
                if (confirmFeatures) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'Contributing',
            message: "Add guidelines for other developers to contribute to your project."
        },
        {
            type: 'input',
            name: 'tests',
            message: "Write tests for your app and provide explaination about them."
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter your GitHub Username. (Required)",
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub Username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your E-mail. (Required)",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter E-mail!');
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
promptUser();