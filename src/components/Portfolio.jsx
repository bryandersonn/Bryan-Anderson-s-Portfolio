import React from "react";
import TaniBoen from "../assets/portfolio/TaniBoen.png";
import WearHouse from "../assets/portfolio/WearHouse.png";
import NetflixDashboard from "../assets/portfolio/NetflixDashboard.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: NetflixDashboard,
      text: "Netflix Dashboard Analysis",
      year: "2023",
      href: "https://public.tableau.com/views/Netflix_Visualisation/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      id: 2,
      src: TaniBoen,
      text: "TaniBoen: E-commerce Fullstack Website",
      year: "2024",
      href: "https://github.com/bryandersonn/TaniBoen-Backend",
    },
    {
      id: 3,
      src: WearHouse,
      text: "WearHouse: Fullstack Dev",
      year: "2023",
      href: "https://github.com/bryandersonn/WearHouse",
    },
  ];

  return (
    <div
      name="portfolio"
      className="h-dvh-100 bg-gradient-to-b from-black to-gray-800 w-full text-white pt-40 pb-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-6"
          >
            Check out some of my work right here:
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, href, text, year }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col">
                <p className="m-2 font-bold">{text}</p>
                <p className="m-2">{year}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2 m-auto text-center w-1/5 p-2 text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md justify-content: center duration-200 hover:scale-105"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
