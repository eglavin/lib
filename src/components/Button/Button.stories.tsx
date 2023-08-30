import { Button, ButtonProps } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		label: "Button Text",
	},
	render: ({ ref, ...props }: ButtonProps) => <Button {...props} />,
};
