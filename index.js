const employee = require('./lib/employee');


const Manager =  employee.Manager;
const Engineer = employee.Engineer;
const Intern = employee.Intern;

const Mike = new Manager ('Mike', 45, 'mike@test.com', 46)
console.log(Mike);
const Jackie = new Intern('Jackie', 123, 'jackie@test.com', 'RWU')
console.log(Jackie);
const Joe = new Engineer('Joe', 36, 'joe@test.com', 'bigJoeD');
console.log(Joe);
console.log(Jackie.getSchool());
console.log(Mike.getEmail());
console.log(Joe.getGithub());
console.log(Jackie.getEmail());