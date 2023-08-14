import BoardSection from './BoardSection'
import Filters from './Filters'

const MainBoard = props => {
	return (
		<div className='bg-zinc-700 flex items-center justify-center h-screen'>
			<div className='bg-slate-700 shadow-2xl rounded-lg p-8 w-5/6 h-4/5'>
				<div className='h-10 align-text-top text-gray-400 font-bold text-2xl'>
					Board Name
				</div>
				<div>
					<Filters />
				</div>
				<div className='h-full grid grid-flow-col'>
					<BoardSection />
					<BoardSection />
					<BoardSection />
				</div>
			</div>
		</div>
	)
}

export default MainBoard
