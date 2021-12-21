// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const promptUser = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the project name? (Required)',
            // use validate to make sure user provides a response before continuing
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.(Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter any necessary information regarding installation of this project.(Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide a response to continue! If none, enter N/A');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information? IE: "my project is used for ____ "(Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter a response to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed on this project? (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter a contributor to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can this project be tested? (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter a response to continue!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select a license.',
            choices: ['Apache', 'MIT', 'ISC','GNU', 'N/A'],
        }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log ('README successfully generated. Head over to README.md to check it out!');
        }
    })
};
// TODO: Create a function to initialize app
function init() {
    // prompt user with questions
    inquirer.prompt(promptUser)
    // then run writetofile function to generate file filled in with new data
    .then(function(data){
        writeToFile( "README.md" , generateMarkdown(data) );
    });
}

// Function call to initialize app
init();
