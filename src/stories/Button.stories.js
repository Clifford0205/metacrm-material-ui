import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '@/components/Button';

export default {
	title: 'Example/Button',
	component: Button,
};

function Template(args) {
	return <Button {...args}>{args.children}</Button>;
}

export const solidButton = Template.bind({});

solidButton.args = {
	children: 'Solid',
	variant: 'contained',
	color: 'primary',
	disableElevation: true,
	disableRipple: true,
	onClick: action('Button Clicked'),
};
