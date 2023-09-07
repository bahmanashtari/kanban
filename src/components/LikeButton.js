const LikeButton = ({ onLike, likeCount }) => {
	return (
		<div className='grid grid-flow-col grid-cols-2 p-1'>
			<button className='p-1 text-right' type='button' onClick={onLike}>
				Like
			</button>
			<h5 className='p-1 text-left'>{likeCount}</h5>
		</div>
	)
}

export default LikeButton
