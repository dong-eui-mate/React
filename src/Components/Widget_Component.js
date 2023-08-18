import { StyledWidget } from "../Styles/StyledWidget";
import { Table } from "./Table_Component";
import { Weather } from "./Weather_Component";

const Widget = () => {
  return (
    <>
      <StyledWidget height={"200px"}>
        <Weather />
      </StyledWidget>
      <StyledWidget height={"300px"}>
        <Table />
      </StyledWidget>
    </>
  );
};

export { Widget };
