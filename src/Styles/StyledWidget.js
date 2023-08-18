import styled from "styled-components";

const StyledWidget = styled.div`
  width: 350px;
  height: ${(props) => props.height};
  background-color: #f5f5f5;

  border: 1px solid gray;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  padding: 15px;
  margin-bottom: 15px;
`;

export { StyledWidget };
