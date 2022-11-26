const Engineer = require('../lib/engineer');

describe("Create a new Engineer", () => {
  const eng = new Engineer('Bob', '345', 'bob@test.com', 'bobbygithub');
  it('should create a new employee name Bob', () => {
    expect(eng.name).toEqual('Bob');
  });
  it('should create a new employee with id 345', () => {
    expect(eng.id).toEqual('345');
  });
  it('should create a new employee with email bob@test.com', () => {
    expect(eng.email).toEqual('bob@test.com');
  });
  it('should set the new employee role to Engineer', () => {
    expect(eng.role).toEqual('Engineer');
  });
  it('should set the new Engineer github username to bobbygithub', () => {
    expect(eng.github).toEqual('bobbygithub');
  });
});