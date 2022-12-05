const Engineer=require("./lib/Engineer")
const Manager=require("./lib/Manager")
const Intern=require("./lib/Intern")
const inquirer=require("inquirer")
const fs=require("fs")
const createHtml=require("./Source/createHTML")
const employeeArray=[]
//const Shayna=new Engineer("Shayna",666,"anyemail@email", "shayna'sgithub")
//console.log(Shayna)

function employeePrompt(){
    inquirer.prompt([
        {
            type:"list",
            name:"employeeType",
            message:"Please choose an employee to add",
            choices:["Manager", "Engineer", "Intern", "no more"]
        }
    ]) .then(data=>{
        if (data.employeeType==="Manager"){
            managerQuestions()
        }
        else if(data.employeeType==="Engineer"){
            engineerQuestions()
        }
        else if(data.employeeType==="Intern"){
            interQuestions()
        }
        else {
            console.log("team created")
            fs.writeFileSync("index.html", createHtml(employeeArray))
        }
    })
}
function managerQuestions (){
    inquirer.prompt([
        {
            type:"input",  
            name:"managerName",
            message:"Please enter the manager's name",
        },
        {
            type:"input", 
            name:"managerId",
            message:"Please enter manager's Id",
        },
        {
            type:"input", 
            name:"managerEmail",
            message:"Please enter the manager's email",
        },
        {
            type:"input", 
            name:"managerOfficeNumber",
            message:"Please enter the manager's office number",
        },
    ]) . then(data=>{
        const instance= new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
        employeeArray.push(instance)
        console.log(employeeArray)
        employeePrompt()
    })
}
function engineerQuestions (){
    inquirer.prompt([
        {
            type:"input", 
            name:"engineerName",
            message:"Please enter the engineer's name",
        },
        {
            type:"input", 
            name:"engineerId",
            message:"Please enter engineer's Id",
        },
        {
            type:"input", 
            name:"engineerEmail",
            message:"Please enter the engineer's email",
        },
        {
            type:"input", 
            name:"engineersGitHub",
            message:"Please enter the engineer's GitHub",
        },
    ]) . then(data=>{
        const instance= new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineersGitHub)
        employeeArray.push(instance)
        console.log(employeeArray)
        employeePrompt()
    })
}
function interQuestions (){
    inquirer.prompt([
        {
            type:"input", 
            name:"internName",
            message:"Please enter the intern's name",
        },
        {
            type:"input", 
            name:"internId",
            message:"Please enter intern's Id",
        },
        {
            type:"input", 
            name:"internEmail",
            message:"Please enter the intern's email",
        },
        {
            type:"input", 
            name:"school",
            message:"Please enter intern's school",
        },
    ]) . then(data=>{
        const instance= new Intern(data.internName, data.internId, data.internEmail, data.school)
        employeeArray.push(instance)
        console.log(employeeArray)
        employeePrompt()
    })
}
managerQuestions()