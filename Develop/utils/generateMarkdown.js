// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  # Description

  * ${data.description}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributors](#contribution)
  * [Licenses](#license)
  * [Repository](#repository)
  * [Questions](#questions)

  ## Installation 

  * ${data.installation}

  ## Usage

  * ${data.usage}

  ## License

  * This application is covered under the ${data.license} license.

  ![License](https://img.shields.io/badge/license-${data.license}-red)

  ## Contribution

  * [Github](https://github.com/${data.contribution})

  ## Tests

  * ${data.test}

  ## Repository

  * (https://github.com/${data.contribution}/${data.title})
  ### Questions
  * Please use this email regarding any questions or concerns:
  * <a href="mailto:${data.email}">${data.email}</a>


`;
}

module.exports = generateMarkdown;
