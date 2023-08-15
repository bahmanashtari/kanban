import { useState } from 'react'

import BoardSection from './BoardSection'
import Filters from './Filters'
import CreateNewBoard from './CreateNewBoard'

const MainBoard = props => {
	const [sections, setSections] = useState([])

	const sectionsToShow = sections.map(section => <BoardSection />)

	return (
		<div className='bg-zinc-700 flex items-center justify-center h-screen'>
			<div className='bg-slate-700 shadow-2xl rounded-lg p-8 w-5/6 h-4/5'>
				<section className='h-10 align-text-top text-gray-400 font-bold text-2xl'>
					Board Name
				</section>
				<section>
					<Filters />
				</section>
				<section className='h-full grid grid-flow-col'>
					{sections.length > 0 && sectionsToShow}
					{sections.length === 0 && <CreateNewBoard />}
				</section>
			</div>
		</div>
	)
}

export default MainBoard
