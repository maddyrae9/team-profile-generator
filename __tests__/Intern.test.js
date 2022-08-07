const Intern = require("../lib/Intern");

test("create an intern object", () => {
  const intern = new Intern(
    "George",
    "5",
    "george@gmail.com",
    "Intern",
    "University of Florida"
  );
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.role).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});