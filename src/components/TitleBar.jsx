import React from "react";
import { motion } from 'framer-motion'

const TitleBar = () => {
  return ( 
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} 
    className="h-20">
      <div className="md:h-20 bg-[#FDF9F8] fixed" >
        <p className="md:p-3 md:px-10 text-5xl font-['Noto_Serif_Display']">KRAFTR</p>
      </div>
    </motion.div>
  );
};

export default TitleBar;
