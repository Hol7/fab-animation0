'use client'

import { motion, useScroll, useTransform } from "motion/react";
import {  useRef } from "react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridSquareVariants = {
 hidden:{ opacity: 0 }, show:{opacity:1} 
}


export default function Home() {

   const { scrollYProgress: completionProgress } = useScroll();
   const containerRef = useRef(null);


   const { scrollYProgress } = useScroll( {
      target: containerRef, 
      offset: ["start end",  "end end"],
      })

    const paragraphOneValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"]
      )


      const paragraphTwoValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"]
      )




  return (
    <div className="flex flex-col gap-10 overflow-x-hidden ">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="md:grid md:grid-cols-3 p-10 gap-10 "
      >
        {/* first animation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center  gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-lg "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full "
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          ></motion.div>
        </motion.div>

        {/* second animation */}

        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-rose-700 shadow-md "
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>

        {/* third animation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              color: "black",
              backgroundColor: "#d1d5dd",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-1/2 bg-emerald-600 py-4 tracking-wide font-medium text-2xl rounded-lg text-gray-100 "
          >
            Click me 🧚🏻
          </motion.button>
        </motion.div>

        {/* fourth animation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-600 rounded-lg cursor-grab "
            drag
            dragConstraints={{
              left: -125,
              right: 125,
              bottom: 125,
              top: -125,
            }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
          ></motion.div>
        </motion.div>

        {/* fifth animation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div className="w-40 aspect-square rounded-xl bg-gray-50/20 ">
            <motion.div
              className="w-full bg-gray-400 h-full rounded-xl origin-bottom"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>

        {/* sixth animation */}

        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-blue-700 rounded-lg cursor-grab "
            drag
            // dragConstraints={{
            //   left: -125,
            //   right: 125,
            //   bottom: 125,
            //   top: -125,
            // }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
          ></motion.div>
        </motion.div>
      </motion.section>

      <section className="flex flex-col gap-10 mb-10 ">
        <motion.h1
         className="text-5xl tracking-wide text-slate-100 text-center "
      
         
        >
          Fab keep scrolling
        </motion.h1>

        <motion.p style={{  translateX: paragraphOneValue }} className=" text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          This is simple progress on how to get up animation😇
          I`m not an expert yet but soon 😂. i will continue learning and showing you
          my progess.
        </motion.p>

        <motion.p style={{  translateX : paragraphTwoValue }} className=" text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          I`m using a very powerful library, when used properly. Add some life
          to your websites 🧚🏻.
        </motion.p>
      </section>

      <section className="flex justify-center items-center p-10 gap-10 mb-10">
        <div className="w-1/2 h-10 bg-slate-300 aspect-video" ></div>
      </section>
    </div>
  );
}
