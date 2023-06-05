import { toNumber } from "lodash-es";

import SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/material/styles";

import isStyledPropsValid from "@/utils/isStyledPropsValid";

const StyledSvgIcon = styled(SvgIcon, {
  shouldForwardProp: isStyledPropsValid,
})(({ size }) => {
  const sizeToNumber = toNumber(size);
  const isNumber = sizeToNumber > 0;
  const fontSizeValue = isNumber ? `${sizeToNumber}px` : size;

  return {
    ...(isNumber && {
      fontSize: fontSizeValue,
    }),
  };
});

export { StyledSvgIcon };

export default StyledSvgIcon;
