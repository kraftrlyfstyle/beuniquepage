import splashphoto from "../../static/image2.png"
import { motion } from 'framer-motion'

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className='text-[64px] m-12 font-["josefin_sans"] font-semibold'>Be Unique</h1>
      <p className='text-4xl md:w-2/4 md:m-12 font-light' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <motion.button whileHover={{scale: 1.1}} whileTap={{ scale: 1.25}}>
        <a href="">
          <motion.div className='bg-[#D2C1BA] m-10 p-5 rounded-xl font-semibold text-3xl font-["josefin_sans"]'>GET IT ON SHOPIFY</motion.div>
        </a>
      </motion.button>
      <img src={splashphoto} alt='logo' className='md:h-full right-0 fixed top-0 ' />
    </motion.div>
  )
}

export default SplashScreen
