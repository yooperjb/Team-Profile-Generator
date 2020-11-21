
class Engineer extends Employee{
    constructor(name,id, email, github){
        
        // call parent constructor
        super(name, id, email);

        this.gitHub = github;
    }
    
    gitHub() {
        return this.gitHub;
    }

    getRole() {
        return `Engineer`;
    }
};

module.exports = Engineer;