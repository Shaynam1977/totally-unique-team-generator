const Engineer = require("../lib/Engineer")



describe('Engineer', () => {
    
    it('Should be able to take in a github argument', () => {
        const github = "Shayna"
        const result = new Engineer("name", "ID", "email", github)

        expect(result.github).toEqual(github);
    });

    it('Get github should return github', () => {
        const github = "Shayna"
        const result = new Engineer("Shayna", "ID", "email", github)

        expect(result.getgithub()).toEqual(github);
    });
    it('Get role should return Engineer', () => {
        const role = "Engineer"
        const result = new Engineer("Shayna", "ID", "email", "github")

        expect(result.getrole()).toEqual(role);
    });
})