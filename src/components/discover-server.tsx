import { motion } from 'motion/react'

export default function DiscoverServer() {
  return (
    <motion.div
      className='relative flex max-w-[1000px] w-full h-auto md:h-[320px] bg-green-500 rounded-lg mx-4 mt-10 p-4 overflow-hidden z-10'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src="/ichiraku.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover object-[0%_60%] md:object-fill' />
      
      <div className='relative z-10 flex flex-col md:flex-row w-full h-full gap-4'>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2 h-full p-6'>
          <div className='text-center'>
            <h2 className='text-3xl text-white mb-4 drop-shadow-lg'>
              Venez decouvrir notre serveur
            </h2>
            <p className='text-lg text-white/90 drop-shadow-md'>
              Vivez des aventures epiques dans un monde unique !
            </p>
          </div>
        </div>

        <div className='flex items-center justify-center w-full md:w-3/5 h-full'>
          <iframe
            src="https://www.youtube.com/embed/PRjxIrfnhQI"
            title="FMS-NarutoRoleplay"
            className='w-full h-full rounded-lg shadow-lg'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  )
}
