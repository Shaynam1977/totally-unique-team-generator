const Manager = require("../lib/Manager")



describe('Manager', () => {
    
    it('Should be able to take in a office number argument', () => {
        const officeNumber = "123-456-7890"
        const result = new Manager("name", "ID", "email", officeNumber)

        expect(result.officeNumber).toEqual(officeNumber);
    });

    it('Get office number should return office number', () => {
        const officeNumber = "123-456-7890"
        const result = new Manager("Shayna", "ID", "email", officeNumber)

        expect(result.getofficeNumber()).toEqual(officeNumber);
    });
    it('Get role should return Manager', () => {
        const role = "Manager"
        const result = new Manager("Shayna", "ID", "email", "officeNumber")

        expect(result.getrole()).toEqual(role);
    });
})