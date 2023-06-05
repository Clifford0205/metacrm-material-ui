import React from "react";
import PropTypes from "prop-types";

import { CIRCLE_ICON_PADDINGS } from "./constants";

const CircleIcon = (props) => {
  const { padding, color, backgroundColor, hasShadow, children, className } =
    props;

  return (
    <div
      className={className}
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      hasShadow={hasShadow}
    >
      {children}
    </div>
  );
};

CircleIcon.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.oneOf(CIRCLE_ICON_PADDINGS),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hasShadow: PropTypes.bool,
  className: PropTypes.string,
};

CircleIcon.defaultProps = {
  children: null,
  padding: "",
  color: "",
  backgroundColor: "",
  hasShadow: "",
  className: "",
};

export default CircleIcon;
