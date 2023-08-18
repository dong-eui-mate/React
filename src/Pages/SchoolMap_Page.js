import { KakaoMap } from "../Components/KakaoMap_Component";
import { Footer } from "../layout/Footer_layout";
import { Header } from "../layout/Headers_layout";
import { Nav } from "../layout/Nav_layout";
import { StyledBody } from "../Styles/StyledBody";

const SchoolMap = () => {
  return (
    <>
      <Header Title="School Map" />
      <Nav />
      <StyledBody>
        <KakaoMap />
      </StyledBody>
      <Footer />
    </>
  );
};

export { SchoolMap };
