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
  return `# ${data.title}
${data.Description}
## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[Contributing](#contributing)
[Test](#test)
[Title](#Title)
# Installation
${data.Installation}
#Usage
To use application, ${data.Usage}
#Contributing 
Contributors: ${data.Contributing}
# Tests
How to test the application: ${data.Tests}
`;
}

module.exports = generateMarkdown;
