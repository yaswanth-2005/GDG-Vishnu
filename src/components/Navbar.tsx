'use client'

/*
    TODO:
        Add context pull-out section for hovering over announcement bar
*/

import React, { useState } from 'react'
import Image from 'next/image'

import { Link as ScrollLink, animateScroll } from 'react-scroll'
import Link from 'next/link'

import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { GoHome, GoQuestion, GoCodeOfConduct } from 'react-icons/go'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiTool } from 'react-icons/fi'

import { motion } from 'framer-motion'

import {
    ANNOUNCEMENT_TEXT,
    ANNOUNCEMENT_GRAD_COLOR,
} from '@/dispositions/general'

const diagonalGlideOverlay = '/assets/home/diagonal_slowglide_overlay.gif'
const mascot = '/'

export default function Navbar(): React.ReactNode {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [announceDismissed, setAnnounceDismissed] = useState(false)

    return (
        <div className='z-50 flex flex-col fixed w-full'>
            {/* Announcement Banner */}
            {/* {ANNOUNCEMENT_TEXT ? (
                <motion.div
                    onMouseDown={() => {
                        setAnnounceDismissed(true)
                    }}
                    className={`flex w-full px-6 h-[58px] sm:h-[40px] bg-gradient-to-b ${ANNOUNCEMENT_GRAD_COLOR} to-[#000000] justify-between items-center overflow-hidden`}
                    initial={{
                        opacity: 0,
                        translateY: '-100%',
                        position: 'static',
                    }}
                    animate={
                        !announceDismissed
                            ? { opacity: 1, translateY: '0%' }
                            : {
                                  opacity: 0,
                                  translateY: '-100%',
                                  position: 'absolute',
                              }
                    }
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <p className='w-full font-semibold text-xs sm:text-sm text-center text-orange-200'>
                        {ANNOUNCEMENT_TEXT}
                    </p>
                    <Image
                        width={600}
                        height={600}
                        src={diagonalGlideOverlay}
                        alt=''
                        className='absolute w-full opacity-5'
                        unoptimized
                    />
                    <p className='absolute text-neutral-600 bottom-2 text-xs lg:text-base font-semibold right-4 animate-pulse'>
                        press to dismiss
                    </p>
                </motion.div>
            ) : (
                <></>
            )} */}

            {/* Top Bar */}
            <motion.div
                className='z-20 flex relative h-[64px] px-4 justify-between items-center text-gray-300 bg-gradient-to-b from-[#000] to-transparent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            >
                <Image
                    width={68}
                    height={68}
                    src='/GDGC_LOGO.svg'
                    alt=''
                    className='z-20 drop-shadow-lg ml-4 rounded-2xl hover:rotate-180'
                    style={{ width: '48px' }}
                    unoptimized
                />

                {/* Navigation */}
                <ul className='hidden md:flex text-[15px]'>
                    <li className='text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                        <GoHome className='my-auto mr-2' />
                        <Link
                            href='/'
                            onMouseUp={() => {
                                animateScroll.scrollToTop()
                            }}
                        >
                            Home
                        </Link>
                    </li>

                    <li className='text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                        <FiTool className='my-auto mr-2' />
                        <Link href='/events'>Past Events</Link>
                    </li>

                    <li className='text-yellow-300 font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                        <HiOutlineRocketLaunch className='my-auto mr-2' />
                        <Link href='/hackathon'>Future Events</Link>
                    </li>

                    {/* <li className='text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                        <GoCodeOfConduct className='my-auto mr-2' />
                        <ScrollLink
                            to='recruitment'
                            offset={-1200}
                            smooth={true}
                            duration={2500}
                        >
                            Join Us!
                        </ScrollLink>
                    </li> */}
                </ul>

                {/* Mobile Menu */}
                {/* Mobile Menu */}
                {/* Mobile Menu */}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <div
                    className={
                        !nav
                            ? 'hidden'
                            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                    }
                >
                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <GoHome className='my-auto mr-2' />
                            <Link
                                href='.'
                                onMouseUp={() => {
                                    animateScroll.scrollToTop()
                                    handleClick()
                                }}
                            >
                                Home
                            </Link>
                        </div>

                        <div className='text-2xl text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <FiTool className='my-auto mr-2' />
                            <Link href='./events' onMouseUp={handleClick}>
                                Our Past Events
                            </Link>
                        </div>

                        <div className='text-2xl text-yellow-300 font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <HiOutlineRocketLaunch className='my-auto mr-2' />
                            <Link href='./hackathon' onMouseUp={handleClick}>
                                Our Future Hackathons
                            </Link>
                        </div>

                        {/* <div className='text-2xl text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <GoCodeOfConduct className='my-auto mr-2' />
                            <a
                                href='https://discord.gg/z5P9kccwRh'
                                onMouseUp={handleClick}
                            >
                                Join Us!
                            </a>
                        </div> */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
