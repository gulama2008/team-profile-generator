const inquirer = require('inquirer');
const fs = require('fs');
const helper = require('./src/template_helper')

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the team manager's name?'",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name:'managerEmail',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name:'managerNumber',
        },
        {
            type: 'list',
            choices: ['Engineer','Intern',"I don't want to add more team members"],
            message: "Which type of team member would you like to add?",
            name: 'memberChoice',
        }
    ])
    .then(helper.handleData(data))
    .then(data => {console.log(helper.engineerArray,helper.internArray);}
    )

    

