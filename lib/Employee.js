class Employee {
	constructor({ employeeName, id, email, role }) {
		this.employeeName = employeeName;
		this.id = parseInt(id);
		this.email = email;
		this.role = role;
	}

	getName() {
		return this.employeeName;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email();
	}

	getRole() {
		return 'Employee';
	}
}

module.exports = Employee;
