test("creates Employee Object", () => {
    const employee = new Employee("Danielle", "danielle@gmail.com", "2")
    expect(employee.name()).toBe("Danielle");
    expect(employee.email()).toBe("danielle@gmail.com");
    expect(employee.id()).toBe("2");
});

test("exports Employee to use in role", () => {});