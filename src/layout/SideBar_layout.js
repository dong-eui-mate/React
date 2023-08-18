import { StyledSideBar } from "../Styles/StyledSideBar";
import { Nav } from "../Components/Nav_Component";
import { StyledBlank } from "../Styles/StyledBlank";

const SideBar = () => {
  return (
    <StyledSideBar>
      <Nav />
      <StyledBlank />
    </StyledSideBar>
  );
};

export { SideBar };
