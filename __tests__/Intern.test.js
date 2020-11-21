const Intern = require('../lib/Intern');

test('creates a new Intern object', () => {
    const intern = new Intern('Bridgett', 2, 'bridgelover@hotmail.com', 'bridgelover');

    expect(engineer.name).toBe('Bridgett');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('bridgelover@hotmail.com');
    expect(engineer.github).toBe('bridgelover');
});