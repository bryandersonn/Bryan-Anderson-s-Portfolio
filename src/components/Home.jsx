import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { RiArrowRightFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen overflow-auto w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="test-4xl sm:text-7xl font-bold text-white"
          >
            I'm a Data Engineer
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 py-4 max-w-md"
          >
            Hello! My name is Bryan Anderson and I am currently focusing and
            working on data automation and furthermore diving into fullstack
            using technologies such as React, Tailwind, Python, and MS SQL
            Server.
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightFill size={20} className="ml-1"></RiArrowRightFill>
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5}}
        >
          <img
            src={HeroImage}
            alt="Profile"
            className="rounded-2xl mx-auto w-3/6 md:w-3/6"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
