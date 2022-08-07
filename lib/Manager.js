const Employee = require("./Employee");

//Intern Class
class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
        this.role = "Intern";
    }
}

//Exports
module.exports = Intern;