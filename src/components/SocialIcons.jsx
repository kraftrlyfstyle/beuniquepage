import React from 'react'
import instaicon from '../../static/igicon7.png'
import linkedinicon from '../../static/linked7.png'

const SocialIcons = () => {
  return (
    <div className='fixed bottom-0 left-0 flex w-32 justify-evenly m-9'>
      <img src={instaicon} alt='logo' className='md:h-[55px] rounded-xl' />
      <img src={linkedinicon} alt='logo' className='md:h-[55px] rounded-xl' />
    </div>
  )
}

export default SocialIcons
