import { Widget } from "../Components/Widget_Component";
import { Footer } from "../layout/Footer_layout";
import { Header } from "../layout/Headers_layout";
import { Nav } from "../layout/Nav_layout";
import { StyledBody } from "../Styles/StyledBody";

const Main = () => {
  return (
    <>
      <Header Title="Main Page" />
      <Nav />
      <StyledBody>
        <Widget />
      </StyledBody>
      <Footer />
    </>
  );
};

export { Main };
