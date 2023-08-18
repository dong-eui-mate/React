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
        onClick={(event) => {
          event.stopPropagation();
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
  const myAddress = `부산진구 엄광로 176 ${props.id + 1}번 건물`;

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(myAddress);
      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  return (
    <StyledMapAddress>
      <div
        onClick={(event) => {
          event.stopPropagation();
          handleCopyClipBoard();
        }}
      >
        {myAddress}
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
