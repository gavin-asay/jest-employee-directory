const Employee = require('./Employee');

class Intern extends Employee {
	constructor({ employeeName, id, email, role, school }) {
		super({ employeeName, id, email, role });
		this.school = school;
	}

	getOfficeNumber() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

module.exports = Intern;
