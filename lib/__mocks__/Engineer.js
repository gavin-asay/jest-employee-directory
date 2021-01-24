const Employee = require('./Employee');

class Engineer extends Employee {
	constructor() {
		super();
		this.github = 'hankPropane';
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer;
