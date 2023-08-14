import Card from './Card'

const Task = props => {
	return (
		<Card>
			<div>This is a Task</div>
			<input
				type='text'
				placeholder='task description goes here ...'></input>
		</Card>
	)
}

export default Task
