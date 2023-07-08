const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "creator",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "none"],
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((answers) => writeToFile('./dist/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully generated README'))
    .catch((err) => console.error(err));
}

init();
