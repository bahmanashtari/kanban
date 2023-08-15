import { useState } from 'react'

const CreateNewBoard = props => {
	const [sectionCount, setSectionCount] = useState(0)

	const sectionCountChangeHandler = event => {
		setSectionCount(event.target.value)
	}

	const formSubmitHandler = event => {
		event.preventDefault()

		const formJson = Object.fromEntries(
			new FormData(event.target).entries()
		)
	}

	let sectionNameInputs = []
	for (let i = 0; i < sectionCount; i++) {
		sectionNameInputs = [
			...sectionNameInputs,
			<section className='grid grid-flow-col grid-cols-2 space-x-20 p-5 bg-slate-800 rounded-xl'>
				<label htmlFor={`sectionName_${i}`} className='text-white'>
					Enter section's name
				</label>
				<input
					className='w-3/12 rounded text-center'
					type='text'
					name={`sectionName_${i}`}
					id={`sectionName_${i}`}
				/>
			</section>,
		]
	}

	return (
		<form
			onSubmit={formSubmitHandler}
			name='createNewBoard'
			id='createNewBoard'
			className='space-y-3'>
			<section className='grid grid-flow-col grid-cols-2 space-x-20 p-5 bg-slate-800 rounded-xl'>
				<label htmlFor='sectionCount' className='text-white'>
					How many sections do you want on your board?
				</label>
				<input
					className='w-3/12 rounded text-center'
					type='number'
					name='sectionCount'
					id='sectionCount'
					value={sectionCount}
					onChange={sectionCountChangeHandler}
				/>
			</section>
			{sectionCount !== 0 && sectionNameInputs}
			<button
				type='submit'
				htmlFor='createNewBoard'
				className='rounded-full my-5 p-2 bg-slate-600 hover:bg-slate-500'>
				Create Board
			</button>
		</form>
	)
}

export default CreateNewBoard
