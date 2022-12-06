const Intern = require("../lib/Intern")



describe('Intern', () => {
    
    it('Should be able to take in a school argument', () => {
        const school = "preschool"
        const result = new Intern("name", "ID", "email", school)

        expect(result.school).toEqual(school);
    });

    it('Get school should return school', () => {
        const school = "preschool"
        const result = new Intern("Shayna", "ID", "email", school)

        expect(result.getschool()).toEqual(school);
    });
    it('Get role should return Intern', () => {
        const role = "Intern"
        const result = new Intern("Shayna", "ID", "email", "school")

        expect(result.getrole()).toEqual(role);
    });
})