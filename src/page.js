
// function to create the team 
const createTeam = (team) => {
    // inside this function, have indiviudal functions with html for each role
    const createManager = (manager) => {
      return `
      <aside>
    <table>
      <thead>
        <tr>
          <th colspan="2">${manager.getName()}</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            Role:
          </td>
          <td>${manager.getRole()}            </td>
          </tr>
          <tr>
            <td>
              ID:
            </td>
            <td>${manager.getId()}            </td>
            </tr>
            <tr>
              <td>
                Email:
              </td>
              <td><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></td>
            </tr>
            <tr>
            <td>
              Office:
            </td>
            <td>${manager.getOfficeNumber()}</td>
          </tr>
          </tbody>
              </table></aside>
      `
    }


    // after you've comp;leted each role

    // create array to push datat into based on role

    const htmlArray = []

    htmlArray.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManager(manager)));
    // return that array 
    return htmlArray.join("")
}
   // export generic html that runs the function we first created 

   module.exports = team => {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Directory</title>
      <link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css">
      <link rel="stylesheet" href="../dist/style.css">
    </head>
    
    <body>
      <header><h1>Team Directory</h1></header>
      <section>    ${createTeam(team)}      </section>
      </body>
      
      </html>
    `;
   };