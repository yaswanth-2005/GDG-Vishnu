'use client'

import Image from 'next/image'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const loader = '/assets/bits/loader.gif'

export default function IntroFade(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
            className='z-30 flex flex-col items-center justify-center pointer-events-none absolute w-full h-screen bg-black'
        >
            <Image
                src='/GDGC_LOGO.svg'
                className='opacity-90 animate-pulse'
                alt=''
                width={100}
                height={100}
                unoptimized
            />
            <div className='text-load z-20 flex gap-4 font-montserrat text-lg text-white [&>p]:opacity-0'>
                <p>Connect</p>
                <p>Learn</p>
                <p>Grow</p>
            </div>

            {/* <p className="text-neutral-500">Loading...</p> */}
        </motion.div>
    )
}
