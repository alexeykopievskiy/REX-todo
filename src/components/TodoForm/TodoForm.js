import React, { useState } from "react";
import { Input } from 'antd';
import "./TodoForm.css"

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
	
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;