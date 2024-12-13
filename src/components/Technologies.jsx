import React from 'react'
import { RiGitBranchFill, RiNodejsFill, RiPhpLine, RiReactjsLine, RiSupabaseFill } from 'react-icons/ri'
import { SiDocker, SiMongodb } from 'react-icons/si'
import { motion } from "motion/react";
import { animate } from 'motion';
import { useTranslation } from 'react-i18next';

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

export default function Technologies() {
    const { t } = useTranslation();
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl' > {t("TECHNOLOGIES",  { defaultValue: "Technologies" })} </motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine  className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiPhpLine  className='text-7xl text-purple-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb  className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiGitBranchFill  className='text-7xl text-red-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsFill  className='text-7xl '/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiSupabaseFill  className='text-7xl text-green-800'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDocker  className='text-7xl text-blue-500'/>
            </motion.div>
            

        </motion.div>
    </div>
  )
}
