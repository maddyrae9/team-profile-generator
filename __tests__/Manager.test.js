const Manager = require("../lib/Manager");

test("create manager object", () => {
  const manager = new Manager(
    "Taylor",
    "taylor@gmail.com",
    6,
    "manager",
    123
  );
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.role).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));
});