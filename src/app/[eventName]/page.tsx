'use client'

import { useParams } from 'next/navigation'
import { events } from '@/data/events'
import Image from 'next/image'
import { EventTypes } from '@/lib/types'

import { motion } from 'framer-motion'
import NotFoundPage from '../not-found'
import Title from '@/components/Title'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const EventPage: React.FC = () => {
    const { eventName } = useParams()

    const getEventByName = (name: string | undefined): EventTypes | null => {
        if (!name) return null
        return (
            events.find(
                (event) =>
                    event.slug.replace(/\s+/g, '-').toLowerCase() === name
            ) || null
        )
    }

    const event: EventTypes | null = getEventByName(
        eventName as string | undefined
    )

    if (!event) {
        return <NotFoundPage />
    }

    return (
        <motion.div
            className='container md:py-[7rem] py-10 mx-auto my-8'
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
        >
            <motion.div variants={fadeInUp}>
                <Title className='text-center text-white mb-2'>
                    {event.title}
                </Title>
            </motion.div>

            <motion.div variants={fadeInUp}>
                <Image
                    src={event.bannerImage}
                    alt={event.title}
                    width={1200}
                    height={600}
                    className='w-2/3 md:w-1/2 h-auto mx-auto rounded-lg'
                />
            </motion.div>
            <motion.div variants={fadeInUp}>
                <Title size='small' className='text-center text-blue-500'>
                    {event.date} | {event.location}
                </Title>
            </motion.div>

            <motion.div variants={fadeInUp} className='text-center'>
                <p className='text-slate-200 mt-2 text-left mx-auto max-w-2xl w-5/6 md:w-full'>
                    {event.description}
                </p>
                <p className='text-slate-400 mt-4 text-left mx-auto max-w-2xl w-5/6 md:w-full'>
                    {event.text}
                </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
                <Title
                    size='medium'
                    className='text-center text-slate-100 my-10'
                >
                    Event Gallery
                </Title>
            </motion.div>

            <motion.div
                className='mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 p-2'
                initial='hidden'
                animate='visible'
                variants={staggerContainer}
            >
                {event.images.map((image, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                        <Image
                            key={index}
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            width={500}
                            height={300}
                            className='w-full h-auto rounded'
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default EventPage
