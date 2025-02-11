'use client'

import React from 'react'

import { Element } from 'react-scroll'
import { ReactTyped } from 'react-typed'

import { HomeAlbum } from '../dispositions/gallery'

// components
import IntroFade from '../components/IntroFade'

import Overview from '../components/Overview'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
 
import About from '../components/About'
import Gallery from '../components/Gallery'
 
import Leadership from '../components/Leadership'
 
import Recruitment from '../components/Recruitment'

import Footer from '../components/Footer'
import Aboutus from '@/components/Aboutus'
import Title from '@/components/Title'
import GDGEvents from '@/components/GDGEvents'
import EventPage from '@/components/EventsPage'
import { Hero2 } from '@/components/Hero2'
import GDGEventsShowcase from '@/components/GDGEvents'

const GALLERY_TYPED_WORDS = [
    'Social Events',
    'Networking Mixers',
    'Company Tours',
    'Hackathons',
    'Technology Workshops',
    'Field Trips',
    'Club Projects',
    'Community Collaborations',
]

export default function App() {
    return (
        <>
            {/* <IntroFade />

            <Hero /> */}




            <Hero2/>

            <GDGEventsShowcase/>
            <Overview />

            <Aboutus campus='Vishnu Institute of Technology ' />

            <Leadership />

            <Technologies />

            <Title
                id='events'
                className=' text-green-500 font-Open_Sans text-center'
            >
                Our Past Events
            </Title>
            <div className='pt-8  '>
                <EventPage />
            </div>

            <About />

            <div className='w-full bg-gradient-to-b from-neutral-900 via-black to-black py-14'>
                <h1 className='title-main mx-auto text-3xl text-center sm:text-4xl font-extrabold text-white'>
                    <span className='text-shadow shadow-gray-700'>
                        Journey with us in&nbsp;
                    </span>
                    <ReactTyped
                        strings={GALLERY_TYPED_WORDS}
                        typeSpeed={50}
                        backSpeed={75}
                        backDelay={3000}
                        loop
                        className='bg-gradient-to-t from-yellow-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(225,200,255,0.5)]'
                    ></ReactTyped>
                </h1>

                <Element name='gallery' />
                <Gallery album={HomeAlbum} />
            </div>

            <div className='w-full h-30' />

            {/* <History /> */}
            <Recruitment />
            {/* <Socials/> */}

            <Footer />
        </>
    )
}
