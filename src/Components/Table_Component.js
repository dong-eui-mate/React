import { StyledRow } from "../Styles/StyledRow";
import { StyledTable } from "../Styles/StyledTable";
import { TableCell } from "./TableCell_Component";

const Table = () => {
  return (
    <StyledTable>
      <StyledRow>
        <TableCell text="" />
        <TableCell text="월" />
        <TableCell text="화" />
        <TableCell text="수" />
        <TableCell text="목" />
        <TableCell text="금" />
      </StyledRow>
      <StyledRow>
        <TableCell text="9" />
        <TableCell text="철학의향기와 역사이야기" color={"#FF7F7F"} />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="확률과통계" color={"#BAE7AF"} />
      </StyledRow>
      <StyledRow>
        <TableCell text="10" />
        <TableCell text="철학의향기와 역사이야기" color={"#FF7F7F"} />
        <TableCell text="철학의향기와 역사이야기" color={"#FF7F7F"} />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="확률과통계" color={"#BAE7AF"} />
      </StyledRow>
      <StyledRow>
        <TableCell text="11" />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="확률과통계" color={"#BAE7AF"} />
      </StyledRow>
      <StyledRow>
        <TableCell text="12" />
        <TableCell text="" />
        <TableCell text="알고리즘" color={"#FFF77F"} />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="" />
      </StyledRow>
      <StyledRow>
        <TableCell text="13" />
        <TableCell text="그래픽스2" color={"#CB9FFD"} />
        <TableCell text="데이터베이스" color={"#FDC4F8"} />
        <TableCell text="" />
        <TableCell text="알고리즘" color={"#FFF77F"} />
        <TableCell text="캡스톤디자인" color={"#F3CDA0"} />
      </StyledRow>
      <StyledRow>
        <TableCell text="14" />
        <TableCell text="그래픽스2" color={"#CB9FFD"} />
        <TableCell text="데이터베이스" color={"#FDC4F8"} />
        <TableCell text="데이터베이스" color={"#FDC4F8"} />
        <TableCell text="알고리즘" color={"#FFF77F"} />
        <TableCell text="캡스톤디자인" color={"#F3CDA0"} />
      </StyledRow>
      <StyledRow>
        <TableCell text="15" />
        <TableCell text="" />
        <TableCell text="지교세" color={"#A9E1ED"} />
        <TableCell text="그래픽스2" color={"#CB9FFD"} />
        <TableCell text="" />
        <TableCell text="캡스톤디자인" color={"#F3CDA0"} />
      </StyledRow>
      <StyledRow>
        <TableCell text="16" />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="" />
        <TableCell text="" />
      </StyledRow>
    </StyledTable>
  );
};

export { Table };
