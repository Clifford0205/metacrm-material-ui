import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';
import { isEmpty } from 'lodash-es';

const Button = ({ children, classes, ...otherProps }) => {
  return (
    <MuiButton classes={!isEmpty(classes)} {...otherProps}>
      children
    </MuiButton>
  );
};

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes: PropTypes.objectOf(PropTypes.shape({})),
};

Button.defaultProps = {
  children: null,
  classes: null,
};

export default Button;
