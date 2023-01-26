const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const questions=require('./inquirer_questions')
const writeHtml=require('./html_template')

// const managerArray = [];
// const engineerArray = [];
// const internArray = [];
const memberArray = [];

//initial inquirer questions to add team manager
function addManagerInquirer() { 
    inquirer
      .prompt(questions.managerInquirerQuestions)
        .then(data => { 
            addManager(data);
            handleData(data);
        });
}

//inquirer questions when user choose to add new engineer
function addEngineerInquirer() {
  inquirer
    .prompt(questions.engineerInquirerQuestions)
    .then((data) => {
      addEngineer(data);
      handleData(data);
    });
}

//inquirer questions when user choose to add new intern
function addInternInquirer() {
  inquirer
    .prompt(questions.internInquirerQuestions)
    .then((data) => {
      addIntern(data);
      handleData(data);
    });
}

//function for creating member object and check if need to add more member
function handleData(data) { 
    if (data.memberChoice == "Engineer") {
      addEngineerInquirer();
    } else if (data.memberChoice == "Intern") {
      addInternInquirer();
    } else {
        fs.writeFileSync("./dist/member.html", writeHtml.writeHtml(writeHtml.createCards(memberArray)));
      return;
    }
}

//function of creating manager object and add it to the manager array
function addManager(data) {
  let manager = new Manager(data.managerName,data.managerId,data.managerEmail,data.managerNumber);
  memberArray.push(manager);
}

//function of creating engineer object and add it to the engineer array
function addEngineer(data) {
  let engineer = new Engineer(data.engineerName,data.engineerId,data.engineerEmail,data.engineerGithub);
  memberArray.push(engineer);
}

//function of creating intern object and add it to the intern array
function addIntern(data) {
  let intern = new Intern(data.internName,data.internId,data.internEmail,data.internSchool);
  memberArray.push(intern);
}

module.exports = {
//   managerArray,
//   engineerArray,
//   internArray,
  memberArray,
  addManagerInquirer,
  addEngineerInquirer,
  addInternInquirer,
  handleData,
  addManager,
  addEngineer,
  addIntern,
};
