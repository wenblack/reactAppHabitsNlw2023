interface HabitProps {
	completed: number
}
//Example of type without rest
export function Habit(props: HabitProps) {
	return (
		<div className='w-10 h-10 rounded-sm bg-violet-400 text-center'>
			{props.completed}
		</div>
	)
}
