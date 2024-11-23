import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import delman from "../assets/delmanddl.png";
import asp from "../assets/asp.net.png";
import tableau from "../assets/tableau.png";
import sqlserver from "../assets/sqlserver.png";
import mysqllogo from "../assets/mysql.png";
import pythonlogo from "../assets/python.png"
import { motion } from "framer-motion";

const Experience = () => {
  const technos = [
    {
      id: 1,
      src: tableau,
      title: "Tableau",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: sqlserver,
      title: "SQL Server",
      style: "shadow-red-600",
    },
    {
      id: 3,
      src: mysqllogo,
      title: "MySQL",
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      src: pythonlogo,
      title: "Python",
      style: "shadow-yellow-600",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: asp,
      title: "ASP.NET",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: delman,
      title: "Delman DDL",
      style: "shadow-orange-600",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="experience"
      className="h-dvh-100 bg-gradient-to-b from-gray-800 to-black w-full pt-40 pb-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-6"
          >
            These are the tech I've worked with:
          </motion.p>
        </motion.div>
        <motion.div initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} className="w-full grid grid-colds-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technos.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto my-5" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
