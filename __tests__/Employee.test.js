const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a new Employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@hotmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dave@hotmail.com');
});

test('gets Employees name', () => {
    const employee = new Employee('Dave', 1, 'dave@hotmail.com');
    expect(employee.getName()).toBe('Dave');
});

test('gets Employees role', () => {
    const employee = new Employee('Dave', 1, 'dave@hotmail.com');
    expect(employee.getRole()).toBe('Employee');
});