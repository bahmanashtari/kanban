import { useState, useRef } from 'react'

import LikeButton from './LikeButton'

const Task = ({ description, onAddDescription, onLike, onDelete, taskId, sectionId }) => {
	const [hasDescription, setHasDescription] = useState(false)
	const descriptionRef = useRef()

	const textChangeHandler = event => {
		if (event.target.value) {
			setHasDescription(true)
		} else {
			setHasDescription(false)
		}
	}

	const blurHandler = () => {
		onAddDescription(sectionId, taskId, descriptionRef.current.value)
		setHasDescription(true)
	}

	const deleteHandler = () => {
		onDelete(sectionId, taskId)
	}

	return (
		<li
			key={taskId}
			className='grid grid-flow-row grid-row-2 p-3 my-2 mx-1 max-w-sm rounded-lg shadow-lg bg-slate-400'
		>
			{hasDescription ? (
				<textarea
					name='taskDescription'
					className='p-2 rounded bg-slate-300'
					type='text'
					placeholder='Description goes here ...'
					ref={descriptionRef}
					onBlur={blurHandler}
					value={description}
					onChange={textChangeHandler}
				/>
			) : (
				<p onClick={() => setHasDescription(true)}>{description || '...'}</p>
			)}
			<div className={`grid grid-flow-col ${hasDescription ? 'grid-cols-2' : 'grid-cols-1'}`}>
				{hasDescription && <LikeButton onLike={() => onLike(sectionId, taskId)} />}
				<button className='p-1' type='button' onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Task
