module.exports = {
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'airbnb',
		'prettier',
		'plugin:import/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'eslint-plugin-import', 'prettier'],
	rules: {
		'prettier/prettier': 'warn',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-props-no-spreading': 'off',
		'react/destructuring-assignment': 'off',
		'no-unused-vars': 'warn',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
	},
	settings: {
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				alias: {
					'@': './src',
					'@tests': './tests',
				},
				extensions: ['.ts', '.js', '.jsx', '.json'],
			},
		},
	},
};
