const Employee = require('./Employee');

class Manager extends Employee {
	constructor({ employeeName, id, email, role, office }) {
		super({ employeeName, id, email, role });
		this.office = office;
	}

	getOfficeNumber() {
		return this.office;
	}

	getRole() {
		return 'Manager';
	}
}

module.exports = Manager;
