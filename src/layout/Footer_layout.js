import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterColumn>
        <FooterTitle>팀 이름</FooterTitle>
        <FooterBody>team DoD</FooterBody>
        <FooterTitle>서비스 명</FooterTitle>
        <FooterBody>Deu-mate</FooterBody>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>팀원</FooterTitle>
        <FooterBody>김경훈</FooterBody>
        <FooterBody>김동건</FooterBody>
        <FooterBody>이승훈</FooterBody>
        <FooterBody>임도훈</FooterBody>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Infomation</FooterTitle>
        <a href="https://github.com/dong-eui-mate">
          <FooterBody>GitHub Link</FooterBody>
        </a>
        <a href="">
          <FooterBody>App Download Link</FooterBody>
        </a>
        <FooterBody>
          <div>부산진구 엄광로 176</div>
          <div>동의대학교 산학관 412호</div>
        </FooterBody>
      </FooterColumn>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  padding: 10px 0;
  border-top: 1px solid gray;
  width: 350px;
  justify-content: center;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  margin: 5px 20px;
`;
const FooterTitle = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

const FooterBody = styled.div`
  font-size: 15px;
  margin-bottom: 7px;
`;

export { Footer };
