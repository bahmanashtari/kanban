import { useState, useRef, useEffect } from 'react'

import Card from './Card'
import LikeButton from './LikeButton'

const Task = props => {
	const descriptionRef = useRef()

	useEffect(() => {}, [])

	return (
		<Card>
			<textarea
				className='p-2 rounded'
				type='text'
				placeholder='Description goes here ...'
				value={props['description']}
				ref={descriptionRef}
				onBlur={props.descriptionHandler}
			/>
			<div className='grid grid-flow-col grid-cols-2'>
				<LikeButton
					likeCount={props.likeCount}
					onLike={props.likeHandler}
				/>
				<button className='p-1' type='button'>
					Delete
				</button>
			</div>
		</Card>
	)
}

export default Task
