import React, { useState } from "react";
import "./App.css";
import TodoListComponentForm from "./components/TodoListComponentForm";
import DisplayAfterSubmit from "./components/DisplayAfterSubmit";

function App() {
  // Define my "State" which will be an array of objects/Items
  // Also so that my "TodoListComponentForm" and "DisplayAfterSubmit" can both access this Array State variable
  // I'm "lifting state" when a "State" variable is shared across multiple components.
  // "State" will always return an Array
  const [todoObj, setTodoObj] = useState([]);
  return (
    <div className="App">
      {/* pass props */}
      <TodoListComponentForm todoObj={todoObj} setTodoObj={setTodoObj} />
      {/* pass props */}
      <DisplayAfterSubmit todoObj={todoObj} setTodoObj={setTodoObj} />
    </div>
  );
}

export default App;
