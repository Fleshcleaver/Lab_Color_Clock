
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeString = format(currentTime, 'hh:mm:ss a')
  const dateString = format(currentTime, 'EEEE, MMMM d, yyyy')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
        
        {/* Main clock card */}
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          {/* Time display */}
          <div className="text-center mb-6">
            <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 tracking-wider">
              {timeString}
            </div>
          </div>
          
          {/* Date display */}
          <div className="text-center mb-4">
            <div className="text-2xl md:text-3xl font-medium text-blue-200">
              {dateString}
            </div>
          </div>
          
          {/* Decorative accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          
          {/* Decorative circles */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '75ms'}}></div>
            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '150ms'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App