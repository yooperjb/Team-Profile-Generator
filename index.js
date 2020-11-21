const { validate } = require('@babel/types');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const getEmployee = () => {
    console.log(`
    ====================================
    Please Fill out Employee Information
        All questions are required.
    ====================================
    `);

    return inquirer
        .prompt([
        {
        type: 'text',
        name: 'name',
        message: 'What is the Employees name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter an employee name!");
                return false;
                }
            },
        },
        {
        type: 'list',
        name: 'jobRole',
        message: 'What is the employees role?',
        choices: ['Engineer', 'Manager', 'Intern'] 
        },
        {
        type: 'input',
        name: 'school',
        message: 'What is the interns school?',
        when: function( answers ) {
            return answers.jobRole === 'Intern';
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school.');
                return false;
            }
        },
        },
        {
        type: 'input',
        name: 'office',
        message: 'What is the managers office number?',
        when: function ( answers ) {
            return answers.jobRole === 'Manager';
            },
        validate: officeInput => {
            if (!isNaN(officeInput)) {
                return true;
            } else {
                //console.log(typeof officeInput);
                return('Please enter an office number:');
            }
            },
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is the engineers github username?',
        when: function( answers ) {
            return answers.jobRole === 'Engineer';
            },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('',' Please enter a github user name!');
                return false;
            }
        },
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID (xxx)?',
        validate: idInput => {
            if ((!isNaN(idInput)) && (idInput.toString().length === 3)) {
                return true;
            } else {
                return ('Please enter a 3 digit ID:');
            }
            },
        },
        {
        type: 'text',
        name: 'email',
        message: 'What is the employees email?',
        },

    ])
};

getEmployee()
    // get inquirer answers
    .then(employeeInfo => {
        console.log(employeeInfo);
    });