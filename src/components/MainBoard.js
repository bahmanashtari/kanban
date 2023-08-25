import { useState } from 'react'

import BoardSection from './BoardSection'
import Filters from './Filters'
import CreateNewBoard from './CreateNewBoard'

const initialState = {
	baordname: '',
	searchKey: '',
	viewSections: null, // sectionID
	sortBy: null, // votes
	sections: [
		// {
		//   sectionKey: "sectionID",
		//   sectionName: "secionName",
		//   tasks: [
		//     { taskKey: "id1", description: "some text", like: 0, createDate: "" },
		//     { ... }, ...
		//   ],
		// },
		// { ... }, { ... }, ...
	],
}

const MainBoard = () => {
	const [globalState, setGlobalState] = useState(initialState)

	const createBoardHandler = boardDetails => {
		const boardName = boardDetails.boardName
		setGlobalState(currentState => {
			return {
				...currentState,
				boardName,
				sections: Object.entries(boardDetails).reduce((acc, [key, val]) => {
					if (key.startsWith('sectionName_')) {
						acc = [...acc, { sectionKey: key, sectionName: val, task: [] }]
					}
					return acc
				}, []),
			}
		})
	}

	return (
		<div className='bg-zinc-700 flex items-center justify-center h-screen'>
			<div className='bg-slate-700 shadow-2xl rounded-lg p-8 w-5/6 h-4/5'>
				<section className='h-10 align-text-top text-gray-400 font-bold text-2xl'>
					{globalState.baordname}
				</section>
				{globalState.sections.length > 0 && (
					<section>
						<Filters />
					</section>
				)}
				<section className='grid grid-flow-col'>
					{globalState.sections.length === 0 && (
						<CreateNewBoard onCreateBoard={createBoardHandler} />
					)}
					{globalState.sections.length > 0 &&
						globalState.sections.map(section => (
							<BoardSection
								sectionName={section.sectionName}
								secitonKey={section.sectionKey}
								sectionTasks={section.sectionTasks}
							/>
						))}
				</section>
			</div>
		</div>
	)
}

export default MainBoard
