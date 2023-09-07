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
		//   sectionId: 'sectionID',
		//   sectionName: 'secionName',
		//   tasks: [
		//     { taskId: 'taskId', description: 'taskDescription', likes: 0, createDate: 'DateTime' },
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
						acc = [
							...acc,
							{ key: key, sectionId: `${key}`, sectionName: val, tasks: [] },
						]
					}
					return acc
				}, []),
			}
		})
	}

	const addEmptyTaskHandler = (sectionId, taskId) => {
		const sectionWithNewTask = globalState.sections.map(section => {
			if (section.sectionId === sectionId) {
				section.tasks = [
					...section.tasks,
					{
						key: `${sectionId}_${taskId}`,
						taskId: `${sectionId}_${taskId}`,
						description: '',
						likes: 0,
						createdDate: new Date(),
					},
				]
			}
			return section
		})
		setGlobalState(currentGlobalState => {
			return { ...currentGlobalState, sections: sectionWithNewTask }
		})
	}

	const addDescriptionHandler = (sectionId, taskId, taskDescription) => {
		// console.log(-1, sectionId, taskId)
		let sectionWithUpdatedTask = globalState.sections.find(
			section => section.sectionId === sectionId
		)
		sectionWithUpdatedTask.tasks.forEach(task => {
			// console.log(0, task.taskId, taskId)
			if (task.taskId === taskId) {
				task.description = taskDescription
				// console.log(1, task.description)
			}
		})
		// console.log(2, sectionWithUpdatedTask)
		const allSections = globalState.sections.map(section => {
			if (section.sectionId === sectionId) {
				return sectionWithUpdatedTask
			}
			return section
		})
		// setGlobalState(currentGlobalState => {
		// 	return { ...currentGlobalState, sections: updatingSection }
		// })
	}

	const likeHandler = (sectionId, taskId) => {
		// let updatingSection = globalState.sections.find(section => section.sectionId === sectionId)
		// updatingSection.tasks.forEach(task => {
		// 	if (task.taskId === taskId) {
		// 		task.likes += 1
		// 	}
		// })
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
						globalState.sections.map(section => {
							// console.log('mb', section.tasks)
							return (
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
							)
						})}
				</section>
			</div>
		</div>
	)
}

export default MainBoard
