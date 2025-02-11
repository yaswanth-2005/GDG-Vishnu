//@ts-nocheck

'use client'

import React, { useEffect, useState } from 'react'

import Divider from './Divider'
import { useTheme } from 'next-themes'
import { Icon } from 'lucide-react'

// Import your icons here
import { Code, Database, Globe, Cpu } from 'lucide-react'
import TextContainer from './TextContainer'

const icons: Icon[] = [Code, Database, Globe, Cpu]

const generateUniquePositions = (count: number) => {
    const positions: { left: number; top: number }[] = []
    for (let i = 0; i < count; i++) {
        positions.push({
            left: Math.random() * 100,
            top: Math.random() * 100,
        })
    }
    return positions
}

interface MainSectionProps {
    campus: string
}

const Aboutus: React.FC<MainSectionProps> = ({ campus }) => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderIcons = () => {
        if (!mounted || theme !== 'dark') return null

        const positions = generateUniquePositions(50)
        return positions.map((pos, index) => {
            const Icon = icons[Math.floor(Math.random() * icons.length)]
            const size = Math.random() * 30 + 20 // Random size between 20 and 50px
            const rotation = Math.random() * 90 - 45 // Random rotation between -45 and +45 degrees

            return (
                <Icon
                    key={index}
                    className='absolute opacity-10 pointer-events-none'
                    style={{
                        left: `${pos.left}vw`,
                        top: `${pos.top}vh`,
                        fontSize: `${size}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                />
            )
        })
    }

    return (
        <>
            <div className='flex flex-wrap justify-center gap-4 mb-10 relative'>
                {renderIcons()}
                <div className='grid grid-cols-1   md:m-auto lg:m-auto md:grid-cols-2 gap-4 w-full md:w-4/6 mt-10'>
                    <TextContainer title='Who are we?' variant='red'>
                        Welcome to Google Developer Groups on Campus {campus}.
                        As part of the global Google Developer Groups
                        initiative, we are a vibrant and inclusive community of
                        students passionate about technology, innovation, and
                        collaboration.
                    </TextContainer>

                    <TextContainer title='Our Mission' variant='blue'>
                        At Google Developer Groups on Campus {campus}, our
                        mission is to foster a thriving environment where
                        students from all fields-whether they&apos;re seasoned
                        developers or complete beginners-can come together to
                        learn, build, and grow.
                    </TextContainer>

                    <TextContainer title='What We Do' variant='green'>
                        We are committed to empowering students by providing
                        opportunities to develop technical skills through
                        hands-on projects, workshops, and events led by industry
                        professionals and peers.
                    </TextContainer>

                    <TextContainer title='Join Us' variant='yellow'>
                        Join us in our journey to make technology accessible,
                        share knowledge, and create impactful solutions to
                        real-world problems, all while building lifelong
                        connections within the tech community.
                    </TextContainer>
                </div>
            </div>

            <Divider image='/dividers/blue-banner.png' altText='Blue Divider' />
        </>
    )
}

export default Aboutus
