const Manager = require('../lib/manager');

const manager = new Manager('bob', '34343', 'bobby@hotmail.com', '11');

test('test if we can return the constructor values for manager', () => {
    expect(manager.name).toBe('bob');
    expect(manager.id).toBe('34343');
    expect(manager.email).toBe('bobby@hotmail.com');
    expect(manager.officeNumber).toBe('11');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(manager.getName()).toBe('bob');
});

test('test if we can return the getId() method', () => {
    expect(manager.getId()).toBe('34343');
});

test('test if we can return the getEmail() method', () => {
    expect(manager.getEmail()).toBe('bobby@hotmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

