import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';
import { isEmpty } from 'lodash-es';

function Button({ children, classes, ...otherProps }) {
	return (
		<MuiButton classes={classes} {...otherProps}>
			{children}
		</MuiButton>
	);
}

Button.propTypes = {
	/**
	 * The content of the button.
	 */
	children: PropTypes.node,
	/**
	 * Override or extend the styles applied to the component. See CSS API below for more details.
	 */
	classes: PropTypes.objectOf(PropTypes.shape({})),
	/**
	 * The color of the component. It supports those theme colors that make sense for this component.
	 */
	color: PropTypes.oneOf([
		'inherit',
		'primary',
		'secondary',
		'success',
		'error',
		'info',
		'warning',
	]),
	/**
	 * The variant to use.
	 */
	variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
	/**
	 * If true, the button will be disabled.
	 */
	disabled: PropTypes.bool,
	/**
	 * If true, the keyboard focus ripple will be disabled.
	 */
	disableFocusRipple: PropTypes.bool,
	/**
	 * If true, the ripple effect will be disabled.
	 * ⚠️ Without a ripple there is no styling for :focus-visible by default.
	 * Be sure to highlight the element by applying separate styles with the focusVisibleClassName.
	 */
	disableRipple: PropTypes.bool,
	/**
	 * onClickEvent
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	children: null,
	classes: null,
	color: 'primary',
	variant: 'contained',
	disabled: false,
	disableFocusRipple: true,
	disableRipple: true,
	onClick: () => {},
};

export default Button;
