const Employee = require('./Employee');

class Manager extends Employee {
	constructor({ employeeName, id, email, office }) {
		super({ employeeName, id, email });
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
