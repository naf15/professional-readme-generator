/*============================
INSTRUCTIONS
============================*/

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
    // Description 
    // Table of Contents 
    // Installation 
    // Usage 
    // License 
    // Contributing 
    // Tests 
    // Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

/*=====================
DEPENDENCIES
=====================*/

// Packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

/*=====================
DATA
=====================*/

const fileName = 'README2.md';
// Array of questions for user input
const questions = [
    {
        question: 'What is the title of your project?',
        name: 'title'
    },
    {
        question: 'Describe your project.',
        name: 'description'
    },
    {
        question: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        question: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        question: 'Please select the license you would like to choose:',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0']
    },
    {
        question: 'List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.',
        name: 'credits'
    },
    {
        question: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        name: 'contributing'
    },
    {
        question: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests'
    },
    {
        question: 'What is your GitHub username?',
        name: 'gitHubUsername'
    },
    {
        question: 'What is your email address?',
        name: 'emailAddress'
    },
    {
        question: 'Table of Contents:',
        name: 'tableOfContents',
        choices: [
            'Description', 
            'Table of Contents', 
            'Installation', 
            'Usage', 
            'License', 
            'Contributing', 
            'Tests', 
            'Questions'
        ]
    }
];

/*=====================
FUNCTIONS
=====================*/

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
};

// Function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0].question,
                name: questions[0].name
            },
            {
                type: 'input',
                message: questions[1].question,
                name: questions[1].name
            },
            {
                type: 'input',
                message: questions[2].question,
                name: questions[2].name
            },
            {
                type: 'input',
                message: questions[3].question,
                name: questions[3].name
            },
            {
                type: 'list',
                message: questions[4].question,
                name: questions[4].name,
                choices: questions[4].choices
            },
            {
                type: 'input',
                message: questions[5].question,
                name: questions[5].name
            },
            {
                type: 'input',
                message: questions[6].question,
                name: questions[6].name
            },
            {
                type: 'input',
                message: questions[7].question,
                name: questions[7].name
            },
            {
                type: 'input',
                message: questions[8].question,
                name: questions[8].name
            },
            {
                type: 'input',
                message: questions[9].question,
                name: questions[9].name
            },
            {
                type: 'list',
                message: questions[10].question,
                name: questions[10].name,
                choices: questions[10].choices
            }
        ])
        .then((answers) => {
            console.log(answers)
            writeToFile(fileName, generateMarkdown(answers))
        })
}

/*=====================
INITIALIZATION
=====================*/

// Function call to initialize app
init();
