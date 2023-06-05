import blackListProps from '../constants/blackListProps';

const isStyledPropsValid = (props) => !blackListProps[props];

export default isStyledPropsValid;
