const os = require('os');
const { execSync } = require('child_process');
const currentOS = os.type();
if(currentOS === 'Linux') {
	var myArgs = process.argv.slice(2);
	console.log('myArgs: ', myArgs);

	if(myArgs !== undefined) {
		const output = execSync(`git add ./ && git commit ${myArgs[0]} && git push ./`, { encoding: 'utf-8' });
		console.log(output);
	}
	else {
		const output = execSync(`git add ./ && git commit -m \"Updated about me\" && git push ./`, { encoding: 'utf-8' });
		console.log(output);
	}
} else if(currentOS === 'Windows_NT') {
	const output = execSync('cd C:\\Users\\kami\\Documents\\Github\\About-Kami\\src\\scripts && ./scripts.bat', { encoding: 'utf-8' });
	console.log(output);
} else {
	console.log("OS not found.");
}