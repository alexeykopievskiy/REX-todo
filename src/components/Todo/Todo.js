import React, { useState } from "react";
import { Input, Button } from 'antd';
import "./Todo.css";

function Todo({ todo, index, editTodo, completeTodo, removeTodo }) {
	const [isEditable, setIsEditable] = useState(0);
	const [value, setValue] = useState("");
	
	const handleChangeTodo = todo => {
		setValue(todo.text);
		editTodo(value, index);
		setIsEditable(!isEditable)
	}
	
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {isEditable ? 
				<form onSubmit={handleChangeTodo}>
					<Input 
						type="text"
						className="input"
						value={value}
						onChange={e => setValue(e.target.value)}
					/> 
				</form>
					: todo.text}

      <div>
				<span>{todo.time === 0 ? 'recently' : new Date(todo.time).toISOString().substr(0, 10)}</span>
				<Button onClick={() => handleChangeTodo(todo)}>{isEditable ? "Save" : "Edit"}</Button>
        <Button onClick={() => completeTodo(index)}>{todo.isCompleted ? "Get back!" : "Complete"}</Button>
        <Button onClick={() => removeTodo(index)}>x</Button>
      </div>
    </div>
  );
}

export default Todo;