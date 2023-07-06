module.exports = {
	root: true,
	// This tells ESLint to load the config from the package `ui-eslint-config`
	extends: ["ecma"],
	settings: {
		next: {
			rootDir: ["apps/*/"],
		},
	},
};
