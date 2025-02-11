'use client'

import React from 'react'
import { ReactTyped } from 'react-typed'
import { Element } from 'react-scroll'

import Image from 'next/image'

import { IoMdArrowRoundDown } from 'react-icons/io'
import { Link } from 'react-scroll'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TYPED_KEYWORDS = [
    'Design Projects',
    'Pioneer',
    'Optimize',
    'Build',
    'Compile',
    'Web Design',
    '$ yarn build',
    '3D-Model',
    'Deploy',
    'Problem-Solve',
    'Interpret',
    'Game Design',
    'Collaborate',
    'Develop',
    'Delegate',
    '$ git commit',
]

const backdrop = '/vitb.jpg'
const heroOverlay = '/assets/home/hero_overlay_gray.gif'

export default function Hero(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <div className='w-full h-screen  bg-ew'>
            <Element name='hero' />

            <div className='absolute w-full h-full pointer-events-none overflow-hidden'>
                <motion.div
                    className='w-full h-full'
                    initial={{ transform: 'translateY(10%)', opacity: '0%' }}
                    animate={
                        isInView
                            ? { transform: 'translateY(0%)', opacity: '100%' }
                            : { transform: 'translateY(10%)', opacity: '0%' }
                    }
                    transition={{ duration: 3, ease: 'backOut' }}
                    ref={ref}
                >
                    {/* Actual backdrop image */}
                    <Image
                        width={1920}
                        height={1080}
                        className='absolute w-full h-full blur-[0px] object-cover'
                        src={backdrop}
                        alt=''
                        priority
                    />

                    {/* Hero .gif overlay */}
                    <Image
                        width={1920}
                        height={1080}
                        src={heroOverlay}
                        className='absolute top-0 w-full h-full drop-shadow-lg opacity-5 sm:opacity-10'
                        alt=''
                        unoptimized
                        priority
                    />
                </motion.div>
            </div>

            <div className='absolute w-full h-full mx-auto flex flex-col items-center justify-center pb-24'>
                {/* mascot */}
                <Image
                    width={80}
                    height={80}
                    src='/GDGC_LOGO.svg'
                    alt='logo'
                    unoptimized
                    className='z-20 hover:scale-105 transition-all duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                />

                {/* The main texts */}
                <h1
                    className='z-20 title-main text-center text-[20px]
                 sm:text-[32px] md:text-[38px] xl:text-[52px] text-shadow
                  shadow-black font-bold text-white mx-4 my-[2px]
                   sm:my-[-8px]'
                >
                    Google Developer Groups at VITB
                </h1>

                <div className='z-20 title-main w-full text-white text-center text-shadow shadow-black text-lg sm:text-xl'>
                    <p>Elevate Your Code—the Sky&apos;s the Limit.</p>
                    <h1 className='title-main font-bold sm:text-[24px] text-2xl sm:pt-[10px]'>
                        {'>'} We{' '}
                        <ReactTyped
                            className='text-[#FCD690] drop-shadow-[0_0_12px_rgba(245,210,140,210)]'
                            strings={TYPED_KEYWORDS}
                            typeSpeed={120}
                            backSpeed={80}
                            backDelay={2000}
                            fadeOut={true}
                            loop
                        />{' '}
                        {'<'}
                    </h1>
                </div>

                {/* Currently requires a weird arbit. offset of -180 for this particular scroll */}
                <Link
                    to='about'
                    smooth={true}
                    offset={-140}
                    duration={1500}
                    className='z-20 mt-2 relative group w-[230px] active:scale-95 duration-150 hover:border-green-900 border-white rounded-2xl hover:outline hover:outline-[4px] active:outline-4 text-white text-lg title-main drop-shadow-[0_16px_20px_rgba(0,0,0,0.7)] overflow-hidden'
                >
                    <IoMdArrowRoundDown className='absolute w-full h-full group-hover:translate-y-0 -translate-y-[100%] duration-300 bg-gradient-to-t from-[#16a34aec] to-[#ffffff91] pointer-events-none' />
                    <button className='flex w-full justify-center p-2 font-semibold text-shadow-lg shadow-black hover:bg-green-600 bg-neutral-900 bg-opacity-50 duration-300 hover:border-green-300 overflow-hidden'>
                        <p className='text-center'>I&apos;m Interested</p>
                    </button>
                </Link>
            </div>

            <div>
                {/* top        */}
                <div className='absolute top-0 w-full h-[15%] bg-gradient-to-b from-black to-transparent' />
                {/* bottom     */}
                <div className='absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent' />
                {/* cent-left  */}
                <div className=' absolute top-0 left-[25%] w-[25%] h-screen bg-gradient-to-l from-[#00000035] sm:from-[#00000075] to-transparent' />
                {/* cent-right */}
                <div className=' absolute top-0 right-[25%] w-[25%] h-screen bg-gradient-to-r from-[#00000035] sm:from-[#00000075] to-transparent' />
            </div>
        </div>
    )
}
