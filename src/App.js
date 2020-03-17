import React from "react";
import Todo from "./components/Todo/Todo.js";
import TodoForm from './components/TodoForm/TodoForm.js';
import TodoHeader from './components/TodoHeader/TodoHeader.js';
import TodoFooter from './components/TodoFooter/TodoFooter.js';
import { compareByAsk, compareByDesc } from './utils/miscFunctions.js';
import { useLocalStorage } from './utils/customHooks.js';
import "./App.css";

const initialTodos = [
	{
		text: "Learn about React",
		isCompleted: false,
		time: 0
	},
	{
		text: "Meet friend for lunch",
		isCompleted: false,
		time: 0
	},
	{
		text: "Build really cool todo app",
		isCompleted: false,
		time: 0
	}
]


function App() {
	const [todos, setTodos] = useLocalStorage('todos', initialTodos);
	
  const addTodo = text => {
    const newTodos = [...todos];
		newTodos.push({
			text,
			isCompleted: false,
			time: Date.now()
		})
		localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
		return newTodos[index].isCompleted;
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
		localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos);
  };
	
	const editTodo = (text, index) => {
		const newTodos = [...todos];
		newTodos[index] = {
			text,
			isCompleted: false,
			time: Date.now()
		}
		localStorage.setItem('todos', JSON.stringify(newTodos))
		setTodos(newTodos);
	}
	
	const sortByAsc = () => {
		const newTodos = [...todos].sort(compareByAsk)
		setTodos(newTodos)
	}
	
	const sortByDesc = () => {
		const newTodos = [...todos].sort(compareByDesc)
		setTodos(newTodos)
	}

  return (
    <div className="app">
      <div className="todo-list">
				<TodoHeader todos={todos && todos} />
        {todos && todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
						editTodo={editTodo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
				{todos && todos.length && <TodoFooter sortByDesc={sortByDesc} sortByAsc={sortByAsc} />}
      </div>
    </div>
  );
}

export default App;