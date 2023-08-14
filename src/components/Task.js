import Card from './Card'

const Task = props => {
	return (
		<Card>
			<textarea
				className='p-2'
				type='text'
				placeholder='Description goes here ...'></textarea>
			<div className='grid grid-flow-col grid-cols-2'>
				<button className='p-1' type='button'>
					Like
				</button>
				<button className='p-1' type='button'>
					Delete
				</button>
			</div>
		</Card>
	)
}

export default Task
