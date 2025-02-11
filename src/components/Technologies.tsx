'use client'

import React from 'react'
import { ReactTyped } from 'react-typed'
import { Element } from 'react-scroll'

import useSound from 'use-sound'

import { motion } from 'framer-motion'

import {
    SiKotlin,
    SiRobloxstudio,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiCurseforge,
    SiPython,
    SiLua,
    SiRust,
    SiCplusplus,
    SiNodedotjs,
    SiBlender,
} from 'react-icons/si'
import { GrJava, GrReactjs } from 'react-icons/gr'

const SECTION_TYPED_KEYWORDS = [
    'Design',
    'Libraries',
    'Development Suites',
    'Frameworks',
    'Linux Distributions',
    'Databases',
    'Languages',
]

const sfxClick = '/assets/sound_fx/click.mp3'
const conveyorFront = '/assets/home/conveyor_front.png'
const kittyAstro = '/assets/home/kitty_astro.png'

const TECH_TEXT_CLASSES =
    'title-main my-auto mx-10 font-semibold text-xl md:text-2xl'
const TECH_ICON_CLASSES = 'my-auto w-[60px] md:w-[72px] h-full'
const TECH_ICON_SHADOW = { filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))' }

/*

    TODO: Add these to dedicated disposition

    TODO: Add the following technologies:
        - Arduino
        - Figma
        - Visual Studio Code
        - GitHub
        - Git
        - Spline
        - Swift
        - C#
        - Make/Integromat
        - Tailwind CSS

*/

const TECHNOLOGIES: { [key: string]: JSX.Element } = {
    Rust: (
        <SiRust
            color='rgb(255, 150, 100)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    JavaScript: (
        <SiJavascript
            color='rgb(255, 220, 50)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    HTML: (
        <SiHtml5
            color='rgb(255, 80, 50)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    CSS: (
        <SiCss3
            color='rgb(100, 140, 255)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    TypeScript: (
        <SiTypescript
            color='#3178C6'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    Forge: (
        <SiCurseforge
            color='rgb(255, 120, 77)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    Python: (
        <SiPython
            color='rgb(255, 230, 100)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    // Lua: (
    //     <SiLua
    //         color='#3178C6'
    //         className={TECH_ICON_CLASSES}
    //         style={TECH_ICON_SHADOW}
    //     />
    // ),
    Kotlin: (
        <SiKotlin
            color='rgb(135, 93, 247)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    'Node.js': (
        <SiNodedotjs
            color='rgb(109, 200, 95)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    Studio: (
        <SiRobloxstudio
            color='rgb(0, 203, 255)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    'C++': (
        <SiCplusplus
            color='rgb(50, 150, 240)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    Java: (
        <GrJava
            color='rgb(255, 120, 60)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    'React.js': (
        <GrReactjs
            color='rgb(88, 210, 243)'
            className={TECH_ICON_CLASSES}
            style={TECH_ICON_SHADOW}
        />
    ),
    // Blender: (
    //     <SiBlender
    //         color='rgb(255, 120, 60)'
    //         className={TECH_ICON_CLASSES}
    //         style={TECH_ICON_SHADOW}
    //     />
    // ),
}

export default function Technologies(): React.ReactNode {
    const [playSfx_Click] = useSound(sfxClick)

    return (
        <div className='w-full h-full mt-60 text-gray-300 overflow-hidden'>
            <Element name='tech' />

            <motion.img
                width={100}
                height={100}
                src='/GDGC_LOGO.svg'
                className='mx-auto my-4 md:my-10 hover:!scale-105 transition duration-300 ease-out'
                initial={{ transform: 'translateY(-10%)' }}
                animate={{ transform: 'translateY(10%)' }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'mirror',
                    type: 'tween',
                    ease: 'linear',
                    duration: 2,
                }}
            />

            {/* optional shadow for title (looks fine): drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] */}
            <h1 className='title-main mx-auto p-4 text-3xl text-center sm:text-[40px] font-extrabold text-[#e7e9ef]'>
                <span className='text-shadow shadow-gray-700'>
                    Join us in Exploring{' '}
                </span>
                <ReactTyped
                    strings={SECTION_TYPED_KEYWORDS}
                    typeSpeed={50}
                    backSpeed={75}
                    backDelay={5000}
                    loop
                    className='bg-gradient-to-t from-yellow-300 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(50,255,100,0.7)]'
                ></ReactTyped>
            </h1>

            {/* old test */}
            {/* <h1 className="my-10 title-main text-2xl bg-gradient-to-t from-white to-green-400 bg-clip-text text-transparent inline-block w-full  text-center sm:text-4xl font-bold">Sample Text</h1> */}

            <div className='relative'>
                {/* left   */}{' '}
                <div className='z-10 absolute bg-gradient-to-r from-black to-transparent left-0 h-full w-[28vw] pointer-events-none'></div>
                {/* right  */}{' '}
                <div className='z-10 absolute bg-gradient-to-l from-black to-transparent right-0 h-full w-[28vw] pointer-events-none'></div>
                {/* <div className="z-10 flex my-10 h-[10vw] bg-contain bg-center" style={{backgroundImage: `url(${conveyorTreading})`}}> */}
                <div
                    className='flex my-10 h-[160px] bg-repeat-x bg-bottom'
                    style={{ backgroundImage: `url(${conveyorFront})` }}
                >
                    <motion.div
                        className='flex h-full'
                        initial={{ transform: 'translateX(-100%)' }}
                        animate={{ transform: 'translateX(100vw)' }}
                        transition={{
                            repeat: Infinity,
                            type: 'tween',
                            ease: 'linear',
                            duration: 36,
                        }}
                    >
                        {Object.entries(TECHNOLOGIES).map(
                            ([technology_name]) => {
                                return (
                                    <div
                                        onMouseEnter={() => playSfx_Click()}
                                        key={technology_name}
                                        className='flex h-[90px] md:h-[110px] mt-[22px] md:mt-0 mx-5 hover:mx-7  hover:scale-110 duration-300 bg-[#000000bb] outline outline-1 outline-white text-white rounded-xl pl-6'
                                    >
                                        {TECHNOLOGIES[technology_name]}
                                        <ReactTyped
                                            strings={[technology_name]}
                                            className={TECH_TEXT_CLASSES}
                                        ></ReactTyped>
                                    </div>
                                )
                            }
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
