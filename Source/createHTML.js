function createHtml(employeeArray){
    var cardArray=[]
    

function createManager(employee){
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getrole()}</h5>
    <p class="card-text">Employee Name: ${employee.getname()}</p>
    <p class="card-text">Employee Office Number: ${employee.getofficeNumber()}</p>
    <p class="card-text">Employee ID: ${employee.getid()}</p>
    <a href="#" class="btn btn-primary">${employee.getemail()}</a>
  </div>
</div>
   
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
    
    else if(teamMember.getrole()==="Engineer"){
        cardArray.push(createEngineer(teamMember))
    }

    else if(teamMember.getrole()==="Intern"){
        cardArray.push(createIntern(teamMember))
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Team factory</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
${createHtml(employeeArray)}
  </body>
</html>
    
    
    
    
    
    
    
    
    `
}