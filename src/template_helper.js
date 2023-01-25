const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const managerArray = [];
const engineerArray = [];
const internArray = [];

//inquirer questions when user choose to add new engineer
function addEngineerInquirer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?'",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is your engineer's id?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "engineerGithub",
      },
      {
        type: "list",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add more team members",
        ],
        message: "Which type of team member would you like to add?",
        name: "memberChoice",
      },
    ])
    .then(handleData(data));
}

//inquirer questions when user choose to add new intern
function addInternInquirer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?'",
        name: "internName",
      },
      {
        type: "input",
        message: "What is your intern's id?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "internSchool",
      },
      {
        type: "list",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add more team members",
        ],
        message: "Which type of team member would you like to add?",
        name: "memberChoice",
      },
    ])
    .then(handleData(data));
}

//function for creating member object and check if need to add more member
function handleData(data) { 
    addIntern(data);
    if (data.memberChoice == "Engineer") {
      addEngineerInquirer();
    } else if (data.memberChoice == "Intern") {
      addInternInquirer();
    } else {
      //   console.log(
      //     engineerArray,
      //     managerArray,
      //     internArray
      //   );
      return;
    }
}

//function of writing data to html file
function writeToHtml() { 
    fs.writeFile('../dist/member.html',)
}

//function of creating manager object and add it to the manager array
function addManager(data) {
  let manager = new Manager(
    data.managerName,
    data.managerId,
    data.managerEmail,
    data.managerNumber
  );
  managerArray.push(manager);
}

//function of creating engineer object and add it to the engineer array
function addEngineer(data) {
  let engineer = new Engineer(
    data.engineerName,
    data.engineerId,
    data.engineerEmail,
    data.engineerGithub
  );
  engineerArray.push(engineer);
}

//function of creating intern object and add it to the intern array
function addIntern(data) {
  let intern = new Intern(
    data.internName,
    data.internId,
    data.internEmail,
    data.internSchool
  );
  internArray.push(intern);
}

module.exports = {
  managerArray,
  engineerArray,
  internArray,
  addEngineerInquirer,
  addInternInquirer,
  handleData,
  addManager,
  addEngineer,
  addIntern,
};
