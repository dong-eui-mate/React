import { useState, useEffect, useRef } from "react";
import { ItemList } from "../Components/ItemList_Component";
import { ItemInput } from "../Components/ItemInput_Component";
import { Header } from "../layout/Headers_layout";
import { Footer } from "../layout/Footer_layout";
import { Nav } from "../layout/Nav_layout";
import { StyledBody } from "../Styles/StyledBody";

const Todo = () => {
  // 1. 로컬스토리지로 데이터 유지할 예정
  // 2. 이후 Firebase로 사용자 데이터 저장 예정
  const [contents, setContents] = useState("");
  const [nextId, setNextId] = useState(0);

  const isMounted = useRef(false);

  useEffect(() => {
    // 최초 실행
    if (!isMounted.current) {
      isMounted.current = true;

      const lastData = localStorage.getItem("todoList");
      const lastId = localStorage.getItem("nextId");

      if (lastData && lastId) {
        setContents(JSON.parse(lastData));
        setNextId(Number(lastId));
      }
    }
    localStorage.setItem("todoList", JSON.stringify(contents));
    localStorage.setItem("nextId", nextId);
  }, [contents, nextId]);

  // console.log(JSON.parse(lastData));
  // console.log(JSON.parse(lastId));

  const updateTodo = (id) => {
    const newContents = [];

    for (let i = 0; i < contents.length; i++) {
      let tempContent = contents[i];

      if (Number(tempContent.id) === Number(id)) {
        tempContent.check = !tempContent.check;
      }
      newContents.push(tempContent);
    }
    setContents(newContents);
  };

  const createTodo = (content) => {
    const newContent = { id: nextId, content, check: false };
    const tempContent = [...contents];

    tempContent.push(newContent);

    setContents(tempContent);
    setNextId(nextId + 1);
  };

  const deleteTodo = (id) => {
    setContents((prevContents) => {
      const newContents = [];

      for (let i = 0; i < prevContents.length; i++) {
        const tempContent = prevContents[i];

        if (tempContent.id === id) {
          continue;
        }
        newContents.push(tempContent);
      }
      return newContents;
    });
  };

  return (
    <>
      <Header Title="Todo List" />
      <Nav />
      <StyledBody>
        <ItemInput createTodo={createTodo} />
        <ItemList
          contents={contents}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </StyledBody>
      <Footer />
    </>
  );
};

export { Todo };
