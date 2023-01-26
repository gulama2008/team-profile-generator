const inquirer = require('inquirer');
const fs = require('fs');
const helper = require('./src/template_helper')

function init() { 
    helper.addManagerInquirer();
}

init();
    

