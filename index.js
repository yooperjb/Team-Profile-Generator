const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {generateHtmlPage, writeFile} = require('./src/page-template');

let employees = [];

const getManager = () => {
    console.log(`
    ====================================
    Please Fill out Manager Information
        All questions are required.
    ====================================
    `);

    return inquirer
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
        {
            type: 'list',
            name: 'addemployee',
            message: 'Would you like to add an Employee to the team?',
            choices: ['Yes', 'No'],
        },
    ])
};

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
                type: 'list',
                name: 'role',
                message: 'What is the Employees role?',
                choices: ['Engineer', 'Intern'] 
            },
            {
                type: 'text',
                name: 'name',
                message: 'What is the Employees name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return ("Please enter the Employees name!");
                        }
                    },
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Employees ID (xxx)?',
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
                message: 'What is the Employees email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the Interns school?',
                when: function( answers ) {
                    return answers.role === 'Intern';
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
                name: 'github',
                message: 'What is the Engineers github username?',
                when: function( answers ) {
                return answers.role === 'Engineer';
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
                type: 'list',
                name: 'addemployee',
                message: 'Would you like to add another Employee?',
                choices: ['Yes', 'No'],
            },
        ])
};

const addEmployee = () => {
    
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'addemployee',
                message: 'Would you like to add another Employee?',
                choices: ['Yes', 'No'],
            },
        ])
};

getManager()
    // get inquirer answers for manager
    .then(managerInfo => {
        // destructure manager information
        const {name, id, email, office} = managerInfo;
        employees.push(new Manager(name, id, email, office));
        
        // if add employee is chosen
        if (managerInfo.addemployee === 'Yes') {
            return getEmployee()
                
            // get inquirer answers for other employees
            .then(employeeInfo => {

                // destructure employeeInfo
                const {role,name,id,email,school,github} = employeeInfo;

                // create new instance based on role
                if (role === 'Engineer') {
                    employees.push(new Engineer(name,id,email,github));
                } else {
                    employees.push(new Intern(name,id,email,school));
                }

                // if an additional employee is chosen loop
                if (employeeInfo.addemployee === 'Yes') {
                    return getEmployee();
                } else {
                    // generate HTML page (using mock data)
                    console.log(employees);
                    return generateHtmlPage(employees) 
                }

            }).then(htmlPage => {
                    //console.log("HTML page:",htmlpage);
                    console.log(typeof htmlPage);
                    return writeFile(htmlPage);
                })
                // try to catch error
                .catch(err => {
                    console.log(err);
                })

        } else {
            console.log(employees);
        }
    })

// let mockData =  [
//     Manager {
//     name: 'Jason',
//     id: '543',
//     email: 'jason@gmail.com',
//     officeNumber: '4'
//   },
//   Engineer {
//     name: 'Engina',
//     id: '321',
//     email: 'engineer@hotmail.com',
//     github: 'dkdkaeidk'
//   },
//   Engineer {
//     name: 'Bob',
//     id: '875',
//     email: 'bob@hotmail.com',
//     github: 'bobilicious'
//   },
//   Intern {
//     name: 'Teieny',
//     id: '643',
//     email: 'intern@aol.com',
//     school: 'Humboldt',
//   }
// ];

// let mock = [
//     Manager {
//       name: 'jason',
//       id: '593',
//       email: 'jason@gmail.com',
//       officeNumber: '4'
//     },
//     Engineer {
//       name: 'Engi',
//       id: '432',
//       email: 'engi@aol.com',
//       github: 'jidadk'
//     }
//   ]