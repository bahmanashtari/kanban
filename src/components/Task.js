import { useState, useRef, useEffect } from 'react'

import LikeButton from './LikeButton'

const Task = props => {
	const [taskId, setTaskId] = useState()
	const [hasDescription, setHasDescription] = useState(false)
	const [taskDescription, setTaskDescription] = useState('')
	const descriptionRef = useRef()

	useEffect(() => {
		setTaskId(props.taskContent.id)
		setTaskDescription(props.taskContent.description)
	}, [props.taskContent.id, props.taskContent.description])

	const blurHandler = () => {
		descriptionRef.current.value
			? setHasDescription(true)
			: setHasDescription(false)

		props.onDescription(taskId, descriptionRef.current.value)
	}

	const likeClickHandler = () => {
		props.onLike(taskId)
	}

	const deleteHandler = () => {
		props.onDelete(taskId)
	}

	const textChangeHandler = event => {
		setTaskDescription(event.target.value)
	}

	const taskLikeBotton = (
		<LikeButton
			onLike={likeClickHandler}
			likeCount={props.taskContent.likeCount}
		/>
	)

	return (
		<li
			key={props.taskKey}
			className='grid grid-flow-row grid-row-2 p-3 my-2 mx-1 max-w-sm rounded-lg shadow-lg bg-slate-400'>
			<textarea
				name='taskDescription'
				className='p-2 rounded bg-slate-300'
				type='text'
				placeholder='Description goes here ...'
				ref={descriptionRef}
				onBlur={blurHandler}
				value={taskDescription}
				onChange={textChangeHandler}
			/>
			<div
				className={`grid grid-flow-col ${
					hasDescription ? 'grid-cols-2' : 'grid-cols-1'
				}`}>
				{hasDescription && taskLikeBotton}
				<button className='p-1' type='button' onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Task
