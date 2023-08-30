/**
 * {@link https://eslint.org/docs/user-guide Eslint User Guide}
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
	settings: {
		react: {
			pragma: "React",
			version: "detect",
		},
		"import/ignore": ["node_modules", /\.json$/, /\.css$/],
		"import/resolver": {
			node: {
				paths: ["src"],
			},
		},
	},

	ignorePatterns: ["/dist", "/node_modules", "*.test.*.snap", "*.css"],

	plugins: ["react", "jsx-a11y", "prettier", "@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:storybook/recommended",
	],

	/**
	 * https://eslint.org/docs/user-guide/configuring/rules#configuring-rules
	 *
	 * "off" or 0 - turn the rule off
	 * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
	 * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
	 */
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"@typescript-eslint/no-empty-function": 1,
		"@typescript-eslint/no-unused-vars": 0,
		"no-console": 0,
		"no-constant-condition": 1,
		"no-empty-function": 1,
		"no-unused-vars": 0,
		"prettier/prettier": [1, { endOfLine: "auto" }],
		"react/display-name": 0,
		"react/jsx-uses-react": 0,
		"react/react-in-jsx-scope": 0,
	},

	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": 1,
				"@typescript-eslint/no-empty-interface": 0,
				"@typescript-eslint/no-explicit-any": 1,
				"@typescript-eslint/no-non-null-assertion": 0,
				"@typescript-eslint/no-unused-vars": [
					1,
					{ ignoreRestSiblings: true, argsIgnorePattern: "^_" },
				],
			},
		},
		{
			files: ["**/*.js", "**/*.jsx"],
			rules: {
				"no-unused-vars": [1, { ignoreRestSiblings: true, argsIgnorePattern: "^_" }],
			},
		},
		{
			files: ["**/*.stories.*"],
			rules: {
				"import/no-anonymous-default-export": 0,
			},
		},
	],
};
