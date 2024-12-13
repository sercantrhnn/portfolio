import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("PROJECTS", { returnObjects: true });
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
         {t("PROJECTS_TITLE", { defaultValue: "Projects" })}
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.link} target="_blank">
              <img
                className="mb-6 rounded hover:blur-sm transition-all duration-300"
                src={project.image}
                width={300}
                height={150}
                alt={project.title}
              />
              </a>
              
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h6 className="mb-2 font-semibold transition-transform duration-300 hover:-translate-y-1 hover:text-purple-500">
                  {project.title}
                </h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
