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
    <div className=' h-[2400px]'>
      <p className='text-5xl text-center'></p>
    </div>
    < SocialIcons />
    </div>
  )
}

export default App
