const Engineer = require("../lib/Engineer");

test("create an engineer object", () => {
    const engineer = new Engineer(
        "Dave",
        "dave@gmail.com",
        "4",
        "engineer"
    );
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.role).toEqual(expect.any(String));
});