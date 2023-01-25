const Engineer = require('../lib/engineer');

const engineer = new Engineer('jill', '7777', 'jill@gmail.com', 'jocko24');

test('test if we can return the constructor values for engineer', () => {
    expect(engineer.name).toBe('jill');
    expect(engineer.id).toBe('7777');
    expect(engineer.email).toBe('jill@gmail.com');
    expect(engineer.github).toBe('jill77');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(engineer.getName()).toBe('jill');
});

test('test if we can return the getId() method', () => {
    expect(engineer.getId()).toBe('7777');
});

test('test if we can return the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jill@gmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('test if we can return the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('jill77')
});