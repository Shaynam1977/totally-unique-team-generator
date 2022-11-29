const Employee=require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, college){
        super(name, id, email)
        this.college=college
    }
getcollege(){
    return this.college
}
getroll(){
    return "Intern"
}
}

module.exports=Intern