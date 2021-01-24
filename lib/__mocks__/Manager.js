const Employee = require('./Employee');

class Manager extends Employee {
	constructor() {
		super();
		this.office = 1;
	}

	getOfficeNumber() {
		return this.office;
	}

	getRole() {
		return 'Manager';
	}
}

module.exports = Manager;
