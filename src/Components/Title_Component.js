import { StyledTitle } from "../Styles/StyledTitle";

const Title = (props) => {
  return <a href="/"><StyledTitle>{props.Title}</StyledTitle></a>;
};

export { Title };
