const Card = props => {
	return (
		<div className='grid grid-flow-row grid-row-2 p-3 my-2 mx-1 max-w-sm rounded-lg shadow-lg bg-yellow-500'>
			{props.children}
		</div>
	)
}

export default Card
