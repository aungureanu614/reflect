import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react/configs/recommended.js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended, // Basic ESLint recommended rules
  ts.configs.recommended, // TypeScript recommended rules
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'], // Apply to JS/TS and JSX files
    languageOptions: {
      parser: ts.parser, // Use TypeScript parser for all applicable files
      parserOptions: {
        project: './tsconfig.json', // Required for some TypeScript rules
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // Browser environment globals
        ...globals.node, // Node.js environment globals
      },
    },
    plugins: {
      react: react.plugins.react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // General ESLint rules
      'no-unused-vars': 'warn',
      'no-undef': 'warn',

      // TypeScript rules
      '@typescript-eslint/no-require-imports': 0,

      // React-specific rules
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX transform
      'react/prop-types': 'off', // Turn off if using TypeScript for prop validation

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // JSX Accessibility rules
      'jsx-a11y/anchor-is-valid': 'warn',
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  }
);
