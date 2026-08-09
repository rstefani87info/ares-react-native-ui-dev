import fs from 'fs';
import { spawn } from 'child_process';

let args = process.argv
  .filter(arg => arg.match(/--ares-\w+=.*/))
  .map(arg => arg.replace('--ares-', '').split('='));

if (fs.existsSync('./.tmp/ares-rn-args.json')) {
  fs.unlinkSync('./.tmp/ares-rn-args.json');
}
fs.writeFileSync('./.tmp/ares-rn-args.json', JSON.stringify(args));

const child = spawn('npx', ['react-native', 'start'], {
  stdio: 'inherit',
  shell: true,
});

child.on('close', code => {
  process.exit(code ?? 0);
});