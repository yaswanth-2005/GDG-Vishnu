import React, { useState, useEffect } from 'react'
import { BiCalendarEvent } from 'react-icons/bi'
import { PiToiletPaperDuotone } from 'react-icons/pi'
import { SiLinkedin, SiInstagram, SiGithub, SiSlideshare } from 'react-icons/si'
import Link from 'next/link'
import {
    CLUB_MEETING_DAY,
    CLUB_MEETING_HOUR,
    CLUB_MEETING_LOCATION,
} from '../dispositions/general'
import Countdown from './Countdown'

function getNextDayOfWeek(dayOfWeek: number) {
    const today = new Date()
    const result = new Date(today)
    result.setDate(today.getDate() + ((dayOfWeek + 7 - today.getDay()) % 7))
    result.setHours(parseInt(CLUB_MEETING_HOUR.split(':')[0], 10))
    result.setMinutes(parseInt(CLUB_MEETING_HOUR.split(':')[1], 10))
    result.setSeconds(0)
    result.setMilliseconds(0)
    return result
}

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export default function Overview(): React.ReactNode {
    const [nextMeeting, setNextMeeting] = useState(
        getNextDayOfWeek(CLUB_MEETING_DAY)
    )

    useEffect(() => {
        const timer = setInterval(() => {
            setNextMeeting(getNextDayOfWeek(CLUB_MEETING_DAY))
        }, 60000) // Update every minute

        return () => clearInterval(timer)
    }, [])

    const nextMeetingDay = daysOfWeek[CLUB_MEETING_DAY]
    const meetingTimeFormattedHour = nextMeeting.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit',
    })

    return (
        <div className=' py-10 flex flex-col justify-center items-center black'>
            <div className='w-full py-10 flex flex-col md:flex-row justify-center items-center gap-x-0 md:gap-x-16 gap-y-6'>
                {/* <div className='w-full md:w-[28vw] px-6 md:px-0'>
                    <h1 className='title-main text-4xl font-semibold'>
                        Our Group Meetings
                    </h1>
                    <h2 className='text-neutral-400'>
                        In-person festivities and member meet-ups!
                    </h2>
                    <div className='w-full h-[1px] bg-neutral-400 my-3' />

                    <h2 className='title-main text-neutral-400 font-semibold'>
                        ⏰ WHEN
                    </h2>
                    <h2 className='title-main text-3xl font-semibold'>
                        Weekly,{' '}
                        <span className='text-[#FCD690] font-bold'>
                            {nextMeetingDay}s
                        </span>{' '}
                        at{' '}
                        <span className='text-blue-200 font-bold'>
                            {meetingTimeFormattedHour}.
                        </span>
                    </h2>
                    <div className='text-neutral-300 italic'>
                        Next meeting will be on {nextMeetingDate}, which is in:
                    </div>
                    <Countdown
                        timestamp={new Date(
                            `${nextMeetingDate} ${CLUB_MEETING_HOUR}`
                        ).getTime()}
                        className='my-4'
                    />

                    <h2 className='title-main text-neutral-400 font-semibold'>
                        📍 WHERE
                    </h2>
                    <div className='title-main text-neutral-300 text-xl'>
                        <span className='font-semibold'>
                            {CLUB_MEETING_LOCATION}
                        </span>
                    </div>
                    <div className='text-neutral-300'>
                        You can also tune-in remotely on our{' '}
                        <Link
                            href={'https://www.instagram.com/gdg_vitb/'}
                            target='_blank'
                            className='text-purple-400 font-semibold'
                        >
                            Instagram
                        </Link>{' '}
                        Page
                    </div>

                    <Link
                        href={'https://www.linkedin.com/company/gdg-vitb/'}
                        target='_blank'
                        className='text-purple-400 font-semibold'
                    >
                        <p className='w-52 p-2 my-2 text-sm text-center font-semibold hover:animate-pulse bg-yellow-900 rounded-lg'>
                            🔔 Do Follow us in Linkedin
                        </p>
                    </Link>
                </div> */}

                <div className='w-full md:w-[28vw] px-6 md:px-0'>
                    <h1 className='title-main text-4xl font-semibold'>
                        Our Group Meetings
                    </h1>
                    <h2 className='text-neutral-400'>
                        In-person festivities and member meet-ups!
                    </h2>
                    <div className='w-full h-[1px] bg-neutral-400 my-3' />

                    <h2 className='title-main text-neutral-400 font-semibold'>
                        ⏰ WHEN
                    </h2>
                    <h2 className='title-main text-3xl font-semibold'>
                        Weekly,{' '}
                        <span className='text-[#FCD690] font-bold'>
                            {nextMeetingDay}s
                        </span>{' '}
                        at{' '}
                        <span className='text-blue-200 font-bold'>
                            {meetingTimeFormattedHour}.
                        </span>
                    </h2>
                    <div className='text-neutral-300 italic'>
                        Next meeting will be on{' '}
                        {nextMeeting.toLocaleDateString()}, which is in:
                    </div>
                    <Countdown
                        timestamp={nextMeeting.getTime()}
                        className='my-4'
                    />

                    <h2 className='title-main text-neutral-400 font-semibold'>
                        📍 WHERE
                    </h2>
                    <div className='title-main text-neutral-300 text-xl'>
                        <span className='font-semibold'>
                            {CLUB_MEETING_LOCATION}
                        </span>
                    </div>
                    <div className='text-neutral-300'>
                        You can also tune-in remotely on our{' '}
                        <Link
                            href={'https://www.instagram.com/gdg_vitb/'}
                            target='_blank'
                            className='text-purple-400 font-semibold'
                        >
                            Instagram
                        </Link>{' '}
                        Page
                    </div>

                    <Link
                        href={'https://www.linkedin.com/company/gdg-vitb/'}
                        target='_blank'
                        className='text-purple-400 font-semibold'
                    >
                        <p className='w-52 p-2 my-2 text-sm text-center font-semibold hover:animate-pulse bg-yellow-900 rounded-lg'>
                            🔔 Do Follow us on LinkedIn
                        </p>
                    </Link>
                </div>
                <div className='hidden md:block w-[1px] h-[500px] bg-neutral-500' />

                <div className='w-full md:w-[28vw] px-6 md:px-0 text-right'>
                    <h1 className='title-main text-4xl font-semibold'>
                        GDG Success Stories
                    </h1>
                    <h2 className='text-neutral-400'>
                        Good-to-know information about our past events
                    </h2>
                    <div className='w-full h-[1px] bg-neutral-400 my-3' />

                    <div className='flex flex-row-reverse flex-wrap font-semibold gap-x-2 gap-y-2'>
                        <Link
                            href='/'
                            target='_blank'
                            className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-fuchsia-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'
                        >
                            <PiToiletPaperDuotone className='group-hover:text-lg' />
                            Hack-a-tron
                        </Link>
                        <Link
                            href='0
                            '
                            target='_blank'
                            className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-green-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'
                        >
                            <SiSlideshare className='group-hover:text-lg' />
                            Re Imagine
                        </Link>
                        {/* <Link
                            href='/'
                            // target='_blank'
                            className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-blue-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'
                        >
                            <BiCalendarEvent className='group-hover:text-lg' />
                            Club Events Timeline
                        </Link> */}

                        {/* <Link
                            href='https://gdg-certificates.vercel.app/'
                            target='_blank'
                            className='flex flex-row items-center group px-3 hover:px-5 py-2 bg-yellow-950 bg-opacity-60 hover:bg-opacity-80 transition-all rounded-lg gap-x-2'
                        >
                            <SiGithub className='group-hover:text-lg' />
                            GEN AI STUDY JAMS
                        </Link> */}
                    </div>
                </div>
            </div>

            <div className='border-t-[1px] py-8 px-4 text-center border-neutral-600'>
                <p className='text-[5rem]'>🤝</p>
                <p className='title-main font-semibold text-xl'>
                    Let&apos;s connect.
                </p>
                <p className='title-main text-neutral-500 font-semibold'>
                    Expand your network.
                </p>

                <div className='flex flex-row flex-wrap gap-3 justify-center py-4'>
                    {/* <Link
                        href='https://discord.com/invite/z5P9kccwRh'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-blue-800 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiDiscord className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            Discord
                        </button>
                    </Link> */}

                    {/* <Link
                        href='https://www.linkedin.com/company/gdg-vitb/'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-red-900 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiYoutube className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            YouTube
                        </button>
                    </Link> */}

                    <Link
                        href='https://www.linkedin.com/company/gdg-vitb/'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-blue-600 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-400 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiLinkedin className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            LinkedIn
                        </button>
                    </Link>

                    <Link
                        href='https://www.instagram.com/gdg_vitb/'
                        target='_blank'
                    >
                        <button className='flex group w-[160px] sm:w-[180px] sm:hover:w-[200px] justify-center bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-3 2 active:scale-95 hover:bg-purple-600 hover:outline-4 hover:text-white text-xl font-bold active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-purple-400 active:outline-neutral-200 duration-200 active:duration-200'>
                            <SiInstagram className='my-auto group-hover:text-white group-hover:text-2xl transition-all duration-300' />
                            Instagram
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
