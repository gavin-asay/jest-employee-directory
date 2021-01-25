const fs = require('fs');

const writeHTML = data => {
	const employeeCards = data
		.map(employee => {
			// ...unique contains only one property regardless of subclass, but the rest notation allows us to destructure that property regardless of its name
			({ employeeName, id, email, role, ...unique } = employee);
			// declaring all of these lengthy template literal variables within the map method may be awkward, but it was a solution to writeHTML() throwing ReferenceErrors
			const cardTemplate = {
				Engineer: `
    <div class="card ${role}">
        <div class="card-header">
            <h2>${employeeName} <span>ID: ${id}</span></h2>
            <h3>${role}</h3>
        </div>
        <div class="card-body">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>GitHub Username:</strong> ${unique.github}</p>
        </div>
    </div>`,
				Intern: `
    <div class="card ${role}">
        <div class="card-header">
            <h2>${employeeName} <span>ID: ${id}</span></h2>
            <h3>${role}</h3>
        </div>
        <div class="card-body">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>School:</strong> ${unique.school}</p>
        </div>
    </div>`,
				Manager: `
    <div class="card ${role}">
        <div class="card-header">
            <h2>${employeeName} <span>ID: ${id}</span></h2>
            <h3>${role}</h3>
        </div>
        <div class="card-body">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Office Number:</strong> ${unique.office}</p>
        </div>
    </div>`,
			};
			return cardTemplate[role];
		})
		.join('\n');

	// CSS for HTML output is placed in the head, so we only need to write one new file
	const mainTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./style.css" rel="stylesheet">
    <title>Jest Employee Directory</title>
    <style>
html {
    background-color: #3ac0ff;
}

body {
    margin: 0;
}

header {
    background-color: #2482ad;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
}

h1 {
    line-height: 3;
}

main {
    display: flex;
    max-width: 1200px;
    height: 100%;
    justify-content: center;
}

.card {
    border-radius: 15px;
    background-color: rgba(255,255,255,0.6);
    min-width: 235px;
    width: max-content;
    margin: 10px;
}

.card-header {
    background-color: rgba(255,255,255,0.6);
    padding: 2px 10px;
    border-radius: 15px;
}

.card-header span {
    font-size: 0.5em;
    margin-left: 30px;
}

.card-body {
    padding: 10px;
}

.card-body ul {
    padding-left: 0;
}

p {
    margin: 4px;
}
</style>
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
