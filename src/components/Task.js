import { useState, useRef, useEffect } from 'react'

import LikeButton from './LikeButton'

const Task = props => {
	const [isEditable, setEditable] = useState(false)
	const [taskId, setTaskId] = useState()
	const [hasDescription, setHasDescription] = useState(false)
	const [taskDescription, setTaskDescription] = useState('')
	const descriptionRef = useRef()

	useEffect(() => {
		setTaskId(props.taskContent.id)
		setTaskDescription(props.taskContent.description)
	}, [props.taskContent.id, props.taskContent.description])

	const textChangeHandler = event => {
		if (event.target.value) {
			setHasDescription(true)
			setTaskDescription(event.target.value)
		} else {
			setHasDescription(false)
			setTaskDescription('')
		}
	}

	const blurHandler = () => {
		props.onDescription(taskId, descriptionRef.current.value)
		setEditable(false)
	}

	const likeClickHandler = () => {
		props.onLike(taskId)
	}

	const deleteHandler = () => {
		props.onDelete(taskId)
	}

	const taskLikeBotton = (
		<LikeButton onLike={likeClickHandler} likeCount={props.taskContent.likeCount} />
	)

	const handleOnDrag = (e, taskKey, taskDescription) => {
		e.dataTransfer.setData('id', taskKey)
	}

	return (
		<li
			key={props.taskKey}
			className='grid grid-flow-row grid-row-2 p-3 my-2 mx-1 max-w-sm rounded-lg shadow-lg bg-slate-400'
			draggable
			onDragStart={e => handleOnDrag(e, props.taskKey)}
		>
			{isEditable ? (
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
			) : (
				<p onClick={() => setEditable(true)}>{taskDescription || '...'}</p>
			)}
			<div className={`grid grid-flow-col ${hasDescription ? 'grid-cols-2' : 'grid-cols-1'}`}>
				{hasDescription && taskLikeBotton}
				<button className='p-1' type='button' onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Task
