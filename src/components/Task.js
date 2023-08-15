import { useState, useRef } from 'react'

import Card from './Card'
import LikeButton from './LikeButton'

const Task = props => {
	const [description, setDescription] = useState('')
	const [likeCount, setLikeCount] = useState(0)
	const descriptionRef = useRef()

	const descriptionBlurHandler = () => {
		setDescription(descriptionRef.current.value)
	}

	const likeClickHandler = () => {
		setLikeCount(prevCount => prevCount + 1)
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
				<LikeButton likeCount={likeCount} onLike={likeClickHandler} />
				<button className='p-1' type='button'>
					Delete
				</button>
			</div>
		</Card>
	)
}

export default Task
