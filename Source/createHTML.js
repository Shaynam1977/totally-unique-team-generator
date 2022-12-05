function createHtml(employeeArray){
    var cardArray=[]
    

function createManager(employee){
    return `
    <h3>${employee.getrole()}</h3>
    <h3>${employee.getofficeNumber()}</h3>
    <h3>${employee.getname()}</h3>
    <h3>${employee.getid()}</h3>
    <h3>${employee.getemail()}</h3>
    `
}
function createEngineer(employee){
    return `
    <h3>${employee.getrole()}</h3>
    <h3>${employee.getgithub()}</h3>
    <h3>${employee.getname()}</h3>
    <h3>${employee.getid()}</h3>
    <h3>${employee.getemail()}</h3>
    `
}
function createIntern(employee){
    return `
    <h3>${employee.getrole()}</h3>
    <h3>${employee.getschool()}</h3>
    <h3>${employee.getname()}</h3>
    <h3>${employee.getid()}</h3>
    <h3>${employee.getemail()}</h3>
    `
}
//crearte engineer and Intern functions to be like create manager ^



employeeArray.forEach(teamMember => {
    if(teamMember.getrole()==="Manager"){
        cardArray.push(createManager(teamMember))
    }
    
    //create else/if conditions for if get role is a engineer or intern 
    //push result from function into card array
});



    return cardArray.join("")
}


module.exports=employeeArray=>{
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team factory</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
${createHtml(employeeArray)}
  </body>
</html>
    
    
    
    
    
    
    
    
    `
}