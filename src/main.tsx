import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PomodoroTimer from './components/pomodoro-timer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <PomodoroTimer defaultPomodoroTime={1500} />
  </React.StrictMode>
)
