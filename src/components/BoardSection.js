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
						key={task.taskId}
						taskId={task.taskId}
						sectionId={sectionId}
						description={task.description}
						onAddDescription={onAddDescription}
						onLike={onLike}
						likeCount={task.likes}
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
