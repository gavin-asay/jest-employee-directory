class Employee {
	constructor(employeeName) {
		this.employeeName = 'Hank Hill';
		this.id = 9;
		this.email = 'propane_accessories@strickland.com';
	}

	getName() {
		return this.employeeName;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return 'Employee';
	}
}

module.exports = Employee;
