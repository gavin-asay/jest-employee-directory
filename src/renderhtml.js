const fs = require('fs');

const writeHTML = data => {
	const employeeCards = data
		.map(employee => {
			({ employeeName, id, email, role, ...unique } = employee);
			const cardTemplate = {
				Engineer: `
    <div class="card ${role}">
        <div class="card-header">
            <h2>${employeeName} <span>ID: ${id}</span></h2>
            <h3>${role}</h3>
        </div>
        <div class="card-body">
            <ul>
                <li>Email: ${email}</li>
                <li>GitHub Username: ${unique.github}</li>
            </ul>
        </div>
    </div>`,
				Intern: `
    <div class="card ${role}">
        <div class="card-header">
            <h2>${employeeName} <span>ID: ${id}</span></h2>
            <h3>${role}</h3>
        </div>
        <div class="card-body">
            <ul>
                <li>Email: ${email}</li>
                <li>School: ${unique.school}</li>
            </ul>
        </div>
    </div>`,
				Manager: `
    <div class="card ${role}">
        <div class="card-header">
            <h2>${employeeName} <span>ID: ${id}</span></h2>
            <h3>${role}</h3>
        </div>
        <div class="card-body">
            <ul>
                <li>Email: ${email}</li>
                <li>Office Number: ${unique.office}</li>
            </ul>
        </div>
    </div>`,
			};
			return cardTemplate[role];
		})
		.join('\n');

	const mainTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./style.css" rel="stylesheet">
    <title>Jest Employee Directory</title>
</head>
<body>
    <header>
        <h1>Jest Employee Directory</h1>
    </header>
    <main>
        ${employeeCards}
    </main>
</body>
</html>`;

	fs.writeFile('./dist/index.html', mainTemplate, err => {
		if (err) throw err;
		console.log('Employee directory created successfully!');
	});
};

module.exports = writeHTML;
