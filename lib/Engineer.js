//Employee
const Employee = require("./Employee");

//Engineer class
class Engineer extends Employee {
    constructor(name, email, id, githubUser) {
        super(name, email, id);
        this.githubUser = githubUser;
        this.role = "Engineer";
    }
}

//Exports
module.exports = Engineer;