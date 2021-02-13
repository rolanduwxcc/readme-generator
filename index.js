//----------------------------------------------INCLUDED PKGS
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
// TITLE, 
//DESCRIPTION, INSTALLATION, USAGE INFO, CONSTRIBUTING, TEST INSTRUCTIONS
//LICENSE -- Badge needed and explanation included
//GITHUB USER NAME --->  QUESTIONS? Section, link to profile
//EMAIL Address ---> Questions? section how to reach me
//Make ToC from all this with links to sections
const questions = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter name, please.');
                    return false;
                }
            }
        },
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
        {
            name: 'description',
            type: 'input',
            message: 'Describe your project. (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            name: 'installation',
            type: "checkbox",
            message: 'How do you install the application?',
            choices: ['npm', 'GitHub Pages', 'other'],
        },
        {
            name: 'languages',
            type: 'checkbox',
            message: 'What technologies were used? (Check all that apply)',
            choices: ['html', 'css', 'javaScript', 'ES6', 'node', 'bootstrap'],
        },
        {            
            name: 'license',
            type: "checkbox",
            message: 'What is the license type?',
            choices: ['PD/CC0', 'MIT', 'Apache','MPL','GPL','AGPL','other']
        },
        {
            type: 'confirm',
            name: 'contributions',
            message: 'Are contributions allowed?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Include a test section?',
            default: true,
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is your GitHub user name? (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Item required!');
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the contact email address? (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Item required!');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err) {
            throw new Error(err);
            console.log(err);
            return;
        }
        console.log('Page created! Check out index.html in this directory');
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
        console.log(answers);
    })
    .catch(err => {
        console.log(err);
    });
};
//MOCK DATA.......
let mockData = {
    name: 'Warren Rowland',
    title: 'This is Title',
    description: 'This is a description.',
    installation: [ 'npm' ],
    languages: [ 'javaScript', 'ES6' ],
    license: [ 'MIT' ],
    contributions: true,
    tests: true,
    github: 'rolanduwxcc',
    email: 'rolanduwxcc@gmail.com',
    date: '2020'
  };
// Function call to initialize app
// init();
const output = generateMarkdown(mockData);
writeToFile('./README.md',output);
