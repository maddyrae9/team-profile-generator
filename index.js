const fs = require("fs");
const inquirer = require("inqurier");
const generatePage = require("./src/generatePage");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Employee arrays
var engineerSet = [];
var internSet = [];
var managerSet = [];

function getManagerObj() {
    inquirer
    .prompt([
        {
        message: "Enter manager name:",
        type: "input",
        name: "name",
      },
          {
            type: "input",
            name: "email",
            message: "Enter manager email:",
          },
          {
            type: "input",
            name: "id",
            message: "Enter manager ID:",
          },
          {
            type: "input",
            name: "officeNumber",
            message: "Enter Office Number",
        },
    ])
    .then((answer) => {
        const { name, email, id, officeNumber } = answer;
        const currentManager = new Manager(name, email, id, officeNumber);
        managerSet.push(currentManager);
        getNextEmployee();
    });
}
function getEngineerObj() {
    inquirer
    .prompt([
        {
        message: "Enter Engineer name:",
        type: "input",
        name: "name",
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email:",
          },
          {
            type: "input",
            name: "id",
            message: "Enter employee ID:",
          },
          {
            type: "input",
            name: "gitHubUser",
            message: "Enter GitHub UserName:",
          },
    ])
    .then((answer) => {
        const { name, email, id, githubUser } = answer;
        const currentEngineer = new Engineer(name, email, id, githubUser);
        engineerSet.push(currentEngineer);
        additionalEmployees();
    })
}
//Intern or Engineer prompt
function getNextEmployee() {
    inquirer
      .prompt({
        type: "list",
        name: "role",
        message: "Pick employee role",
        choices: ["Engineer", "Intern"],
      })
      .then(function (data) {
        if (data.role === "Engineer") {
          //run Engineer as role
          getEngineerObj();
        } else if (data.role === "Intern") {
          getInternObj();
        } else {
          // invalid entry error
          console.log("error");
          return;
        }
      });
  }
  function getInternObj() {
    inquirer
      .prompt([
        {
          message: "Enter intern name:",
          type: "input",
          name: "name",
        },
        {
          type: "input",
          name: "id",
          message: "Enter employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter employee email:",
        },
        {
          type: "input",
          name: "school",
          message: "Enter School Name:",
        },
      ])
      .then((answer) => {
        const { name, id, email, school } = answer;
        const currentIntern = new Intern(name, id, email, school);
        internSet.push(currentIntern);
        additionalEmployees();
      });
  }
  //Additional employees
  function additionalEmployees() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "more",
          message: "Do you have more employees to add?",
        },
      ])
      .then((answers) => {
        if (answers.more) {
          getNextEmployee();
        } else {
          writeSite();
        }
      });
  }
  //HTML content
  function writeSite() {
    const content = generatePage(managerSet, engineerSet, internSet);
    fs.writeFile("./dist/index.HTML", content, (err) => {
      if (err) throw err;
      console.log("The HTML has been saved!");
      copyStyle();
    });
  }
 //Run the program
 getManagerObj();