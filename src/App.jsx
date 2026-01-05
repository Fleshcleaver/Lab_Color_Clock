import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const dateString = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="clock-container">
      <div className="clock-card">
        <div className="time-display">
          {timeString}
        </div>
        <div className="date-display">
          {dateString}
        </div>
        <div className="clock-accent"></div>
      </div>
    </div>
  )
}

export default App