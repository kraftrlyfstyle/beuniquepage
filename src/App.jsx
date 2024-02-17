import './App.css'
import TitleBar from './components/TitleBar'
import SocialIcons from './components/SocialIcons'
import SplashScreen from './components/SplashScreen'

function App() {

  return (
    <div>
    < TitleBar className="sticky"/>
    <SplashScreen />
    < SocialIcons />
    </div>
  )
}

export default App
