import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherApp from './WeatherApp.jsx'
import { WeatherProvider }  from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  </StrictMode>,
)
