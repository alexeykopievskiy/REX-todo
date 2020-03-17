import React from 'react';
import "./TodoHeader.css";

function TodoHeader({todos}) {
	return (
		<div>
			{todos && !todos.length ?
				<div>
					<img src="https://1.bp.blogspot.com/_JyYwlGV7Q48/SXt0EHXXh5I/AAAAAAAACUI/lT8NoolmPSg/s400/PinkPanther-Web.jpg" alt="todo-img" className="todo-header__img"/>
					<p>No todos for today</p>
				</div>
 			:
				<img src="https://i.redd.it/y14xp8glyab31.jpg" alt="todo-img" className="todo-header__img"/>
			}
		</div>
	)
}

export default TodoHeader;