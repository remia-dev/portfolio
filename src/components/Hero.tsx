import React from "react";
import bg from "../assets/bgpic.jpg";
import { motion } from "framer-motion";
import { black } from "../util/animations";

const Hero = () => {
  return (
    <>
      <motion.div
        className="flex mt-10"
        variants={black}
        initial="initial"
        animate="animate"
      >
        <div className="bg-black h-[400px] w-[300px]"></div>
        <div className="flex items-center">
          <div className="relative text-[30px] font-extralight mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor{" "}
            <span className="text-red-500">incididunt</span> ut labore et dolore
            magna <br />
            aliqua. Amet cursus sit amet dictum sit amet justo donec.
          </div>
        </div>
        <div className="text-[40px] font-extralight">Technology</div>
      </motion.div>
    </>
  );
};

export default Hero;
