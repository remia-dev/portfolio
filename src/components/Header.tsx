import React from "react";
import { motion } from "framer-motion";
import { titleSubtitle, blue } from "../util/animations";

const Header = () => {
  return (
    <div className="bg-white h-[340px] w-full relative">
      <motion.div className="absolute mx-40 py-20 z-10 md:block" variants={titleSubtitle} initial="initial" animate="animate">
        <h1 className="text-[90px] px-10 font-serif sm:text-white lg:text-black cursor-pointer">Lorem Ipsum</h1>
        <h2 className="text-[30px] px-14 font-light">Subtitle</h2>
      </motion.div>
      <motion.div className="flex justify-end relative" variants={blue} initial="initial" animate="animate">
        <div className="mt-5 bg-slate-900 h-[300px] lg:w-[800px] border-0 sm:w-full overflow-x-hidden relative" >
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
