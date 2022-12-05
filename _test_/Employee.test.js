const Employee = require("../lib/Employee")



describe('Employee', () => {
    it('Be able to create a new Employee object', () => {

        const result = new Employee()

        expect(typeof (result)).toBe("object");
    });
    it('Should be able to take in a name argument', () => {
        const name = "Shayna"
        const result = new Employee(name)

        expect(result.name).toEqual(name);
    });
    it('Should be able to take in a ID argument', () => {
        const ID = "123"
        const result = new Employee("Shayna", ID)

        expect(result.id).toEqual(ID);
    });
    it('Should be able to take in a email argument', () => {
        const email = "email@email.com"
        const result = new Employee("Shayna", "ID", email)

        expect(result.email).toEqual(email);
    });
    it('get name should return name', () => {
        const name = "Shayna"
        const result = new Employee(name)

        expect(result.getname()).toEqual(name);
    });
    it('Should return an ID', () => {
        const ID = "123"
        const result = new Employee("Shayna", ID)

        expect(result.getid()).toEqual(ID);
    });
    it('Should be able to return an email', () => {
        const email = "email@email.com"
        const result = new Employee("Shayna", "ID", email)

        expect(result.getemail()).toEqual(email);
    });
    it('Get role should return Employee', () => {
        const role = "Employee"
        const result = new Employee("Shayna", "ID", "email")

        expect(result.getrole()).toEqual(role);
    });
})