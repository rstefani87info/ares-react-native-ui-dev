import fs from 'fs';
import { exec } from 'child_process';

let args = process.argv.filter((arg) => arg.match(/--ares-\w+=.*/)).map((arg) => arg.replace('--ares-', '').split('='));
if (fs.existsSync('./.tmp/ares-rn-args.json')) fs.unlinkSync('./.tmp/ares-rn-args.json');
fs.writeFileSync('./.tmp/ares-rn-args.json', JSON.stringify(args));

exec('npx react-native start', { stdio: 'inherit' });

