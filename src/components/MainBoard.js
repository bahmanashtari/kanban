import BoardSection from './BoardSection'

const MainBoard = props => {
	return (
		<div className='bg-zinc-700 flex items-center justify-center h-screen'>
			<div className='bg-slate-800 shadow-2xl rounded-lg p-8 w-5/6 h-4/5'>
				<div className='h-min'>Board Name</div>
				<div className='h-full grid grid-flow-col'>
					<BoardSection />
					<BoardSection />
				</div>
			</div>
		</div>
	)
}

export default MainBoard
