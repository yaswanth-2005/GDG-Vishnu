'use client'

import { motion } from 'framer-motion'
import Gallery from '@/components/Gallery'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { hackATronAlbum } from '@/dispositions/gallery'
import {
    Calendar,
    MapPin,
    MessageCircleHeart,
    TableOfContents,
    Trophy,
    Users,
} from 'lucide-react'
import Image from 'next/image'

export default function HackathonPage() {
    return (
        <div className='relative min-h-screen bg-black text-white'>
            {/* Gradient Background */}
            <div className='absolute inset-0 ' />

            {/* Content */}
            <div className='relative z-10 px-4'>
                {/* Hero Section */}
                <div className='flex flex-col items-center py-32'>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className='relative rounded-lg transition-all duration-500 hover:shadow-none border-4 border-transparent hover:border-white hover:animate-pulse'
                    >
                        <Image
                            src='/events/hack-a-tron-poster.jpg'
                            alt='Hack-a-tron Logo'
                            width={800}
                            height={800}
                            className='rounded-lg transition-all duration-500'
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            type: 'spring',
                            stiffness: 100,
                        }}
                        className='mt-10 text-center text-6xl font-bold font-Rubik tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] md:text-7xl'
                    >
                        Hack-A-Tron
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='mt-4 max-w-2xl text-lg text-gray-300 text-center font-Open_Sans'
                    >
                        GDG VITB presents an internal hackathon for the Solution
                        Challenge 2025. Where innovation meets competition.{' '}
                        <br />
                        {/* <strong>Sriram Gajula (Organizer)</strong> */}
                    </motion.p>

                    <a
                        href='https://unstop.com/p/hack-a-tron-duplicate-gdg-vitb-1381829'
                        target='_blank'
                    >
                        <Button className='mt-6 bg-white px-8 py-6 text-lg font-semibold text-black hover:bg-gray-200 flex items-center gap-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300'>
                            <MessageCircleHeart className='text-[#EA4335] animate-pulse' />
                            I&apos;m Interested
                        </Button>
                    </a>
                </div>

                {/* Event Details */}
                <div className='mx-auto max-w-7xl py-20'>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                        className='mb-20 grid grid-cols-2 lg:grid-cols-4'
                    >
                        {eventDetails.map(
                            ({ Icon, title, description, color }, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className='p-4'
                                >
                                    <Card className='border-gray-700 bg-white/10 backdrop-blur-xl transition-all  hover:shadow-xl rounded-2xl p-6'>
                                        <CardContent className='flex flex-col items-center text-center font-Open_Sans'>
                                            <Icon
                                                className={`mb-4 h-10 w-10 ${color} animate-bounce`}
                                            />
                                            <h3 className='mb-2 text-xl font-semibold text-white'>
                                                {title}
                                            </h3>
                                            <p className='text-gray-300'>
                                                {description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        )}
                    </motion.div>

                    {/* Problem Statements */}
                    <div className='mb-20 text-center'>
                        <h2 className='mb-12 text-4xl font-bold text-white font-Rubik'>
                            Problem Statements
                        </h2>

                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        staggerChildren: 0.2,
                                    },
                                },
                            }}
                            className='grid gap-8  lg:grid-cols-3'
                        >
                            {problemStatements.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <Card className='border-gray-700 bg-white/10 h-96 backdrop-blur-lg rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105'>
                                        <CardContent className='text-center'>
                                            <h3 className='mb-4 text-xl font-semibold text-[#4285F4] font-Open_Sans'>
                                                {problem.title}
                                            </h3>
                                            <p className='text-gray-300 h-40 overflow-hidden'>
                                                {problem.description}
                                            </p>
                                            <Button
                                                variant='outline'
                                                className='p-2 mt-5'
                                            >
                                                <a
                                                    href='https://vision.hack2skill.com/event/solutionschallenge2025/?tab=challenges&utm_source=hack2skill&utm_medium=homepage'
                                                    target='_blank'
                                                    className=''
                                                >
                                                    Read more
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className='flex justify-center mt-10'>
                            <a
                                href='https://vision.hack2skill.com/event/solutionschallenge2025/?tab=challenges&utm_source=hack2skill&utm_medium=homepage'
                                target='_blank'
                            >
                                <Button className='mt-6 bg-white px-8 py-6 text-lg font-semibold text-black hover:bg-gray-200 flex items-center gap-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300'>
                                    <TableOfContents className='text-[#EA4335] animate-pulse' />
                                    View more
                                </Button>
                            </a>
                        </div>
                    </div>
                    {/* Timeline */}
                    <div className='text-center'>
                        <h2 className='mb-12 text-4xl font-bold bg-clip-text text-white font-Rubik'>
                            Event Timeline
                        </h2>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        staggerChildren: 0.2,
                                    },
                                },
                            }}
                            className='grid gap-8 md:grid-cols-2'
                        >
                            {timeline.map(({ day, details }, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <Card className='border-gray-700 bg-white/5 backdrop-blur transition-all hover:shadow-lg hover:scale-105'>
                                        <CardContent className='p-6'>
                                            <h3 className='mb-4 text-xl font-semibold text-[#34A853] font-Open_Sans'>
                                                {day}
                                            </h3>
                                            <ul className='space-y-2 text-gray-300'>
                                                {details.map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -30,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay: i * 0.1,
                                                        }}
                                                    >
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const timeline = [
    {
        day: 'Day 1 - February 20',
        details: [
            '9:00 AM - Registration & Team Formation',
            '10:00 AM - Opening Ceremony',
            '11:00 AM - Hacking Begins',
        ],
    },
    {
        day: 'Day 2 - February 21',
        details: [
            '11:00 AM - Project Submissions',
            '2:00 PM - Presentations',
            '4:00 PM - Winners Announcement',
        ],
    },
]

const eventDetails = [
    {
        Icon: Calendar,
        title: 'Date',
        description: 'February 20-21, 2025',
        color: 'text-[#4285F4]',
    },
    {
        Icon: MapPin,
        title: 'Venue',
        description: 'C Block, VITB',
        color: 'text-[#EA4335]',
    },
    {
        Icon: Trophy,
        title: 'Prize',
        description: 'Direct Entry to Kode Kurukshetra',
        color: 'text-[#FBBC05]',
    },
    {
        Icon: Users,
        title: 'Team Size',
        description: '2-4 Members',
        color: 'text-[#34A853]',
    },
]

const problemStatements = [
    {
        title: 'Lack of Access to Quality Education in Underserved Communities',
        description:
            'Millions of children and adults in underserved communities lack access to quality education due to inadequate infrastructure, insufficient resources, and a shortage of trained teachers. This educational gap perpetuates cycles of poverty and inequality, limiting opportunities for individuals and hindering community development.',
    },
    {
        title: 'Lack of Access to Healthcare in Underserved Communities',
        description:
            'Many communities, especially in rural and remote areas, lack access to basic healthcare services. This results in poor health outcomes, preventable diseases, and reduced quality of life. Barriers include inadequate healthcare infrastructure, a shortage of medical professionals, and limited awareness of preventive care.',
    },

    {
        title: 'Uneven Access to Quality Education in the Digital Age',
        description:
            'In today’s rapidly evolving digital landscape, access to quality education remains uneven across regions and demographics. Traditional educational systems often fail to adapt to individual learning needs, integrate modern technology, or provide real-time feedback. This gap is further exacerbated by limited access to digital tools, resources, and personalized learning experiences, particularly in underserved communities. As a result, students from disadvantaged backgrounds are left behind, unable to thrive in the digital age.',
    },
    {
        title: 'Overburdened Teachers and the Need for Personalized Feedback',
        description:
            'Teachers in schools, coaching centers, and colleges often face a heavy workload when providing individualized feedback to students in large classrooms. Manual grading and feedback processes are time-consuming, leaving educators with limited time to focus on teaching and mentoring. This challenge is particularly acute in under-resourced settings, where teacher-to-student ratios are high. As a result, students miss out on personalized guidance, which is critical for their academic growth and success.',
    },
    {
        title: 'Transforming Logistics for a Sustainable and Efficient Future',
        description:
            'The logistics industry is a cornerstone of global trade, but it faces significant challenges in sustainability, efficiency, and resilience. Logistics operations contribute heavily to carbon emissions, waste generation, and resource depletion. Inefficiencies in route optimization, inventory management, and last-mile delivery lead to increased costs, delays, and customer dissatisfaction. Additionally, the industry struggles to adapt to disruptions like natural disasters, geopolitical events, and pandemics. How can we leverage technology, data, and innovation to transform logistics, making it more sustainable, efficient, and inclusive?',
    },
    {
        title: 'Reviving the Indian Cow Breed for a Sustainable Future',
        description:
            'The Indian cow, once revered as a cornerstone of sustainable living, is facing a decline in both population and genetic quality due to urbanization, industrialization, and a lack of awareness about its socio-spiritual, economic, and environmental significance. This decline has led to a loss of traditional practices that rely on the Indian cow, such as organic farming, Ayurvedic medicine, and sustainable energy production. Additionally, the lack of systematic breeding programs and farmer education has further exacerbated the problem, threatening the conservation of indigenous cow breeds and their contributions to a sustainable society.',
    },
    {
        title: 'Bridging the Gender Gap – Empowering the Girl Child',
        description:
            'The global sex ratio imbalance reflects a deep-rooted societal preference for male children and a systemic devaluation of the girl child. This skewed mindset manifests in various forms across the world, leading to millions of girls missing due to female feticide, infanticide, and neglect. Despite progress in some areas, the lack of societal awareness and gender sensitivity continues to perpetuate this crisis, which is not only a violation of human rights but also a crime against humanity.',
    },
    {
        title: 'Empowering Small and Marginal Farmers with AI-Driven Agricultural Solutions',
        description:
            'Small and marginal farmers face significant challenges due to limited landholdings, resource constraints, and the adverse impacts of climate change. Key challenges include: Climate Change Impacts, Resource Constraints, Soil Degradation, Information Gap, Inefficient Practices. These challenges result in economic losses, food insecurity, and environmental degradation, threatening the livelihoods of small and marginal farmers and the well-being of rural communities.',
    },
    {
        title: 'The Growing Crisis of E-Waste',
        description:
            'The rapid pace of technological advancement, coupled with increasing demand for consumer electronics and shorter device lifespans, has led to a dramatic rise in electronic waste (e-waste).  E-waste contains harmful substances and chemicals, contributing to toxic landfills and posing serious risks to public health and the environment. With the integration of artificial intelligence and the demand for advanced hardware like CPUs, GPUs, and memory chips, the e-waste problem is expected to worsen.',
    },
]
