import { FaRegCircleXmark } from "react-icons/fa6";
import { facilitiesData, title } from "../Informations/KakaoMap_Information";
import { StyledDelete } from "../Styles/StyledDelete";
import { StyledMapAddress } from "../Styles/StyledMapAddress";
import { StyledMapContent } from "../Styles/StyledMapContent";
import { StyledMapFacilities } from "../Styles/StyledMapFacilities";
import { StyledMapTitle } from "../Styles/StyledMapTitle";
import { StyledWrap } from "../Styles/StyledMapWrap";

const Overlay = (props) => {
  return (
    <StyledWrap>
      <Title {...props} />
      <Content {...props} />
    </StyledWrap>
  );
};

const Title = (props) => {
  return (
    <StyledMapTitle>
      <div>
        <span>{title[props.id]}</span>
      </div>
      <StyledDelete
        onClick={() => {
          props.setIsOpen(false);
        }}
      >
        <FaRegCircleXmark className="delete" size={20} />
      </StyledDelete>
    </StyledMapTitle>
  );
};

const Content = (props) => {
  return (
    <StyledMapContent>
      <Address {...props} />
      <Facilities {...props} />
    </StyledMapContent>
  );
};

const Address = (props) => {
  return (
    <StyledMapAddress>
      <div onClick={console.log("click address")}>
        {`부산진구 엄광로 176 ${props.id + 1}번 건물`}
      </div>
    </StyledMapAddress>
  );
};

const Facilities = (props) => {
  const open = props.id;

  const data = facilitiesData[open].map((_data, index) => {
    if (index === 0) return _data;
    else return `, ${_data}`;
  });

  return (
    <>
      <div>편의시설</div>
      <StyledMapFacilities>{data}</StyledMapFacilities>
    </>
  );
};

export { Overlay };
