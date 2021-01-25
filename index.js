const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const renderHTML = require('./src/renderhtml');
let employeeList = [];

const addEmployee = function () {
	console.log('Welcome to the Jest Employee Directory!');
	return inquirer
		.prompt([
			{
				type: 'list',
				name: 'role',
				message: "Select the new employee's role.",
				choices: ['Engineer', 'Intern', 'Manager'],
			},
			{
				type: 'input',
				name: 'employeeName',
				message: "Enter the employee's name.",
				validate: nameInput => {
					if (nameInput) return true;
					else {
						console.log("Please enter the employee's name.");
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'id',
				message:
					'Enter employee ID. Must be number greater than 0. Default is number of employees previously created plus one.',
				default: employeeList.length + 1,
				validate: idInput => {
					if (typeof parseInt(idInput) === 'number' && parseInt(idInput) > 0)
						return true;
					else {
						console.log('Please enter a number greater than zero.');
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'email',
				message: "Enter employee's email address.",
				validate: emailInput => {
					if (emailInput && emailInput.includes('@')) return true;
					else {
						console.log('Please enter a valid email address.');
						return false;
					}
				},
			},
			{
				type: 'input',
				name: 'office',
				message:
					"Enter manager's office number. Must be a number greater than 0.",
				validate: idInput => {
					if (typeof parseInt(idInput) === 'number' && parseInt(idInput) > 0)
						return true;
					else {
						console.log('Please enter a number greater than zero.');
						return false;
					}
				},
				// when methods prompt one unique question per class type
				when: ({ role }) => {
					if (role === 'Manager') return true;
					else return false;
				},
			},
			{
				type: 'input',
				name: 'github',
				message: "Enter engineer's GitHub username.",
				validate: githubInput => {
					if (githubInput) return true;
					else {
						console.log("Please enter the engineer's GitHub username.");
						return false;
					}
				},
				when: ({ role }) => {
					if (role === 'Engineer') return true;
					else return false;
				},
			},
			{
				type: 'input',
				name: 'school',
				message: "Enter intern's school name.",
				validate: schoolInput => {
					if (schoolInput) return true;
					else {
						console.log("Please enter the intern's school name.");
						return false;
					}
				},
				when: ({ role }) => {
					if (role === 'Intern') return true;
					else return false;
				},
			},
		])
		.then(data => {
			switch (data.role) {
				case 'Engineer':
					employeeList.push(new Engineer(data));
					break;
				case 'Manager':
					employeeList.push(new Manager(data));
					break;
				case 'Intern':
					employeeList.push(new Intern(data));
					break;
			}
			console.log(`New ${data.role} created.`);

			return inquirer.prompt([
				{
					type: 'confirm',
					name: 'confirmAdd',
					message: 'Would you like to add another employee?',
					default: true,
				},
			]);
		})
		.then(({ confirmAdd }) => {
			if (confirmAdd) return addEmployee();
			else {
				renderHTML(employeeList);
			}
		})
		.catch(err => console.log(err));
};

addEmployee();
