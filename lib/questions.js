const teamQuest = [
  {
    type: 'input',
    message: 'Enter team member name',
    name: 'teamMemberName',
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
    name: 'teamMemberId',
  },
  {
    type: 'input',
    message: 'Enter team member email',
    name: 'teamMemberEmail',
  },
  {
    type: 'input',
    message: 'Enter engineer github user name',
    name: 'githubUserName',
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
    message: 'Enter  manager office number',
    name: 'managerOffice',
    when: (answers) => answers.role === 'Manager',
  },
  {
    type: 'confirm',
    message: 'Add another member?',
    name: 'addAnotherMember',
    default: false,
  }

]

module.exports = {
  teamQuest : teamQuest,
}

// https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// https://stackoverflow.com/questions/68170024/keep-repeating-the-prompter-questions-with-inquirer-js-based-on-answer