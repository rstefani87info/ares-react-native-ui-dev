import { getFileContent, setFileContent, getFile } from '@ares/files';

try {
  const projectRoot = process.cwd();
  const packageJsonPath = getFile(projectRoot, 'package.json');

  const packageJsonContent = getFileContent(packageJsonPath);
  if (!packageJsonContent) throw new Error('package.json content could not be retrieved.');

  const packageJson = JSON.parse(packageJsonContent);

  packageJson.scripts = {
    ...packageJson.scripts,
    start: 'node node_modules/@ares/react-native-ui-dev/start.js'
  };

  setFileContent(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Script "start" successfully updated in package.json');

} catch (error) {
  console.error('Error updating package.json:', error.message);
}

