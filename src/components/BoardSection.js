import Task from './Task'

const BoardSection = props => {
	return (
		<div>
			<h1 className='text-orange-200'>Col Name</h1>
			<Task />
			<Task />
			<Task />
			<button type='button' className='text-green-500'>
				Add
			</button>
		</div>
	)
}

export default BoardSection
