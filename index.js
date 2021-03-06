// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const path =require('path');
const generateMarkdown =require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = () => {
      inquirer.prompt([
        
        
        //title//
        {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your application? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your application!');
            return false;
          }
        }
      },
        //description

        {
          type: 'input',
          name: 'description',
          message: 'Please provide a brief description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        //installation
        {
            type: 'input',
        name: 'installation',
        message: 'How do you install your app? (Required)',
        validate: installation => {
          if (installation) {
            return true;
          } else {
            console.log('Please enter what needs to be installed!');
            return false;
          }
        }
          },

          //usage
          {
            type: 'input',
        name: 'usage',
        message: 'How do you use your app (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter your usage info!');
            return false;
          }
        }
        },
        //license

        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for your project?',
            choices: ['MIT License', 'Perl License', 'IBM License','N/A']
          },

          //contributing
          {
          type: 'input',
          name: 'contributing',
          message: 'Any additional contributors? (Required)',
          validate: contributorInput => {
            if (contributorInput) {
              return true;
            } else {
              console.log('Please enter your contributors!');
              return false;
            }
          }
        },

          //tests
         { type: 'input',
          name: 'tests',
          message: 'What tests are used/needed? (Required)',
          validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter tests used');
              return false;
            }
          }
        },
    //Questions -name/link
        {
          type: 'input',
          name:  'name',
          message: 'What is your name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        },
        {
            type: 'input',
        name: 'githubname',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },

      {
        type: 'input',
    name: 'email',
    message: 'Enter your email address to be added for your contact information (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
    ])
    .then(answers =>{
      writeToFile("README.md",answers) 
    })

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(__dirname,"/samples/",fileName),generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {promptUser()}

// Function call to initialize app
init();
