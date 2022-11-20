class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee'
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.role = 'Manager'
    this.officeNumber = officeNumber;
  }

}
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.role = 'Engineer';
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

}
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.role = 'Intern';
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = {
  Employee: Employee,
  Manager: Manager,
  Engineer: Engineer,
  Intern: Intern
}
// module.exports = Employee;
// module.exports = Manager;
// module.exports = Engineer;
// module.exports = Intern;