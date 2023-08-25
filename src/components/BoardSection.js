import { useState, useRef } from 'react'

import Task from './Task'

const BoardSection = ({ sectionName, key, tasks }) => {
	const counter = useRef(0) // avoid reseting this on every render
	const [tasks, setTasks] = useState([])

	const addEmptyTask = () => {
		const newEmptyTask = { id: counter.current, description: '', likeCount: 0 }
		setTasks(prevTasks => [...prevTasks, newEmptyTask])
		counter.current++
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

	const handleOnDragOver = event => {
		event.preventDefault()
	}

	const handleOnDrop = event => {
		const id = event.dataTransfer.getData('id')
		const draggedTask = tasks.find(task => task.id === id)
		setTasks([...tasks, draggedTask])
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
			<ul onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
				{tasksToShow}
			</ul>
			<button type='button' className='text-green-600' onClick={addEmptyTask}>
				+
			</button>
		</section>
	)
}

export default BoardSection
