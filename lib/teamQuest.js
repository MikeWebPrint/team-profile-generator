

const teamQuest = [
  {
    type: 'input',
    message: 'Enter team member name',
    name: 'empName',
  },
  {
    type: 'list',
    message: 'Choose team member role',
    choices: ['Manager', 'Engineer', 'Intern'],
    name: 'role',
  },
  {
    type: 'input',
    message: 'Enter team member ID',
    name: 'empId',
  },
  {
    type: 'input',
    message: 'Enter team member email',
    name: 'empEmail',
  },
  {
    type: 'input',
    message: 'Enter engineer github user name',
    name: 'github',
    when: (answers) => answers.role === 'Engineer',
  },
  {
    type: 'input',
    message: "Enter the intern's school",
    name: 'internSchool',
    when: (answers) => answers.role === 'Intern',
  },
  {
    type: 'input',
    message: 'Enter office number',
    name: 'mgrOffice',
    when: (answers) => answers.role === 'Manager',
  },
]

module.exports = teamQuest


// https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// https://stackoverflow.com/questions/68170024/keep-repeating-the-prompter-questions-with-inquirer-js-based-on-answer