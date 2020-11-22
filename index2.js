const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {generateHtmlPage, writeFile} = require('./src/page-template');

let employees = [];

const getManagerInfo = () => {
    console.log(`
    ====================================
    Please Fill out Manager Information
        All questions are required.
    ====================================
    `);

    inquirer
        .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the Managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Managers name!");
                    return false;
                    }
                },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Managers ID (xxx)?',
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
            message: 'What is the Managers email?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the Managers office number?',
            validate: officeInput => {
                if (!isNaN(officeInput)) {
                    return true;
                } else {
                    return('Please enter an office number:');
                }
            },
        },
    ]).then(
        ({ name, id, email, office }) => {
            const manager = new Manager(name, id, email, office);
            employees.push(manager);
            createEmployee();
        });
};

const getEngineerInfo = () => {
    console.log(`
    ====================================
    Please Fill out Engineer Information
        All questions are required.
    ====================================
    `);

    inquirer
        .prompt([        
            {
                type: 'text',
                name: 'name',
                message: 'What is the Engineers name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return ("Please enter the Engineers name!");
                        }
                    },
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers ID (xxx)?',
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
                message: 'What is the Engineers email?',
            },

            {           
                type: 'input',
                name: 'github',
                message: 'What is the Engineers github username?',
                validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('',' Please enter a github user name!');
                    return false;
                }
            },
            },
        ]).then(
            ({ name, id, email, github }) => {
                const engineer = new Engineer(name, id, email,github);
                employees.push(engineer);
                createEmployee();
            });
};

const getInternInfo = () => {
    console.log(`
    ==================================
    Please Fill out Intern Information
        All questions are required.
    ==================================
    `);

    inquirer
        .prompt([        
            {
                type: 'text',
                name: 'name',
                message: 'What is the Interns name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return ("Please enter the Interns name!");
                        }
                    },
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Interns ID (xxx)?',
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
                message: 'What is the Interns email?',
            },

            {           
                type: 'input',
                name: 'school',
                message: 'What is the Interns School?',
                validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('',' Please enter a school!');
                    return false;
                }
            },
            },
        ]).then(
            ({ name, id, email, school }) => {
                const intern = new Intern(name, id, email, school);
                employees.push(intern);
                createEmployee();
            });
};

// choose which employee to add
const createEmployee = () => {
    inquirer
        .prompt([
        {
        type: 'list',
        name: 'type',
        message: 'Choose an employee type to add.',
        choices: ['Engineer', 'Intern', 'No More']
        }
    ]).then(employeeRole => {
    
    if (employeeRole.type === 'Engineer') {
        getEngineerInfo()
    } else if (employeeRole.type === 'Intern') {
        getInternInfo()
    } else {
        
        // build html from here
        console.log(employees);
        const htmlPage = generateHtmlPage(employees);

        writeFile(htmlPage);
    }
    })
};

// Initialize getManager Info
getManagerInfo()

