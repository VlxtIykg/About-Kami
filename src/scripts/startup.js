const os = require('os');
const { execSync } = require('child_process');
const currentOS = os.type();
if(currentOS === 'Linux') {
	var myArgs = process.argv.slice(2);
	console.log('myArgs: ', myArgs);

	const output = execSync(`cd /home/kami/Documents/github/About-Kami/src/scripts && ./scripts.sh + ${myArgs}`, { encoding: 'utf-8' });
	console.log(output);
} else if(currentOS === 'Windows_NT') {
	const output = execSync('cd C:\\Users\\kami\\Documents\\Github\\About-Kami\\src\\scripts && ./scripts.bat', { encoding: 'utf-8' });
	console.log(output);
} else {
	console.log("OS not found.");
}