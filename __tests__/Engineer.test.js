const Engineer = require('../lib/Engineer');

test('creates a new Engineer object', () => {
    const engineer = new Engineer('Bridgett', 2, 'bridgelover@hotmail.com', 'bridgelover');

    expect(engineer.name).toBe('Bridgett');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('bridgelover@hotmail.com');
    expect(engineer.github).toBe('bridgelover');
});