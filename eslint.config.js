import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser, // Handles <script lang="ts">
				ecmaVersion: 2021,
				sourceType: 'module',
				extraFileExtensions: ['.vue'],
				project: './tsconfig.app.json',
			},
		},
		plugins: {
			vue,
			'@typescript-eslint': tsPlugin,
			prettier: eslintPluginPrettier, // 👈 Added Prettier plugin
		},
		rules: {
			'vue/no-unused-vars': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'prettier/prettier': 'error', // 👈 Prettier as an ESLint rule
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
				project: './tsconfig.app.json',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			prettier: eslintPluginPrettier, // 👈 Prettier plugin for TS
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'error',
			'prettier/prettier': 'error', // 👈 Prettier as an ESLint rule
		},
	},
	{
		files: ['vite.config.ts', 'scripts/**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
				project: './tsconfig.node.json',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			prettier: eslintPluginPrettier, // 👈 Prettier for Node scripts
		},
		rules: {
			'@typescript-eslint/no-var-requires': 'off',
			'prettier/prettier': 'error', // 👈 Prettier as an ESLint rule
		},
	},
	prettier,
];
