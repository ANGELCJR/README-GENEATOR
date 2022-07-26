// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        name: "Title",
        message:"what is the tile of the project?",
    }, {
        type: "input",
        name:  "Description",
        message: "What is the project about?",
    },{
        type: "input",
        name: "Table of Contents.",
        message: "Table of contents",
    },{
        type: "input",
        name: "Installation",
        message: "Installation",
    },{
        type: "input",
        name: "Usage",
        message: "what usage does this app play in?",
    },{
        type: "input",
        name: "License",
        message: "What license is being used?",
    },{
        type: "input",
        name: "Contributing",
        message: "Who worked on this project?",
    },{
        type: "input",
        name: "Tests",
        message: "how do you test your application?",
    },{
        type: "input",
        name: "Github",
        message: "What is your Github username?"
    },{
        type: "input",
        name: "Email",
        message: "what is yout email?",
    }
    



];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}


// function to initialize program
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }

// function call to initialize program
init();