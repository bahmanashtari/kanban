import Task from './Task'

const BoardSection = props => {
	return (
		<div>
			<h1 className='text-white'>Col Name</h1>
			<Task />
			<Task />
			<Task />
			<button type='button' className='text-green-600'>
				+
			</button>
		</div>
	)
}

export default BoardSection
