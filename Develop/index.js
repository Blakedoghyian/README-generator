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
