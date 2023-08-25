import Task from './Task'

const BoardSection = ({
	sectionName,
	tasks,
	onAddEmptyTask,
	onAddDescription,
	onLike,
	onDelete,
}) => {
	return (
		<section>
			<h1 className='text-white'>{sectionName}</h1>
			<ul>
				{tasks.map(task => (
					<Task
						key={task.key}
						taskDescription={task.taskDescription}
						onAddDescription={onAddDescription}
						onLike={onLike}
						onDelete={onDelete}
					/>
				))}
			</ul>
			<button type='button' className='text-green-600' onClick={onAddEmptyTask}>
				+
			</button>
		</section>
	)
}

export default BoardSection
