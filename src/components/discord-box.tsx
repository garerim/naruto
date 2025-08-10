'use client'

import { cn } from '@/lib/utils'
import { motion } from "motion/react"
import Link from 'next/link'
import { Button } from './ui/button'

export default function DiscordBox() {

  return (
    <motion.div
      className='relative flex flex-col md:flex-row items-center justify-center max-w-[1000px] w-full md:h-[320px] bg-blue-500 rounded-lg mx-4 mt-10 overflow-hidden'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <img src="/naruto-sasuke.webp" alt="discord-bg" className='w-full h-full object-fill' />
        <div className="absolute inset-0 bg-blue-500/70" />
      </div>
      <motion.img
        src="/madara.png"
        alt="Personnage Madara"
        className='w-[30%] h-full object-cover object-[0%_15%] z-20'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
      <div className='flex-1 flex flex-col justify-center items-center p-4 text-center z-20'>
        <h2 className='text-2xl text-white flex items-center gap-2'>
          <img src="/discord.svg" alt="discord" className='w-10 h-10' />
          REJOINS LE DISCORD
        </h2>
        <p className=' text-white mt-2 tracking-wide'>
          Rejoignez notre communaute sur Discord pour connaitre les dernieres nouveautes et les evenements.
        </p>
        <Link href="https://discord.gg/fms">
          <Button
            className={cn(
              "relative h-10 px-4 mt-4 overflow-hidden",
              "bg-zinc-900 dark:bg-zinc-100",
              "transition-all duration-200",
              "group",
            )}
          >
            <div
              className={cn(
                "absolute inset-0",
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                "opacity-40 group-hover:opacity-80",
                "blur transition-opacity duration-500"
              )}
            />

            <div className="relative flex items-center justify-center gap-2">
              <span className="text-white dark:text-zinc-900 text-lg tracking-wider">REJOINDRE LE DISCORD</span>
            </div>
          </Button>
        </Link>
      </div>
      <motion.img
        src="/hashirama.png"
        alt="Personnage Chojuro"
        className='w-[30%] h-full object-cover object-[-10%_10%] z-20 hidden md:block'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div>
  )
}
