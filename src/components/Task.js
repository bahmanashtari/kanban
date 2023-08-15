import { useState, useRef } from 'react'

import Card from './Card'
import LikeButton from './LikeButton'

const Task = props => {
	const [description, setDescription] = useState('')
	const descriptionRef = useRef()

	const descriptionBlurHandler = () => {
		setDescription(descriptionRef.current.value)
		console.log(description)
	}

	return (
		<Card>
			<textarea
				className='p-2 rounded'
				type='text'
				placeholder='Description goes here ...'
				ref={descriptionRef}
				onBlur={descriptionBlurHandler}
			/>
			<div className='grid grid-flow-col grid-cols-2'>
				<LikeButton />
				<button className='p-1' type='button'>
					Delete
				</button>
			</div>
		</Card>
	)
}

export default Task
