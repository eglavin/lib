import React from "react";
import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
	title: "components/Button",
	component: Button,
};

const Template: Story<ButtonProps> = (args: Omit<ButtonProps, "ref">) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: "Button",
};
