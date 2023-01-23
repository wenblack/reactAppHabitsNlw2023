import './styles/global.css';
<<<<<<< HEAD
import './lib/dayjs'
=======
>>>>>>> 1184bab9a09838ceccfb01bac0a367e7ecacb2a0
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";

// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}

