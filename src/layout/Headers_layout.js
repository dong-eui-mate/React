import { Title } from "../Components/Title_Component";
import { StyledHeader } from "../Styles/StyledHeader";

const Header = (props) => {
  return (
    <StyledHeader>
      <Title Title={props.Title}/>
    </StyledHeader>
  );
};

export { Header };
