
class Employee {
    constructor(name,id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

// const bobby = new Employee('Bobby', 345, 'boby@hotmail.com');
// console.log(typeof bobby, bobby);
// console.log(bobby.getRole());

module.exports = Employee;