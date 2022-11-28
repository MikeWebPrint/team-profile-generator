const Intern = require('../lib/intern');

describe("Create a new Intern", () => {
  const intern = new Intern('Joe', '678', 'joe@test.com', 'RWU');
  it('should create a new employee name Joe', () => {
    expect(intern.name).toEqual('Joe');
  });
  it('should create a new employee with id 678', () => {
    expect(intern.id).toEqual('678');
  });
  it('should create a new employee with email joe@test.com', () => {
    expect(intern.email).toEqual('joe@test.com');
  });
  it('should set the new employee role to Intern', () => {
    expect(intern.getRole()).toEqual('Intern');
  });
  it('should set the new Intern school to RWU', () => {
    expect(intern.school).toEqual('RWU');
  });
});