const Manager = require('../lib/Manager');

test('creates a new Manager object', () => {
    const manager = new Manager('Karen', 4, 'exec@hotmail.com', 4);

    expect(manager.name).toBe('Karen');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('exec@hotmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets Managers role', () => {
    const manager = new Manager('Karen', 4, 'exec@hotmail.com', 4);

    expect(manager.getRole()).toBe('Manager');
});