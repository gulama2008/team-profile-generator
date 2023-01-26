var managerInquirerQuestions = [
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the team manager's id?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the team manager's email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "managerNumber",
    },
    {
      type: "list",
      choices: ["Engineer", "Intern", "I don't want to add more team members"],
      message: "Which type of team member would you like to add?",
      name: "memberChoice",
    },
];

var engineerInquirerQuestions = [
    {
      type: "input",
      message: "What is your engineer's name?",
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
      choices: ["Engineer", "Intern", "I don't want to add more team members"],
      message: "Which type of team member would you like to add?",
      name: "memberChoice",
    },
];

var internInquirerQuestions = [
    {
      type: "input",
      message: "What is your intern's name?",
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
      choices: ["Engineer", "Intern", "I don't want to add more team members"],
      message: "Which type of team member would you like to add?",
      name: "memberChoice",
    },
];

module.exports = {
    managerInquirerQuestions,
    engineerInquirerQuestions,
    internInquirerQuestions,
}