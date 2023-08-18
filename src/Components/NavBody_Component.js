import { StyledNavOl } from "../Styles/StyledNavOl";
import { StyledNavLi } from "../Styles/StyledNavLi";

const NavBody = (props) => {
  const item = ["Todo", "Home", "School Map"];
  const link = ["/todo", "/", "/map"];
  const lis = item.map((_item, index) => {
    return (
      <StyledNavLi id={index}>
        <a href={link[index]}>{_item}</a>
      </StyledNavLi>
    );
  });
  return <StyledNavOl>{lis}</StyledNavOl>;
};

export { NavBody };
