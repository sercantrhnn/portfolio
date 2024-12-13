import React from 'react'
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5}}
        className='my-10 text-center text-4xl'>{t("CONTACT_TITLE", { defaultValue: "Get in Touch" })}</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className='my-4'>{t("CONTACT.address")}</motion.p>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className='my-4'>{t("CONTACT.phoneNo")}</motion.p>
            <a
              href={`mailto:${t("CONTACT.email")}`} 
              className='border-b'
            >
              {t("CONTACT.email")}
            </a>
        </div>
    </div>
  )
}
