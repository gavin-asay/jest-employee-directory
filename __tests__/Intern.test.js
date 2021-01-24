const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');

test('creates a new Intern object', () => {
	const employee = new Intern();

	expect(employee.employeeName).toEqual(expect.any(String));
	expect(employee.id).toBeGreaterThan(0);
	expect(employee.email).toEqual(expect.stringContaining('@')); // crude email address validation at best
	expect(employee.school).toEqual(expect.any(String));
});

test('gets employee name', () => {
	const employee = new Intern();

	expect(employee.getName()).toBe(employee.employeeName);
});

test('gets employee id', () => {
	const employee = new Intern();

	expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
	const employee = new Intern();

	expect(employee.getEmail()).toEqual(employee.email);
});

test('gets employee role', () => {
	const employee = new Intern();

	expect(employee.getRole()).toEqual('Intern');
});

test('gets employee school', () => {
	const employee = new Intern();

	expect(employee.getSchool()).toEqual(expect.any(String));
});
