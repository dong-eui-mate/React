import { StyledApp } from "./Styles/StyledApp";
import GlobalStyle from "./Styles/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { Todo } from "./Pages/Todo_Page";
import { SchoolMap } from "./Pages/SchoolMap_Page";
import { TimeTable } from "./Pages/TimeTable_Page";
import { Main } from "./Pages/Main_Page";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp className="App">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/todo' element={<Todo />}/>
          <Route path='/map' element={<SchoolMap />}/>
          <Route path='/class' element={<TimeTable />}/>
          <Route path='/*' element={'404 : Not Found'}/>
        </Routes>
      </StyledApp>
    </>
  );
}

export default App;
