'use client'

import { Element } from 'react-scroll'
import Image from 'next/image'

export default function Recruitment(): React.ReactNode {
    return (
        <div className='w-full h-[220vh] relative overflow-hidden'>
            {/* top        */}
            <div className='absolute top-0 w-full h-[15%] bg-gradient-to-b from-black to-transparent' />
            {/* bottom     */}
            <div className='absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#0a0a0a] to-transparent' />

            <Image
                src='/vit_pics/vitb1.jpg'
                width={1600}
                height={1600}
                alt=''
                className='-z-10 bg-white object-cover aspect-auto` absolute w-full h-full opacity-[80%]'
                priority
            />

            <div className='w-full h-[110vh] flex absolute bottom-[12rem] flex-col gap-4 justify-center items-center'>
                <Image
                    src='/GDGC_LOGO.svg'
                    width={100}
                    height={100}
                    alt=''
                    className='z-10 hover:!scale-105 transition duration-300 ease-out'
                    unoptimized
                />

                <div className='pt-4 pb-10'>
                    <h1 className='title-main w-full text-center text-4xl font-semibold'>
                        <span className='text-green-400 drop-shadow-[0_0_10px_rgba(50,250,50,0.45)]'>
                            Join Us.{' '}
                        </span>
                        <span className='text-yellow-300 drop-shadow-[0_0_10px_rgba(255,250,50,0.45)]'>
                            Google Developer Groups.
                        </span>
                    </h1>
                    <h1 className='title-main w-full text-center text-3xl md:text-5xl font-semibold mt-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'>
                        Open to all for 2024 - 2025.
                    </h1>
                    <h1 className='title-main w-full text-center text-xl font-semibold mt-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] animate-pulse'>
                        Join our Community on Linkedin now below!
                    </h1>
                </div>

                <Element name='recruitment' />
            </div>
        </div>
    )
}
