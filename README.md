# team-profile-generator

  ![https://img.shields.io/badge/License-MIT-blue](https://img.shields.io/badge/License-MIT-blue)

  ## Description
  
  A busy manager should be able to find the contact information for all team members. This app allows a manager to create a web page directory including each team member's employee ID, email address, role, and based on that role, other pertinent information.  Email links should initiate a new email, and github usernames should open a link to that engineer's github profile page.
  
  ## Author
  
  The author for this project is [Mike Johnson](https://github.com/mikewebprint)
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#contributions)
  - [Tests](#tests)
  
  ## Installation
  
  Once the app is downloaded, npm install in the terminal is necessary before the app can be called.  The app can then be called with node index.
  
  ## Usage
  
  Other developers may use this app as an example or for their own use.
  
  ## Credits
  
  I would like to thank Kris Renaldi for his feedback and guidance in overcoming hurdles in determining next steps once I had my questions generated correctly in inquirer. I would also like to thank Blake Davis for his help in translating the object data into an array that would generate html properly.
  
  ## License
  
  MIT
  
  ## Features
  
  This project is created using Node.js and requires the inquirer package, and utilizes the file structure capabilities to generate the web page. Jest was used to test that each employee is created as an employee object with the proper role and information.
  
  ## Contributions
  
  Contributions to the project can be offered at the repository here: [https://github.com/mikewebprint/team-profile-generator](https://github.com/mikewebprint/team-profile-generator)
  
  ## Tests
  
  Testing that the input data for each employee generates the proper employee object by the various employee classes available: Manager, Engineer, Intern.

