const Employee = require('./Employee');

class Intern extends Employee {
	constructor() {
		super();
		this.school = 'University';
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

module.exports = Intern;
