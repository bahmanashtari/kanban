import { useState } from 'react'

import BoardSection from './BoardSection'
import Filters from './Filters'
import CreateNewBoard from './CreateNewBoard'

const MainBoard = props => {
	const [boardName, setBoardName] = useState('')
	const [sections, setSections] = useState([])

	const createBoardHandler = boardDetails => {
		const boardName = boardDetails.boardName
		const sectionNames = Object.entries(boardDetails).reduce(
			(acc, [key, val]) => {
				if (key.startsWith('sectionName_')) {
					acc = [...acc, val]
				}
				return acc
			},
			[]
		)
		setBoardName(boardName)
		setSections(sectionNames)
	}

	const filterKeywordsHandler = keywords => {
		console.log(keywords)
	}

	const filterSectionHandler = section => {
		console.log(section)
	}

	const sortHandler = sortType => {
		console.log(sortType)
	}

	const sectionsToShow = sections.map(section => (
		<BoardSection name={section} />
	))

	return (
		<div className='bg-zinc-700 flex items-center justify-center h-screen'>
			<div className='bg-slate-700 shadow-2xl rounded-lg p-8 w-5/6 h-4/5'>
				<section className='h-10 align-text-top text-gray-400 font-bold text-2xl'>
					{boardName}
				</section>
				<section>
					<Filters
						keywords={filterKeywordsHandler}
						sections={filterSectionHandler}
						sort={sortHandler}
					/>
				</section>
				<section className='h-full grid grid-flow-col'>
					{sections.length > 0 && sectionsToShow}
					{sections.length === 0 && (
						<CreateNewBoard onCreateBoard={createBoardHandler} />
					)}
				</section>
			</div>
		</div>
	)
}

export default MainBoard
