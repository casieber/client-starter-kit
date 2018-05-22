const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const actions = [
	{
		name: 'Deleting old .git directory',
		action: () => rimraf(path.join(__dirname, '.git'))
	},
	{
		name: 'Initializing new git repo',
		action: () => childProcess.execSync('git init', { stdio: [0, 1, 2] })
	},
	{
		name: 'Installing packages',
		action: () => childProcess.execSync('yarn', { stdio: [0, 1, 2] })
	},
	{
		name: 'Deleting init.js file',
		action: () => fs.unlinkSync(path.join(__dirname, 'init.js'))
	}
];


console.log('Initializing starter kit\n');

actions.forEach(({ name, action }, i) => {
	console.log(`Step ${i}: ${name}...`);
	action();
	console.log('Done.\n');
});

console.log('Initialization completed. Use "npm start" to run.\n');

function rimraf(dirPath) {
	if (fs.existsSync(dirPath)) {
		fs.readdirSync(dirPath).forEach(entry => {
			const itemPath = path.join(dirPath, entry);
			if (fs.lstatSync(itemPath).isDirectory()) {
				rimraf(itemPath);
			} else {
				fs.unlinkSync(itemPath);
			}
		});
		fs.rmdirSync(dirPath);
	}
}