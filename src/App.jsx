import { useState } from 'react'
import './App.css'
import TitleBar from './components/TitleBar'
import SocialIcons from './components/SocialIcons'
import SplashScreen from './components/SplashScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    < TitleBar className="sticky"/>
    <SplashScreen />
    < SocialIcons />
    </div>
  )
}

export default App
