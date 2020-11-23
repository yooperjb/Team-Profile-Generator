const Intern = require('../lib/Intern');

test('creates a new Intern object', () => {
    const intern = new Intern('Cassie', 3, 'cassieintern@hotmail.com', 'Berkeley');

    expect(intern.name).toBe('Cassie');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('cassieintern@hotmail.com');
    expect(intern.school).toBe('Berkeley');
});

test('gets interns school', () => {
    const intern = new Intern('Cassie', 3, 'cassieintern@hotmail.com', 'Berkeley');

    expect(intern.getSchool()).toBe('Berkeley'); 
});

test('gets interns role', () => {
    const intern = new Intern('Cassie', 3, 'cassieintern@hotmail.com', 'Berkeley');

    expect(intern.getRole()).toBe('Intern');
});