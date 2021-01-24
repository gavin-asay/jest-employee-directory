const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
jest.mock('../lib/Manager');

test('creates a new manager object', () => {
	const employee = new Manager();

	expect(employee.employeeName).toEqual(expect.any(String));
	expect(employee.id).toBeGreaterThan(0);
	expect(employee.email).toEqual(expect.stringContaining('@')); // crude email address validation at best
	expect(employee.office).toBeGreaterThan(0);
});

test('gets employee name', () => {
	const employee = new Manager();

	expect(employee.getName()).toBe(employee.employeeName);
});

test('gets employee id', () => {
	const employee = new Manager();

	expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
	const employee = new Manager();

	expect(employee.getEmail()).toEqual(employee.email);
});

test('gets employee role', () => {
	const employee = new Manager();

	expect(employee.getRole()).toEqual('Manager');
});

test('gets employee github', () => {
	const employee = new Manager();

	expect(employee.getOfficeNumber()).toBeGreaterThan(0);
});
