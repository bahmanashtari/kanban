import { useState, useRef, useEffect } from 'react'

import LikeButton from './LikeButton'

const Task = ({ taskDescription, onAddDescription, onLike, onDelete, taskId }) => {
	const [id, setId] = useState()
	const [description, setDescription] = useState('')
	const [isEditable, setEditable] = useState(false)
	const [hasDescription, setHasDescription] = useState(false)
	const descriptionRef = useRef()

	useEffect(() => {
		setId(taskId)
		setDescription(taskDescription)
	}, [taskId, taskDescription])

	const textChangeHandler = event => {
		if (event.target.value) {
			setHasDescription(true)
			setDescription(event.target.value)
		} else {
			setHasDescription(false)
			setDescription('')
		}
	}

	const blurHandler = () => {
		onAddDescription(id, descriptionRef.current.value)
		setEditable(false)
	}

	const likeClickHandler = () => {
		onLike(id)
	}

	const deleteHandler = () => {
		onDelete(id)
	}

	return (
		<li
			key={id}
			className='grid grid-flow-row grid-row-2 p-3 my-2 mx-1 max-w-sm rounded-lg shadow-lg bg-slate-400'
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
				{hasDescription && <LikeButton onLike={onLike} />}
				<button className='p-1' type='button' onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Task
