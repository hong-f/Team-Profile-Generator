const Employee = require('../lib/employee');
// new employee creation
const employee = new Employee('joe', '1212', 'joe@yahoo.com');

// return the values for the new employee object testing
test('test if we can return the constructor values for the employee object', () => {
    expect(employee.name).toBe('joe');
    expect(employee.id).toBe('1212');
    expect(employee.email).toBe('joe@yahoo.com');
});

// testing if methods work properly
test('test if we can return the name of employee from the getName() method', () => {
    expect(employee.getName()).toBe('joe');
});

test('test if we can return the getId() method', () => {
    expect(employee.getId()).toBe('1212');
});

test('test if we can return the getEmail() method', () => {
    expect(employee.getEmail()).toBe('joe@yahoo.com');
});

test('test if we can return the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});