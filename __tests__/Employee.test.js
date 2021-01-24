// const { test, expect, jest } = require('@jest/globals');
const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

test('creates a new employee object', () => {
	const employee = new Employee();

	expect(employee.employeeName).toEqual(expect.any(String));
	expect(employee.id).toBeGreaterThan(0);
	expect(employee.email).toEqual(expect.stringContaining('@')); // crude email address validation at best
});

test('gets employee name', () => {
	const employee = new Employee();

	expect(employee.getName()).toBe(employee.employeeName);
});

test('gets employee id', () => {
	const employee = new Employee();

	expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
	const employee = new Employee();

	expect(employee.getEmail()).toEqual(employee.email);
});

test('gets employee role', () => {
	const employee = new Employee();

	expect(employee.getRole()).toEqual('Employee');
});
