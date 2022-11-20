const managerQuest = [
  {
    type: 'input',
    message: 'Who is the manager of the team?',
    name: 'managerName',
  },
  {
    type: 'input',
    message: 'Enter the manager ID',
    name: 'managerID',
  },
  {
    type: 'input',
    message: 'Enter the manager email address',
    name: 'managerEmail',
  },
  {
    type: 'input',
    message: 'Enter the manager office number',
    name: 'managerOffice'
  }
];
const addMore = [
  {
    type:'confirm',
    message: 'Add another team member?',
    name: 'addMore'
  }
]
const teamQuest = [
  {
    type: 'list',
    message: 'Choose team member role',
    choices: ['Engineer', 'Intern'],
    name: 'teamMember',
  },
  {
    type: 'input',
    message: 'Enter team member name',
    name: 'teamMemberName',
  },
  {
    type: 'input',
    message: 'Enter team member email',
    name: 'teamMemberEmail',
  }
]
const engineerQuest = [
  {
    type: 'input',
    message: 'Enter engineer github user name',
    name: 'githubUserName',
  }
]
const internQuest = [
  {
    type: 'input',
    message: "Enter the intern's school",
    name: 'internSchool',
  }
]
module.exports = {
  managerQuest : managerQuest,
  addMore : addMore,
  teamQuest : teamQuest,
  engineerQuest : engineerQuest,
  internQuest : internQuest,

}