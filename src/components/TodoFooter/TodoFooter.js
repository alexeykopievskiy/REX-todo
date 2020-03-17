import React from 'react';
import { Button } from 'antd';

function TodoFooter({ sortByAsc, sortByDesc }) {
	return (
		<div>
			Sort by: 
			<Button onClick={sortByAsc}>ASK</Button>
			<Button onClick={sortByDesc}>Desc</Button>
		</div>
	)
}

export default TodoFooter;