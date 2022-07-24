// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {return}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {return}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {return}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.Title}
${data.Description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Tests)
* [Title](#Title)
* [Questions](#Questions)
# Installation                
These must be installed to run the application: ${data.Installation}
# Usage             
To use this app,${data.Usage} 
# Contributing 
Contributors: ${data.Contributing}
# Tests
How to test the application: ${data.Tests}
# Questions
Any questions or concern about the repository contact ${data.Github} at ${data.Email}
`;
}

module.exports = generateMarkdown;
