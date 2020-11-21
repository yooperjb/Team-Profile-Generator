const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id, email, github){
        
        // call parent constructor
        super(name, id, email);

        this.github = github;
    }
    
    gitHub() {
        return this.gitHub;
    }

    getRole() {
        return `Engineer`;
    }
};

module.exports = Engineer;