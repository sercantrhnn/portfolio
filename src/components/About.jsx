import React from "react";
import about from "../assets/about.jpg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        {t("ABOUT_TITLE", { defaultValue: "About" })}{" "}
        <span className="text-neutral-500">
          {t("ABOUT_SUBTITLE", { defaultValue: "Me" })}
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <img className="rounded-2xl" src={about} alt="about" />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{t("ABOUT_TEXT")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
