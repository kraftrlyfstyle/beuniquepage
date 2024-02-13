import React from 'react'
import splashphoto from "../../static/image2.png"

const SplashScreen = () => {
  return (
    <div>
      <img src={splashphoto} alt='logo' className='md:h-full right-0 fixed top-0 ' />
    </div>
  )
}

export default SplashScreen
