import { StyledItem } from "../Styles/StyledItem";
import { StyledInput } from "../Styles/StyledInput";
import { useState } from "react";

const ItemInput = (props) => {
  const [content, setContent] = useState("");
  return (
    <StyledItem>
      <StyledInput
        type="text"
        placeholder="할 일"
        onChange={(event) => {
          setContent(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            if (event.target.value === "") {
              alert("할 일을 입력해주세요.");
            }
            else {
              props.createTodo(content);
              event.target.value = "";
            }
          }
        }}
      />
    </StyledItem>
  );
};

export { ItemInput };
