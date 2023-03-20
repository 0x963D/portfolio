import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { LinkIcon } from "@heroicons/react/24/outline";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  const [maxIcons, setMaxIcons] = useState(18);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 280) {
        setMaxIcons(5);
      } else if (window.innerWidth <= 320) {
        setMaxIcons(6);
      } else if (window.innerWidth <= 375) {
        setMaxIcons(7);
      } else if (window.innerWidth <= 425) {
        setMaxIcons(8);
      } else if (window.innerWidth <= 540) {
        setMaxIcons(10);
      } else if (window.innerWidth <= 768) {
        setMaxIcons(13);
      } else {
        setMaxIcons(18);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGold/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-28 xl:h-80 md:h-72 object-contain"
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <div className="flex items-center space-x-2 justify-center ">
                <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold">
                  <span className="underline decoration-darkGold/50">
                    Project {i + 1}:
                  </span>{" "}
                  {project?.title}
                </h4>
                <a href={project?.linkToBuild} target="_blank" rel="noreferrer">
                  <LinkIcon className="h-6 w-6" />
                </a>
              </div>
              <div className="flex items-center space-x-2 justify-center ">
                {project?.technologies.slice(0, maxIcons).map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-10 w-10 rounded-full object-cover"
                    src={urlFor(technology?.image).url()}
                    alt=""
                    width={3360}
                    height={1676}
                  />
                ))}
              </div>

              <p className="text-sm md:text-md lg:text-lg text-justify ">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGold/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
