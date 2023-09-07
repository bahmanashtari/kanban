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
		let sectionWithUpdatedTask = globalState.sections.find(
			section => section.sectionId === sectionId
		)
		sectionWithUpdatedTask.tasks.forEach(task => {
			if (task.taskId === taskId) {
				task.description = taskDescription
			}
		})
		const allSections = globalState.sections.map(section => {
			if (section.sectionId === sectionId) {
				return sectionWithUpdatedTask
			}
			return section
		})
		setGlobalState(currentGlobalState => {
			return { ...currentGlobalState, sections: allSections }
		})
	}

	const likeHandler = (sectionId, taskId) => {
		let sectionWithUpdatedTask = globalState.sections.find(
			section => section.sectionId === sectionId
		)
		sectionWithUpdatedTask.tasks.forEach(task => {
			if (task.taskId === taskId) {
				task.likes++
			}
		})
		const allSections = globalState.sections.map(section => {
			if (section.sectionId === sectionId) {
				return sectionWithUpdatedTask
			}
			return section
		})
		setGlobalState(currentGlobalState => {
			return { ...currentGlobalState, sections: allSections }
		})
	}

	const deleteHandler = (sectionId, taskId) => {
		const deleteTaskFromSection = globalState.sections.find(
			section => section.sectionId === sectionId
		)
		const remainingTasks = deleteTaskFromSection.tasks.filter(task => task.taskId !== taskId)
		const sectionAfterDeletedTask = { ...deleteTaskFromSection, tasks: [...remainingTasks] }
		const updatedSections = globalState.sections.map(section => {
			if (section.sectionId === sectionId) {
				return sectionAfterDeletedTask
			}
			return section
		})
		setGlobalState(currentGlobalState => {
			return { ...currentGlobalState, sections: updatedSections }
		})
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
