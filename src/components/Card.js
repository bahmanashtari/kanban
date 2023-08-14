const Card = props => {
	return (
		<div className='bg-yellow-500 my-2 mx-1 max-w-sm rounded-lg shadow-lg'>
			{props.children}
		</div>
	)
}

export default Card
