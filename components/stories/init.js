import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

/**
 * Initialize Storybook in the project directory
 * Equivalent to running 'storybook init' but customized for this project
 */
export function initStorybook(projectDir = process.cwd()) {
  console.log('Initializing Storybook...');
  
  // Check if Storybook is already initialized
  if (fs.existsSync(path.join(projectDir, '.storybook'))) {
    console.log('Storybook is already initialized in this directory.');
    return;
  }

  try {
    // Create .storybook directory if it doesn't exist
    const storybookDir = path.join(projectDir, '.storybook');
    if (!fs.existsSync(storybookDir)) {
      fs.mkdirSync(storybookDir, { recursive: true });
    }

    // Create main.js file
    const mainJsContent = `
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
`;
    fs.writeFileSync(path.join(storybookDir, 'main.js'), mainJsContent);

    // Create preview.js file
    const previewJsContent = `
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
`;
    fs.writeFileSync(path.join(storybookDir, 'preview.js'), previewJsContent);

    // Create a directory for example stories
    const storiesDir = path.join(projectDir, 'components', 'stories');
    if (!fs.existsSync(storiesDir)) {
      fs.mkdirSync(storiesDir, { recursive: true });
    }

    // Create an example story
    const exampleStoryContent = `
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExampleComponent = ({ text, backgroundColor }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default {
  title: 'Example/Component',
  component: ExampleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Basic = {
  args: {
    text: 'Hello Storybook',
    backgroundColor: '#f5f5f5',
  },
};
`;
    fs.writeFileSync(path.join(storiesDir, 'Example.stories.js'), exampleStoryContent);

    // Add scripts to package.json
    const packageJsonPath = path.join(projectDir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }
    
    packageJson.scripts.storybook = 'storybook dev -p 6006';
    packageJson.scripts['build-storybook'] = 'storybook build';
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Install required dependencies if not already present
    const requiredDeps = [
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@storybook/addon-links',
      '@storybook/addon-onboarding',
      '@storybook/blocks',
      '@storybook/react-webpack5',
      '@storybook/testing-library',
      'storybook'
    ];

    console.log('Installing required dependencies...');
    execSync(`npm install --save-dev ${requiredDeps.join(' ')}`, { stdio: 'inherit', cwd: projectDir });

    console.log('Storybook has been successfully initialized!');
    console.log('You can start Storybook with: npm run storybook');
  } catch (error) {
    console.error('Error during Storybook initialization:', error);
    throw error;
  }
}

// If the file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initStorybook();
}