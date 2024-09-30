import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      name="about"
      className="h-screen overflow-auto w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </motion.div>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl mt-20"
        >
          Hello! I am currently working as a Data Engineer in IT Division of
          Bina Nusantara. I am also a hardworking Computer Science college
          student at University Of Bina Nusantara committed to gaining skills
          and experiences thus utilizing my skills to further the mission of a
          company. Able to effectively self manage during independent projects,
          as well as collaborate as part of a productive team. Keen to pursue
          experience specifically in the database scene.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutMe;
