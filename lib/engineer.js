// import Employee constructor
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }

    // return github
    getGithub () {
        return this.github;
    }

     
    getRole () {
        return "Engineer";
    }
}

// export Engineer
module.exports = Engineer; 