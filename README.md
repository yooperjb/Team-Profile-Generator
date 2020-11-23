# Team Profile Generator

## Description
This Team Profile Generator uses a Command Line Interface (CLI) to ask a user questions about team members including items such as name, employee id, email, github user, room number, etc. From those questions, it generates HTML, and writes that markup to an html file displaying the employee information. The gif file below shows the basic idea of the application. 
***
![Project GIF](./assets/images/Team_Generator.gif)
***
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation
This node.js project requires package dependencies to function. Clone the working files from the Github repo to begin. Because this project uses CLI input, Node.js must also be installed. It also uses the inquirer.js module for input questions and jest for testing. Both can be installed using npm using using:
  
```md
npm install inquirer
npm install jest
```

## Usage
To use the Team Profile Generator, first install any dependencies then run the index.js file from the root folder in node. A series of questions about the employees will be asked and used to generate a beautifully styled html output file.

```md
node index.js
```

## Contributing
There are many ways to contribute to this project if you are interested.

* [Submit bugs and feature requests](https://github.com/yooperjb/Team-Profile-Generator/issues)
* Review [source code changes](https://github.com/yooperjb/Team-Profile-Generator/pulls)

## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license. Click the link for more information about the license.

## Tests
The application hasn't been fully tested for all situations, however inquirer validation does work for improper or null input. There are also tests set up for the Class creations using jest. These tests validate object instance and method creation Tests can be run using:

```md
npm run test
```

### Questions
Any questions or feedback regarding this project can be sent directly to my [email](mailto:jason.barnes@humboldt.edu), or submitted as outlined in the [contributing](#contributing) section. This project and others can be found at my [Github page]('https://github.com/yooperjb').