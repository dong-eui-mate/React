import { StyledCell } from "../Styles/StyledCell";

const TableCell = (props) => {
  return <StyledCell color={props.color}>{props.text}</StyledCell>;
};

export { TableCell };
