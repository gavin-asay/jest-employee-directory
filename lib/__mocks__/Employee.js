// mocking classes rather than traditional constructor functions proved to be tricky and basically entailed duplicating the class altogether
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
