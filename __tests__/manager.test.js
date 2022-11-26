const Manager = require('../lib/manager');

describe("Create a new Manager", () => {
  const manager = new Manager('Beth', '101', 'beth@test.com', 'A113');
  it('should create a new employee name Beth', () => {
    expect(manager.name).toEqual('Beth');
  });
  it('should create a new employee with id 101', () => {
    expect(manager.id).toEqual('101');
  });
  it('should create a new employee with email beth@test.com', () => {
    expect(manager.email).toEqual('beth@test.com');
  });
  it('should set the new employee role to Manager', () => {
    expect(manager.role).toEqual('Manager');
  });
  it('should set the new manager office number to A113', () => {
    expect(manager.officeNumber).toEqual('A113');
  });
});