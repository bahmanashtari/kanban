const LikeButton = props => {
	return (
		<div className='grid grid-flow-col grid-cols-2 p-1'>
			<button
				className='p-1 text-right'
				type='button'
				onClick={props.onLike}>
				Like
			</button>
			<h5 className='p-1 text-left'>{props.likeCount}</h5>
		</div>
	)
}

export default LikeButton
