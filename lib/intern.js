// import Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
       
        super (name, id, email); 

        this.school = school; 
    }

    // return school
    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

// Export Intern
module.exports = Intern; 