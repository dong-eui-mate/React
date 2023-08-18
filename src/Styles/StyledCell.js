import styled from "styled-components";

const StyledCell = styled.div`
  width: 55px;
  height: 30px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  border: 1px solid gray;

  background-color: ${(props) => props.color || "none"};
`;

export { StyledCell };
