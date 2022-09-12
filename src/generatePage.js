function generatePage(managerSet, engineerSet, internSet) {
  const managerSec = <div class="manager-card">
  <div class="card-header">
    <h2>${managerSet[0].name}</h2>
    <h2>${managerSet[0].role}</h2>
  </div>
  <div class="card-body">
  <p>ID: ${managerSet[0].id}</p>
  <p>Email: <a href="mailto: ${managerSet[0].email}">${managerSet[0].email}</a></p>
  <p>Office Number: ${managerSet[0].officeNumber}</p>
</div>
</div>;
}
//Engineer
let engineerSec = "";
engineerSet.forEach((engineerEmployee) => {
  let engineerSecPart = `<div class="engineer-card">
<div class="card-header">
  <h2>${engineerEmployee.name}</h2>
  <h2>${engineerEmployee.role}</h2>
</div>

<div class="card-body">
  <p>ID: ${engineerEmployee.id}</p>
  <p>Email: <a href="mailto: {engineerEmployee.email}">${engineerEmployee.email}</a></p>
  <p>GitHub UserName: <a href="https://github.com/${engineerEmployee.gitHubUser}">  ${engineerEmployee.gitHubUser}</a></p>
</div>
</div>`;
  engineerSec = engineerSec.concat(" ", engineerSecPart);
});
// Intern
let internSec = "";
internSet.forEach((internEmployee) => {
  let internSecPart = `<div class="intern-card">
<div class="card-header">
  <h2>${internEmployee.name}</h2>
  <h2> ${internEmployee.role}</h2>
</div>
<div class="card-body">
  <p>ID: ${internEmployee.id}</p>
  <p>Email: <a href="mailto: ${internEmployee.email}">${internEmployee.email}</a></p>
  <p>School: ${internEmployee.school}</p>
</div>
</div>`;
  internSec = internSec.concat(" ", internSecPart);
});
var content = ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Team Profile Generator</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <header class="header">
    <h1>My Team</h1>
  </header>
  <div class="wrapper">
      ${managerSec}
      ${engineerSec}
      ${internSec}
  </div>
</body>
</html>`;
return content;

module.exports = generatePage;