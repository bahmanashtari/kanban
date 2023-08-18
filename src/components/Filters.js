const Filters = props => {
	return (
		<form className='p-6 grid grid-flow-col grid-cols-3'>
			<input
				className='p-1 mx-2 rounded'
				type='text'
				id='search'
				placeholder='start typing to filter tasks'
				onChange={e => props.keywords(e.target.value)}
			/>
			<div>
				<label className='text-white' htmlFor='section-filter'>
					View Section
				</label>
				<select
					className='p-1 mx-2 rounded'
					id='section-filter'
					name='section-filter'
					onChange={e => props.sections(e.target.value)}>
					<option value='' default>
						All Sections
					</option>
					<option value='section1'>Section 1</option>
					<option value='section2'>Section 2</option>
					<option value='seciton3'>Section 3</option>
				</select>
			</div>
			<div>
				<label className='text-white' htmlFor='sort-by'>
					Sort by
				</label>
				<select
					className='p-1 mx-2 rounded'
					id='sort-by'
					name='sort-by'
					onChange={e => props.sort(e.target.value)}>
					<option value='createdDate' default>
						Created Date
					</option>
					<option value='votes'>Votes</option>
				</select>
			</div>
		</form>
	)
}

export default Filters
