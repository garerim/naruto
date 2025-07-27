import { motion } from 'motion/react'
import { Button } from './ui/button';
import { toast } from 'sonner';

interface JoinServerProps {
    players: {
        online: number;
        max: number;
        list: Array<{
            name: string;
            uuid: string;
        }>;
    } | undefined;
}

export default function JoinServer({ players }: JoinServerProps) {

    const list = players?.list;

    const get3FirstPlayers = () => {
        if (!list) return [];
        // return players.list.slice(0, 3);
        return list.slice(0, 3);
    }

    const onClick = () => {
        navigator.clipboard.writeText('jedzhfujzhjebfjbz.mine.fun')
        toast('IP copiée dans le presse-papiers')
      }

    return (
        <motion.div
            id='play'
            className='relative flex max-w-[1000px] w-full h-auto md:h-[320px] bg-green-500 rounded-lg mx-4 mt-10 p-4 overflow-hidden z-10'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <img src="/fight.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover' />

            <div className='relative z-10 flex flex-col md:flex-row w-full h-full gap-4'>
                <div className='flex flex-col justify-center items-center w-full md:w-1/2 h-full p-6'>
                    <div className='text-center'>
                        <h2 className='text-3xl text-white mb-4 drop-shadow-lg'>
                            Prenez part a l'aventure !
                        </h2>
                        <p className='text-lg text-white/90 drop-shadow-md'>
                            Rejoignez les autres ninjas sur notre serveur !
                        </p>
                        <p className='text-white/90 drop-shadow-md text-xl mt-12'>
                            Minecraft Version : 1.21.4
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-center w-full md:w-3/5 h-full'>
                    <div className='bg-black/40 backdrop-blur-sm rounded-lg p-4 w-full max-w-xs'>
                        <h3 className='text-lg text-white mb-3 text-center'>
                            Joueurs connectes
                        </h3>
                        <div className='space-y-2'>
                            {list && list.length > 0 ? get3FirstPlayers().map((player, index) => (
                                <motion.div
                                    key={player.uuid}
                                    className='flex items-center justify-between bg-white/10 rounded-lg p-2 backdrop-blur-sm'
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className='flex items-center gap-2'>
                                        <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                                            <span className='text-white text-sm'>
                                                {player.name.charAt(0)}
                                            </span>
                                        </div>
                                        <span className='text-white font-medium text-md'>{player.name}</span>
                                    </div>
                                    <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                </motion.div>
                            )) : (
                                <div className='text-center mt-3 mb-2'>
                                    <span className='text-white/70 text-xs'>
                                        Aucun joueur connecte
                                    </span>
                                </div>
                            )}
                        </div>
                        {list && list.length > 3 && (
                            <div className='text-center mt-3 mb-2'>
                                <span className='text-white/70 text-xs'>
                                    + {list.length - 3} autres joueurs
                                </span>
                            </div>
                        )}
                        <div className='mt-4 text-center'>
                            <Button className='bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm' onClick={onClick}>
                                🎮 Rejoindre le serveur
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
