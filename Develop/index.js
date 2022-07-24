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
        name: "installation",
        message: "Installation",
    },{
        type: "input",
        name: "usage",
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
        name: "Test",
        message: "how do you test your application?",
    },{
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },{
        type: "input",
        name: "email",
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
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

// function call to initialize program
init();