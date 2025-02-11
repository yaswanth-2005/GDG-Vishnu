// 'use client'

// import Gallery from '../../components/Gallery'
// import { HackathonAlbum } from '../../dispositions/gallery'

// import IntroFade from '../../components/IntroFade'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// import { ReactTyped } from 'react-typed'

// import { useState, useEffect } from 'react'
// import GDGEvents from '@/components/GDGEvents'

// const backdrop = '/assets/hackathon/backdrop.png'
// const herologo = '/assets/hackathon/herologo.png'
// const SHOWTIME = new Date(2024, 11, 7, 6, 0, 0).getTime() // December 7, 2024, 00:00:00

// const ENDTIME = new Date(0).setSeconds(1714431600) 

// const GALLERY_TYPED_WORDS = [
//     'Experience Software Development',
//     'Experience Project Design',
//     'Experience Team Coordination',
//     'Experience Real-World Programming',
// ]

// export default function Hackathon() {
//     const [altFormat, setAltFormat] = useState(false)
//     const [countdown, setCountDown] = useState(0)

//     function secondsToDhms(seconds: number): string {
//         const negative = seconds < 0
//         seconds = Math.abs(seconds)
//         const d = Math.floor(seconds / (3600 * 24))
//         const h = Math.floor((seconds % (3600 * 24)) / 3600)
//         const m = Math.floor((seconds % 3600) / 60)
//         const s = Math.floor(seconds % 60)

//         if (altFormat) {
//             return (
//                 (d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '') +
//                 (m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '') +
//                 (h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '') +
//                 (s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '0 seconds') +
//                 (negative ? ' ago' : '')
//             )
//         }

//         return (
//             'T' +
//             (negative ? ' + ' : ' - ') +
//             d.toString().padStart(2, '0') +
//             ' : ' +
//             h.toString().padStart(2, '0') +
//             ' : ' +
//             m.toString().padStart(2, '0') +
//             ' : ' +
//             s.toString().padStart(2, '0')
//         )
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (SHOWTIME - Date.now() > 0) {
//                 setCountDown(SHOWTIME - Date.now())
//             } else {
//                 setCountDown(ENDTIME - Date.now())
//             }
//         }, 500)

//         return () => clearInterval(interval)
//     }, [countdown])

//     return (
//         <>
//             <IntroFade />
//             <div className='flex flex-col w-full h-screen justify-center items-center overflow-hidden'>
//                 <motion.div
//                     initial={{ transform: 'translateY(3%)' }}
//                     animate={{ transform: 'translateY(-3%)' }}
//                     transition={{
//                         duration: 3,
//                         ease: 'easeInOut',
//                         repeat: Infinity,
//                         repeatType: 'mirror',
//                     }}
//                 >
//                     <h1 className='font-bold font-Rubik text-[1.4rem] md:text-[4rem]'>
//                         {' '}
//                         Somthing Big ! Coming Soon !
//                     </h1>
//                     {/* <Image
//                         className='lg:h-[17vw] px-4 object-contain pointer-events-none'
//                         src={herologo}
//                         width={1000}
//                         height={1000}
//                         alt=''
//                     /> */}
//                 </motion.div>

//                 <motion.div
//                     className='-z-10 absolute w-full h-screen pointer-events-none'
//                     initial={{ transform: 'translateY(10%)' }}
//                     animate={{ transform: 'translateY(0%)' }}
//                     transition={{ duration: 3, ease: 'backOut' }}
//                 >
//                     <Image
//                         className='object-cover h-screen'
//                         src={backdrop}
//                         width={2880}
//                         height={2620}
//                         quality={50}
//                         alt=''
//                     />
//                 </motion.div>

//                 {/* <div className="text-8xl font-bold text-orange-200">Hackathon</div> */}
//                 <div
//                     className={
//                         'text-center font-bold font-Ubuntu mt-4 bg-slate-600 rounded-2xl p-2 px-12 ' +
//                         (altFormat
//                             ? 'sm:text-xl text-xl'
//                             : 'sm:text-4xl text-2xl')
//                     }
//                     onMouseEnter={() => {
//                         setAltFormat(true)
//                     }}
//                     onMouseLeave={() => {
//                         setAltFormat(false)
//                     }}
//                 >
//                     {`${secondsToDhms(countdown / 1000)}`}
//                 </div>

//                 <div className='text-sm sm:text-xl text-center font-bold mt-4 bg-[#44444470] rounded-2xl p-2 px-12 whitespace-pre-line'>
//                     {
//                         'Get ready to join us for an unforgettable event that will ignite your passion for innovation, and creativity. \n Stay tuned for more details and mark your calendars \nthis is one event you would not want to miss! 💥"'
//                     }
//                 </div>

//                 <div className='flex flex-col sm:flex-row mt-4 gap-3'>
                    
//                     <a href='/'>
//                         <div className='bg-[#ffd035a4] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
//                             🕒 Just a Few More Hours Left !
//                         </div>
//                     </a>
                    
//                 </div>
//             </div>

            
//             <div className='w-full bg-gradient-to-b from-slate-900 via-black to-black py-20'>
//                 <h1 className='title-main mx-auto text-4xl text-center sm:text-4xl font-extrabold text-white'>
//                     <ReactTyped
//                         strings={GALLERY_TYPED_WORDS}
//                         typeSpeed={50}
//                         backSpeed={75}
//                         backDelay={3000}
//                         loop
//                         className='bg-gradient-to-t from-white to-[#da5fff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,50,255,1)]'
//                     ></ReactTyped>
//                 </h1>

//                 <Gallery album={HackathonAlbum} />
//             </div>
//         </>
//     )
// }


'use client'

import Gallery from '../../components/Gallery'
import { HackathonAlbum } from '../../dispositions/gallery'
import IntroFade from '../../components/IntroFade'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactTyped } from 'react-typed'
import { useState, useEffect } from 'react'
import GDGEvents from '@/components/GDGEvents'

const backdrop = '/assets/hackathon/backdrop.png'
const herologo = '/assets/hackathon/herologo.png'
const SHOWTIME = new Date(2024, 11, 7, 6, 0, 0).getTime() // December 7, 2024, 06:00:00

const ENDTIME = new Date(0).setSeconds(1714431600)

const GALLERY_TYPED_WORDS = [
    'Experience Software Development',
    'Experience Project Design',
    'Experience Team Coordination',
    'Experience Real-World Programming',
]

export default function Hackathon() {
    const [countdown, setCountDown] = useState(0)

    function secondsToTimeFormat(seconds: number): string {
        const negative = seconds < 0
        seconds = Math.abs(seconds)
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = Math.floor(seconds % 60)

        return `${negative ? '-' : ''}${h} hour${h !== 1 ? 's' : ''}, ${m} minute${m !== 1 ? 's' : ''}, ${s} second${s !== 1 ? 's' : ''}`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (SHOWTIME - Date.now() > 0) {
                setCountDown(SHOWTIME - Date.now())
            } else {
                setCountDown(ENDTIME - Date.now())
            }
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <IntroFade />
            <div className='flex flex-col w-full h-screen justify-center items-center overflow-hidden'>
                <motion.div
                    initial={{ transform: 'translateY(3%)' }}
                    animate={{ transform: 'translateY(-3%)' }}
                    transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                >
                    <h1 className='font-bold font-Rubik text-[1.4rem] md:text-[4rem]'>
                        Something Big! Coming Soon!
                    </h1>
                </motion.div>

                <motion.div
                    className='-z-10 absolute w-full h-screen pointer-events-none'
                    initial={{ transform: 'translateY(10%)' }}
                    animate={{ transform: 'translateY(0%)' }}
                    transition={{ duration: 3, ease: 'backOut' }}
                >
                    <Image
                        className='object-cover h-screen'
                        src={backdrop}
                        width={2880}
                        height={2620}
                        quality={50}
                        alt=''
                    />
                </motion.div>

                <div className='text-center font-bold font-Ubuntu mt-4 bg-slate-600 rounded-2xl p-2 px-12 text-xl'>
                    {secondsToTimeFormat(countdown / 1000)}
                </div>

                <div className='text-sm sm:text-xl text-center font-bold mt-4 bg-[#44444470] rounded-2xl p-2 px-12 whitespace-pre-line'>
                    {
                        'Get ready to join us for an unforgettable event that will ignite your passion for innovation and creativity. \nStay tuned for more details and mark your calendars.\nThis is one event you would not want to miss! 💥'
                    }
                </div>

                <div className='flex flex-col sm:flex-row mt-4 gap-3'>
                    <a href='/'>
                        <div className='bg-[#ffd035a4] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            🕒 Just a Few More Hours Left!
                        </div>
                    </a>
                </div>
            </div>

            <div className='w-full bg-gradient-to-b from-slate-900 via-black to-black py-20'>
                <h1 className='title-main mx-auto text-4xl text-center sm:text-4xl font-extrabold text-white'>
                    <ReactTyped
                        strings={GALLERY_TYPED_WORDS}
                        typeSpeed={50}
                        backSpeed={75}
                        backDelay={3000}
                        loop
                        className='bg-gradient-to-t from-white to-[#da5fff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,50,255,1)]'
                    ></ReactTyped>
                </h1>

                <Gallery album={HackathonAlbum} />
            </div>
        </>
    )
}
