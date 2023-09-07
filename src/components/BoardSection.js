import { useState } from 'react'

import Task from './Task'

const BoardSection = ({
	sectionName,
	sectionId,
	tasks,
	onAddEmptyTask,
	onAddDescription,
	onLike,
	onDelete,
}) => {
	const [newestTaskId, setNewestTaskId] = useState(0)

	const addTaskHandler = () => {
		setNewestTaskId(newestTaskId => newestTaskId++)
		onAddEmptyTask(sectionId, newestTaskId)
	}

	return (
		<section>
			<h1 className='text-white'>{sectionName}</h1>
			<ul>
				{tasks.map(task => (
					<Task
						key={`${sectionId}_${task.taskId}`}
						taskId={`${sectionId}_${task.taskId}`}
						sectionId={sectionId}
						taskDescription={task.taskDescription}
						onAddDescription={onAddDescription}
						onLike={onLike}
						onDelete={onDelete}
					/>
				))}
			</ul>
			<button type='button' className='text-green-600' onClick={addTaskHandler}>
				+
			</button>
		</section>
	)
}

export default BoardSection
