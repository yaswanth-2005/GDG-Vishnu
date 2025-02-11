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
export const Hero2 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <section
            id='home'
            className='relative m-auto grid overflow-hidden  h-screen place-items-center md:h-screen'
        >
            {/* <h1 className='text-mainTitle z-10 flex translate-y-24 flex-col gap-3 md:gap-5 xl:gap-6 [&>*]:[clipPath:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]'>
                <p className='h1-anim'>Powered by Intellect,</p>
                <p className='h1-anim'>Driven by Values</p>
            </h1> */}

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
                 sm:text-[32px] md:text-[45px] xl:text-[72px] text-shadow
                  shadow-black font-bold text-white mx-4 my-[6px]
                   sm:my-[-8px]'
                >
                    Google Developer Groups at VITB
                </h1>

                <h1 className='z-20 title-main text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-shadow shadow-black font-bold text-white my-4'>
                    <span className='lg:hidden block text-[7rem]   space-x-3 tracking-wide my-4'>
                        GDG
                    </span>
                </h1>

                <div className='z-20 my-4 md:my-6 title-main w-full text-white text-center text-shadow shadow-black text-lg sm:text-xl'>
                    <p>GDG is officially live and Innovation starts here !</p>
                    <h1 className='title-main font-bold sm:text-[24px] text-2xl sm:pt-[10px]'>
                        {'>'} We{' '}
                        <ReactTyped
                            className='text-yellow-500 drop-shadow-[0_0_12px_rgba(245,210,140,210)]'
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
                    <IoMdArrowRoundDown className='absolute w-full h-full group-hover:translate-y-0 -translate-y-[100%] duration-300 bg-gradient-to-t from-[#4030f1ec] to-[#ffffff91] pointer-events-none' />
                    <button className='flex w-full justify-center p-2 font-semibold text-shadow-lg shadow-black hover:bg-blue-600 bg-neutral-900 bg-opacity-50 duration-300 hover:border-green-300 overflow-hidden'>
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
            <Image
                priority
                src='/images/elements/gridsDotted.png'
                alt='Dotted Grids'
                fill
                className='pointer-events-none object-contain object-top opacity-75 xl:-translate-y-96'
            />
            <div>
                <Image
                    priority
                    src='/images/gradients/gradientMain.png'
                    alt='Google Color Gradients'
                    fill
                    className='pointer-events-none object-contain object-bottom'
                />
                <Image
                    priority
                    src='/images/elements/gdscLines.png'
                    alt='Google Color Lines bro '
                    fill
                    className='pointer-events-none z-[-1] translate-y-56 object-contain object-bottom px-8 md:translate-y-[27rem] lg:translate-y-[30rem]'
                />
                <Image
                    id='gdsc-glass-logo'
                    priority
                    src='/images/elements/gdscLogoGlass.png'
                    alt='GDSC Logo Glass'
                    height={500}
                    width={1200}
                    className='pointer-events-none absolute bottom-0 -right-4 translate-y-1/2 scale-90 opacity-0'
                />
                <Image
                    id='arrow-down'
                    priority
                    src='/images/elements/arrowDown.png'
                    alt='Arrow Down'
                    height={300}
                    width={300}
                    className='pointer-events-none absolute -left-[5.5rem] -bottom-5 translate-y-1/2 scale-[0.3] opacity-0 mix-blend-overlay sm:bottom-10 sm:-left-12 sm:scale-[0.5] md:bottom-48 xl:left-0 xl:scale-[0.7] 2xl:left-32 2xl:scale-[.80]'
                />
            </div>
        </section>
    )
}
