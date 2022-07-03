const DisplayAfterSubmit = (props) => {
  // Destructure what I want from my "props object", from "state" from my shared Parent Component
  const { todoObj, setTodoObj } = props;
  console.log(todoObj);
  // To handle mark through
  const handleUpdate = (todoObjs) => {
    const updatedTodoObj = {
      ...todoObjs,
      markedDelete: !todoObjs.markedDelete,
    };
    // This is already a newly created array (.map returns a newly created Array)
    const newTodoObjs = todoObj.map((todoText) => {
      if (todoText.content === todoObjs.content) {
        todoText = updatedTodoObj;
      }
      // Whenever I use "map", I should return a element
      return todoText;
    });
    // Setting my "state"
    setTodoObj(newTodoObjs);
  };
  const handleDelete = (index) => {
    const newTodoObjs = todoObj.filter((todoText, i) => {
      return i !== index;
    });
    setTodoObj(newTodoObjs);
  };
  return (
    <div>
      {/* Im using "map" to create and return a new array (doesn't modify the original array/list/stack)*/}
      {/* Why do I have to use parenthesis with Arrow function vs curly brackets/braces */}
      {todoObj.map((todoObjs, index) => (
        <div
          key={index}
          className={todoObjs.markedDelete ? "markedDelete" : ""}
        >
          <label htmlFor="todoLtText">{todoObjs.content}</label>
          <input
            type="checkbox"
            checked={todoObjs.markedDelete}
            onChange={() => handleUpdate(todoObjs)}
          />
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayAfterSubmit;
