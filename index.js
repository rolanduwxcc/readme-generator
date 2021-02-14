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
            type: "input",
            message: 'How do you install your application?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            name: 'languages',
            type: 'checkbox',
            message: 'What technologies were used? (Check all that apply)',
            choices: ['html ', 'css ', 'javaScript ', 'ES6 ', 'node ', 'bootstrap ','other '],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please select at least one technology!');
                    return false;
                }
            }
        },
        {            
            name: 'license',
            type: "checkbox",
            message: 'What is the license type?',
            choices: ['PD/CC0', 'MIT', 'Apache','MPL','GPL','AGPL','other'],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please select a license type!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributions',
            message: 'Are contributions from others welcomed?',
            default: false,
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can others help out?',
            when: ({ confirmContributions }) => {
                if (confirmContributions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Include a test/screenshot section?',
            default: true,
        },
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
        console.log(`
    README.md created! 
    Check it out here => ${fileName}

        `
        );
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ===================
    README.md Generator
    ===================

    Please answer a few questions.

    `);
    questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    . then(dataToWrite => {
        writeToFile('./dist/README.md',dataToWrite);
    })
    .catch(err => {
        console.log(err);
    });
};


// //Function to use for testing application.
// //Uncomment the function and the call of this function
// //----Make sure to comment out the init() call below to test changes
// function test() {
//     //MOCK DATA for testing if making lots of changes.
//     //Build out an answer object to feed to the markdown generator.
//     let mockData = {
//         name: 'Warren Rowland',
//         title: 'Run Buddies',
//         description: 'An app to help you run better!',
//         installation: [ 'GitHub Pages Link' ],
//         languages: [ 'HTML', 'CSS' ],
//         license: [ 'MIT' ],
//         contributions: true,
//         tests: true,
//         github: 'rolanduwxcc',
//         email: 'rolanduwxcc@gmail.com',
//         date: '2020'
//     };
//     const output = generateMarkdown(mockData);
//     writeToFile('./READMEexample.md',output);
// };
// test();

// Function call to initialize/run app
init();

