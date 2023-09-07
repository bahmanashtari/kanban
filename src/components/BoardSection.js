import { useRef } from 'react'

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
	const newestTaskId = useRef(0)

	const addTaskHandler = () => {
		onAddEmptyTask(sectionId, newestTaskId.current)
		newestTaskId.current++
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
