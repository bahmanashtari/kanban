import { useState } from 'react'

import Task from './Task'

const BoardSection = props => {
	const [taskIdCount, setTaskIdCount] = useState(1)
	const [tasks, setTasks] = useState([])

	const addEmptyTask = () => {
		const newEmptyTask = { id: taskIdCount, description: '', likeCount: 0 }
		setTasks(prevTasks => [...prevTasks, newEmptyTask])
		setTaskIdCount(prevId => prevId + 1)
	}

	const descriptionHandler = (taskId, description) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return { ...task, description: description }
			}

			return task
		})
		setTasks(updatedTasks)
	}

	const likeHandler = taskId => {
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return { ...task, likeCount: task.likeCount + 1 }
			}

			return task
		})
		setTasks(updatedTasks)
	}

	const deleteHandler = taskId => {
		const updatedTasks = tasks.filter(task => task.id !== taskId)
		setTasks(updatedTasks)
	}

	const tasksToShow = tasks.map(task => (
		<Task
			taskKey={task.id}
			taskContent={task}
			onDescription={descriptionHandler}
			onLike={likeHandler}
			onDelete={deleteHandler}
		/>
	))

	return (
		<section>
			<h1 className='text-white'>{props.name}</h1>
			<ul>{tasksToShow}</ul>
			<button
				type='button'
				className='text-green-600'
				onClick={addEmptyTask}>
				+
			</button>
		</section>
	)
}

export default BoardSection
