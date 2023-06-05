import React from "react";
import PropTypes from "prop-types";

import { StyledSvgIcon } from "./SvgIcon.styles";

const SvgIcon = ({ children, classes, fontSize, viewBox, ...otherProps }) => (
  <StyledSvgIcon
    classes={classes}
    size={fontSize}
    fontSize={fontSize}
    viewBox={viewBox}
    {...otherProps}
  >
    {children}
  </StyledSvgIcon>
);

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component. <a>See CSS</a> API below for more details.
   */
  classes: PropTypes.shape({}),
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * 'inherit'| 'large'| 'medium'| 'small'| string
   * string type for Material v5.0 support
   */
  fontSize: PropTypes.string,
  // https://mui.com/material-ui/api/svg-icon/
  viewBox: PropTypes.string,
};

SvgIcon.defaultProps = {
  children: null,
  fontSize: "large",
  viewBox: "0 0 20 20",
};

export default SvgIcon;
