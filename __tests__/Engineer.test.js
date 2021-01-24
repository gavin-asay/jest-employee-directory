const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer');

test('creates a new engineer object', () => {
	const employee = new Engineer();

	expect(employee.employeeName).toEqual(expect.any(String));
	expect(employee.id).toBeGreaterThan(0);
	expect(employee.email).toEqual(expect.stringContaining('@')); // crude email address validation at best
	expect(employee.github).toEqual(expect.any(String));
});

test('gets employee name', () => {
	const employee = new Engineer();

	expect(employee.getName()).toBe(employee.employeeName);
});

test('gets employee id', () => {
	const employee = new Engineer();

	expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
	const employee = new Engineer();

	expect(employee.getEmail()).toEqual(employee.email);
});

test('gets employee role', () => {
	const employee = new Engineer();

	expect(employee.getRole()).toEqual('Engineer');
});

test('gets employee github', () => {
	const employee = new Engineer();

	expect(employee.getGithub()).toEqual(expect.any(String));
});
