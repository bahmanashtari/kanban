import { useState } from 'react'

import Task from './Task'

const BoardSection = props => {
	const [taskIdCount, setTaskIdCount] = useState(1)
	const [tasks, setTasks] = useState([])

	const addTaskHandler = () => {
		setTasks(prevTasks => [
			...prevTasks,
			{ id: taskIdCount + 1, description: '', likes: 0 },
		])
		setTaskIdCount(prevId => prevId + 1)
		console.log(taskIdCount)
	}

	const descriptionHandler = description => {
		console.log(description)
	}

	const likeHandler = () => {
		console.log('like')
	}

	const tasksToShow = tasks.map(task => (
		<Task
			taskContent={task}
			onLike={likeHandler}
			onDescription={descriptionHandler}
		/>
	))

	return (
		<div>
			<h1 className='text-white'>Col Name</h1>
			{tasksToShow}
			<button
				type='button'
				className='text-green-600'
				onClick={addTaskHandler}>
				+
			</button>
		</div>
	)
}

export default BoardSection
