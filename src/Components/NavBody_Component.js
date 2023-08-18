import { StyledNavOl } from "../Styles/StyledNavOl";
import { StyledNavLi } from "../Styles/StyledNavLi";

const NavBody = (props) => {
  const item = ["Todo", "School Map", "Class"];
  const link = ["/todo", "/map", "/class"];
  const lis = item.map((_item, index) => {
    return <StyledNavLi id={index}><a href={link[index]}>{_item}</a></StyledNavLi>;
  });
  return <StyledNavOl>{lis}</StyledNavOl>;
};

export { NavBody };
