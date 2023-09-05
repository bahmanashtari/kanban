import { useState } from 'react'

import BoardSection from './BoardSection'
import Filters from './Filters'
import CreateNewBoard from './CreateNewBoard'

const initialState = {
	boardName: '',
	searchKey: '',
	viewSections: null, // sectionID
	sortBy: null, // votes
	sections: [
		// {
		//   key: 'sectionID',
		//   sectionId: 'sectionID',
		//   sectionName: 'secionName',
		//   tasks: [
		//     { key: 'taskID', taskId: 'taskId', description: 'taskDescription', likes: 0, createDate: 'DateTime' },
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
						acc = [...acc, { key, sectionName: val, tasks: [] }]
					}
					return acc
				}, []),
			}
		})
	}

	const addEmptyTaskHandler = (sectionId, tasksId) => {
		const updatedSections = globalState.sections.map(section => {
			if (section.key === sectionId) {
				section.tasks = [
					...section.tasks,
					{ key: tasksId, description: '', likes: 0, createdDate: new Date() },
				]
			}
		})
		setGlobalState(updatedSections)
	}

	const addDescriptionHandler = (taskId, description) => {
		// const updatedTasks = tasks.map(task => {
		// 	if (task.id === taskId) {
		// 		return { ...task, description: description }
		// 	}
		// 	return task
		// })
		// setTasks(updatedTasks)
	}

	const likeHandler = taskId => {
		// const updatedTasks = tasks.map(task => {
		// 	if (task.id === taskId) {
		// 		return { ...task, likeCount: task.likeCount + 1 }
		// 	}
		// 	return task
		// })
		// setTasks(updatedTasks)
	}

	const deleteHandler = taskId => {
		// const updatedTasks = tasks.filter(task => task.id !== taskId)
		// setTasks(updatedTasks)
	}

	return (
		<div className='bg-zinc-700 flex items-center justify-center h-screen'>
			<div className='bg-slate-700 shadow-2xl rounded-lg p-8 w-5/6 h-4/5'>
				<section className='h-10 align-text-top text-gray-400 font-bold text-2xl'>
					{globalState.boardName}
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
								key={section.key}
								sectionId={section.key}
								tasks={section.tasks}
								onAddEmptyTask={addEmptyTaskHandler}
								onAddDescription={addDescriptionHandler}
								onLike={likeHandler}
								onDelete={deleteHandler}
							/>
						))}
				</section>
			</div>
		</div>
	)
}

export default MainBoard
