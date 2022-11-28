const Employee = require('../lib/employee');


describe("Create a new employee", () => {
  const emp = new Employee('Mike', '123', 'mike@test.com');
  it('should create a new employee name Mike', () => {
    expect(emp.name).toBe('Mike');
  });
  it('should create a new employee with id 123', () => {
    expect(emp.id).toEqual('123');
  });
  it('should create a new employee with email mike@test.com', () => {
    expect(emp.email).toBe('mike@test.com');
  });
  it('should set the new employee role to employee', () => {
    expect(emp.getRole()).toBe('Employee');
  });
});

