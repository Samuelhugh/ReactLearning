import { useState } from "react";

const TodoListComponentForm = (props) => {
  // State to set todoText
  const [todoText, setTodoText] = useState("");
  // Destructuring my props Object, "getter" and "setter" from "state" from shared Parent Component(App.js)
  const { todoObj, setTodoObj } = props;
  // My Form Handler for when it is submitted
  const submitHandler = (e) => {
    // I want to prevent the browser from refreshing, so the Data isn't lost
    e.preventDefault();

    // When I call the "setter" function. Inside it I will set my new "todoObj" Array state variables
    // 1. Make a shallow copy of all the "CURRENT" elements in the Todo List. (Spread) operator
    // 2. The Todo that the client wants to do to the Todo List when they click submit button
    // I will this by ...
    // 1. build new "todoObj" object and add to the end of the array to be set
    // 2. "MarkedDelete" will be initialized in every Todo as "false"
    // 3. Copy the old "todoObj" Array and add a new one
    // 4. I need a unique id for each item. This is a common Javascript way to generate a random, unique number
    const todoObjs = {
      content: todoText,
      markedDelete: false,
      // id: Math.floor(Math.random() * 100000000).toString(),
    };
    setTodoObj([...todoObj, todoObjs]);
    // settodoText("");
  };
  //*******************************Return*****************************************/
  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* This will be the input where "todoText" is added */}
        <label htmlFor="todoLText">ToDo List Item: </label>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
          name="todoInput"
          id="todoLText"
          placeholder="Enter Text..."
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoListComponentForm;
