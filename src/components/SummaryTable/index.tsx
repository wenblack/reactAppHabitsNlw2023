import { generateDatesFromYearBeginning } from '../../utils/generate-dates-from-year-beginning'
import { Habit } from '../Habit'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7
let amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

console.log(amountOfDaysToFill)

export function SummaryTable() {
	return (
		<div className='w-full flex'>
			<div className='grid grid-rows-7 grid-flow-row gap-3'>
				{weekDays.map((weekDay, i) => {
					return (
						<div
							key={`${weekDay}-${i}`}
							className='text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center'
						>
							{weekDay}
						</div>
					)
				})}
			</div>

			<div className='grid grid-rows-7 grid-flow-col gap-3 '>
				{summaryDates.map((dates) => {
					return <Habit key={dates.toString()}></Habit>
				})}
				{amountOfDaysToFill > 0 &&
					Array.from({
						length: amountOfDaysToFill
					}).map((_, i) => {
						return (
							<div
								key={i}
								className=' cursor-not-allowed opacity-40 h-10 w-10 border-2 border-zinc-800 flex  items-center justify-center bg-zinc-900 rounded-lg'
							/>
						)
					})}
			</div>
		</div>
	)
}
