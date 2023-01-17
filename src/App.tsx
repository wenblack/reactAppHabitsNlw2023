import { Habit } from './components/Habit'
function App() {
	return (
		<>
			<Habit completed={4} />
			<Habit completed={3} />
			<Habit completed={7} />
			<Habit completed={2} />
		</>
	)
}

export default App
