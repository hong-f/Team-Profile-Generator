// employee constructor (main) 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // return name
    getName () {
        return this.name;
    }

    // return ID
    getId () {
        return this.id;
    }   

    // return email
    getEmail () {
        return this.email;
    }

    // return employee type
    getRole () {
        return 'Employee'; 
    }
};

// export Employee
module.exports = Employee; 