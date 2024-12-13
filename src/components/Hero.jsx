import React from "react";
import profilePic from "../assets/sercan.jpeg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-900  pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              {t("HERO_NAME", { defaultValue: "Sercan Turhan" })}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl -tracking-tight text-transparent"
            >
              {t("HERO_TITLE", { defaultValue: "Software Engineer" })}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {t("HERO_CONTENT")}
            </motion.p>
            <motion.a
              href="/cv/Sercan_TURHAN_CV.pdf"
              download
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
            >
              {t("HERO_DOWNLOAD_CV", { defaultValue: "Download CV" })}
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full"
              src={profilePic}
              alt={t("HERO_IMAGE_ALT", { defaultValue: "Sercan Turhan" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
