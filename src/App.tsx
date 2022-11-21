import { useState } from 'react'
import PomodoroTimer from './components/pomodoro-timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <PomodoroTimer 
      defaultPomodoroTime={1500} 
      shortRestTime={300} 
      longRestTime={900} 
      cycles={4}
      />
    </div>
  )
}

export default App
