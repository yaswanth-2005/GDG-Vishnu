import Link from 'next/link'

import Image from 'next/image'

import { SiDiscord, SiLinkedin, SiGithub, SiLinktree } from 'react-icons/si'

export default function Footer() {
    return (
        <div className='w-full h-full bg-gradient-to-b from-neutral-800 dark:from-neutral-950 to-neutral-950 dark:to-black text-lg font-semibold pt-4 text-center'>
            {/* <p className='font-semibold'>Let&apos;s connect.</p> */}

            <div className='flex flex-row flex-wrap gap-3 justify-center py-4 overflow-x-hidden'>
                {/* <Link
                    
                    target='_blank'
                >
                    <button className='flex group w-full justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-blue-800 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiDiscord className='my-auto group-hover:text-white' />
                        Discord
                    </button>
                </Link> */}
                {/* 
                <Link
                    href='https://www.linkedin.com/company/computer-science-club-skyline/'
                    target='_blank'
                >
                    <button className='flex group w-full justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-red-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiLinkedin className='my-auto group-hover:text-white' />
                        LinkedIn
                    </button>
                </Link>

                <Link
                    href='https://github.com/Skyline-College-Computer-Science-Club/'
                    target='_blank'
                >
                    <button className='flex group w-full justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-1 py-2 px-4 active:scale-95 hover:bg-yellow-700 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-yellow-700 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiGithub className='my-auto group-hover:text-white' />
                        GitHub
                    </button>
                </Link> */}

                {/* <Link href='https://linktr.ee/skylinecsc' target='_blank'>
                    <button className='flex group w-full justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-green-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-green-700 active:outline-neutral-200 duration-200 active:duration-200'>
                        <SiLinktree className='my-auto group-hover:text-white' />
                        LinkTree
                    </button>
                </Link> */}
            </div>

            <div className='pt-4 pb-10'>
                <Link href='/https://www.linkedin.com/in/imjubairahmed/' target='_blank'>
                    <p className='text-red-500 text-sm sm:text-lg'>
                        Made with 💞 by students, for students.
                    </p>
                </Link>
                <p className='text-neutral-500 text-sm sm:text-lg'>
                    Copyright ©️ GDG Vishnu 2022-2025
                </p>
            </div>
        </div>
    )
}
