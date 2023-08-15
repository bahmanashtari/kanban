import { useState, useRef, useEffect } from 'react'

import LikeButton from './LikeButton'

const Task = props => {
	const [taskId, setTaskId] = useState()
	const [hasDescription, setHasDescription] = useState(false)
	const descriptionRef = useRef()

	useEffect(() => {
		setTaskId(props.taskContent.id)
	}, [props.taskContent.id])

	const blurHandler = () => {
		descriptionRef.current.value
			? setHasDescription(true)
			: setHasDescription(false)

		props.onDescription(taskId, descriptionRef.current.value)
	}

	const likeClickHandler = () => {
		props.onLike(taskId)
	}

	const taskButtons = (
		<div className='grid grid-flow-col grid-cols-2'>
			<LikeButton
				onLike={likeClickHandler}
				likeCount={props.taskContent.likeCount}
			/>
			<button className='p-1' type='button'>
				Delete
			</button>
		</div>
	)

	return (
		<li
			key={props.taskKey}
			className='grid grid-flow-row grid-row-2 p-3 my-2 mx-1 max-w-sm rounded-lg shadow-lg bg-slate-400'>
			<textarea
				className='p-2 rounded bg-slate-300'
				type='text'
				placeholder='Description goes here ...'
				ref={descriptionRef}
				onBlur={blurHandler}
			/>
			{hasDescription && taskButtons}
		</li>
	)
}

export default Task
