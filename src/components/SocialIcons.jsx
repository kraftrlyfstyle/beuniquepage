import instaicon from "../../static/igicon7.png";
import linkedinicon from "../../static/linked7.png";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 flex w-32 justify-evenly m-9"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.25, rotate: "2.5deg" }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img src={instaicon} alt="logo" className="md:h-[55px] rounded-xl" />
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.25 , rotate: "2.5deg"}}>
        <img src={linkedinicon} alt="logo" className="md:h-[55px] rounded-xl" />
      </motion.button>
    </motion.div>
  );
};

export default SocialIcons;
