const Employee = require('./Employee');

class Engineer extends Employee {
	constructor({ employeeName, id, email, role, github }) {
		super({ employeeName, id, email, role });
		this.github = github;
	}

	getGithub() {
		return this.github;
	}
	// overriding the getRole() method is a simple matter of redeclaring the method in the subclass
	getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer;
