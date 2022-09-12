//Employee
const Employee = require("./Employee");

//Manager class
class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, email, id);
        this.office = office;
        this.role = "Manager";
    }
}

//Exports
module.exports = Manager;