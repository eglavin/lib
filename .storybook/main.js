module.exports = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],

	docs: {
		autodocs: true,
	},
	framework: {
		name: "@storybook/react-webpack5",
		options: {
			fastRefresh: true,
		},
	},
};
