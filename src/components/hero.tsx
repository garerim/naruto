'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Mouse, User } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from "motion/react"

interface HeroProps {
  playersOnline?: number;
}

export default function Hero({ playersOnline }: HeroProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const onClick = () => {
    navigator.clipboard.writeText('jedzhfujzhjebfjbz.mine.fun')
    toast('IP copiée dans le presse-papiers')
  }

  return (
    <div className='relative flex flex-col items-center justify-center h-screen w-full'>
      <img
        src={mounted && theme === 'dark' ? "/bg-dark.png" : "/bg.png"}
        alt="hero"
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none' />
      <div className='absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-4'>
        <motion.img src="/logo.png" alt="logo" className='w-[350px] h-auto object-cover' initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} />
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Button className='relative bg-blue-500 hover:bg-blue-600 text-white text-3xl py-6 px-12 flex items-center justify-center' onClick={onClick}>
            PLAY.FMS.FR
            {playersOnline !== undefined && (
              <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full border-2 border-white shadow-lg flex items-center justify-center gap-2'>
                {/* <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse' /> */}
                <span className='text-white text-xs'>{playersOnline}</span>
                <User className='w-4 h-4 stroke-2' />
              </div>
            )}
          </Button>
        </motion.div>
      </div>
      <Mouse className='absolute bottom-20 left-1/2 -translate-x-1/2 w-10 h-10 text-white animate-bounce' />
    </div>
  )
}