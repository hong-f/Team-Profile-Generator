const Intern = require('../lib/intern');

const intern = new Intern('stan', '2323', 'stan@ford.edu', 'Ford');

test('test if we can return the constructor values for intern', () => {
    expect(intern.name).toBe('stan');
    expect(intern.id).toBe('2323');
    expect(intern.email).toBe('stan@ford.edu');
    expect(intern.school).toBe('Ford');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(intern.getName()).toBe('stan');
});

test('test if we can return the getId() method', () => {
    expect(intern.getId()).toBe('2323');
});

test('test if we can return the getEmail() method', () => {
    expect(intern.getEmail()).toBe('stan@ford.edu');
});

test('test if we can return the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test if we can return the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Ford')
});