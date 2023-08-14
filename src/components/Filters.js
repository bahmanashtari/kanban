const Filters = props => {
	return (
		<from className='p-6 grid grid-flow-col grid-cols-3'>
			<input
				className='p-1 mx-2 rounded'
				type='text'
				id='search'
				placeholder='start typing to filter tasks'></input>
			<div>
				<label className='text-white' for='section-filter'>
					View Section
				</label>
				<select
					className='p-1 mx-2 rounded'
					id='section-filter'
					name='section-filter'>
					<option value='section1'>Section 1</option>
					<option value='section2'>Section 2</option>
					<option value='seciton3'>Section 3</option>
				</select>
			</div>
			<div>
				<label className='text-white' for='sort-by'>
					Sort by
				</label>
				<select
					className='p-1 mx-2 rounded'
					id='sort-by'
					name='sort-by'>
					<option value='createdDate'>Created Date</option>
					<option value='votes'>Votes</option>
				</select>
			</div>
		</from>
	)
}

export default Filters
