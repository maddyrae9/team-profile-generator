const Employee = require("../lib/Employee");

test("create an employee object", () => {
  const employee = new Employee(
    "Dave",
    "dave@gmail.com",
    4,
    "engineer"
  );
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.role).toEqual(expect.any(String));
});