'use client'

import { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import {
    Calendar,
    Camera,
    Film,
    Scissors,
    Award,
    Instagram,
    Linkedin,
    MessageCircle,
} from 'lucide-react'

const events = [
    {
        id: 'Hack-a-Tron',
        title: 'Hack-a-Tron',
        shortTitle: 'Hack-a-Tron',
        date: 'Feb 20th & 21st-2025',
        // venue: 'C-block, Vishnu Institute of Technology',
        description:
            'Be part of HACK-A-TRON, a thrilling 24-hour hackathon by Google Developer Groups at Vishnu Institute of Technology on Feb 20-21. Innovate, collaborate, and showcase your skills—register now!',
        image: '/events/hack-a-tron-poster.jpg',
        specialGuest: 'To be revealed Soon!',
        highlights: ['Fun Activities', 'Networking', 'Step to KKK'],
        // contests: ['Best Memer', 'Best Photographer', 'Best Reel Editor'],
        instagramLink: 'https://www.instagram.com/gdg_vitb/',
        linkedinLink:
            'https://www.linkedin.com/company/gdg-vitb/posts/?feedView=all',

        whatsappLink: 'https://chat.whatsapp.com/J5NFiaEkQgKC3iuBSEmW2H',
    },
    {
        id: 'Kode-Kurukshetra',
        title: 'Kode Kurukshetra',
        shortTitle: 'KKK',
        date: 'March 20th & 21st-2025',
        description: '',
        image: '/events/kode-kurukshetra-poster.jpg',
        categories: [
            {
                name: 'Lens Wizard',
                icon: <Camera className='w-6 h-6' />,
                description: 'For outstanding photography',
            },
            {
                name: 'Frame Maestro',
                icon: <Film className='w-6 h-6' />,
                description: 'For exceptional videography',
            },
            {
                name: 'Edit Virtuoso',
                icon: <Scissors className='w-6 h-6' />,
                description: 'For stellar reel editing',
            },
        ],
        announcementDate: 'December 10th',
        instagramLink: 'https://www.instagram.com/gdg_vitb/',
        linkedinLink:
            'https://www.linkedin.com/company/gdg-vitb/posts/?feedView=all',
        whatsappLink: 'https://chat.whatsapp.com/BmEJajfVLsY3OV0B1YLnU9',
    },
    // {
    //     id: 'meme-contest',
    //     title: 'GDG Meme Contest',
    //     shortTitle: 'Meme Contest',
    //     date: 'December 7th',
    //     description: 'Let your humor steal the show!',
    //     image: '/meme.jpeg',
    //     announcementDate: 'December 10th',
    //     steps: [
    //         'Register for the contest',
    //         'Create a meme inspired by tech, GDG vibes, or just pure fun!',
    //         'Submit your meme to us',
    //     ],
    //     instagramLink: 'https://www.instagram.com/gdg_vitb/',
    //     linkedinLink:
    //         'https://www.linkedin.com/company/gdg-vitb/posts/?feedView=all',
    //     whatsappLink: 'https://chat.whatsapp.com/HIlOX8pMSfHDTbfVoDXgZI',
    // },
]

export default function GDGEventsShowcase() {
    const [activeTab, setActiveTab] = useState('genesis')
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <div className='container  mx-auto px-4 md:px-[90px] py-8 my-6 md:mt-14   text-white '>
            <h1 className='text-4xl font-Rubik  md:text-5xl font-bold text-center mb-8 text-purple-400'>
                GDG Vishnu Institute of Technology Events
            </h1>

            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className='w-full'
            >
                <TabsList className='grid w-full my-3 md:my-6 font-Poppins grid-cols-2  '>
                    {events.map((event) => (
                        <TabsTrigger
                            key={event.id}
                            value={event.id}
                            className='data-[state=active]:bg-purple-600 data-[state=active]:text-white'
                        >
                            {isMobile ? event.shortTitle : event.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {events.map((event) => (
                    <TabsContent key={event.id} value={event.id}>
                        <Card className='bg-gray-800 font-Rubik border-gray-700'>
                            <CardHeader>
                                <CardTitle className='text-2xl md:text-5xl text-purple-400'>
                                    {event.title}
                                </CardTitle>
                                <CardDescription className='text-gray-300 text-xl md:text-2xl'>
                                    <Calendar className='inline-block w-6 h-6 mr-2' />
                                    {event.date}
                                    {/* {event.venue && (
                                        <>
                                            <br />
                                            <span className='ml-6'>
                                                {event.venue}
                                            </span>
                                        </>
                                    )} */}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='grid md:grid-cols-2 gap-6'>
                                <div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className='w-full  max-w-lg rounded-lg shadow-lg'
                                    />
                                </div>
                                <div className='text-gray-200'>
                                    <p className='text-lg mb-4'>
                                        {event.description}
                                    </p>
                                    {event.specialGuest && (
                                        <p className='mb-4'>
                                            <strong className='text-purple-400'>
                                                Special Guest:
                                            </strong>{' '}
                                            {event.specialGuest}
                                        </p>
                                    )}
                                    {event.highlights && (
                                        <>
                                            <h3 className='text-xl font-semibold mb-2 text-purple-400'>
                                                Highlights:
                                            </h3>
                                            <ul className='list-disc list-inside mb-4'>
                                                {event.highlights.map(
                                                    (highlight, index) => (
                                                        <li key={index}>
                                                            {highlight}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    )}
                                    {/* {event.contests && (
                                        <>
                                            <h3 className='text-xl font-semibold mb-2 text-purple-400'>
                                                Contests:
                                            </h3>
                                            <ul className='list-disc list-inside mb-4'>
                                                {event.contests.map(
                                                    (contest, index) => (
                                                        <li key={index}>
                                                            {contest}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    )} */}
                                    {event.categories && (
                                        <>
                                            <h3 className='text-xl font-semibold mb-2 text-purple-400'>
                                                Categories:
                                            </h3>
                                            <ul className='space-y-2 mb-4'>
                                                {event.categories.map(
                                                    (category, index) => (
                                                        <li
                                                            key={index}
                                                            className='flex items-center'
                                                        >
                                                            {category.icon}
                                                            <span className='ml-2 font-semibold text-purple-400'>
                                                                {category.name}
                                                            </span>
                                                            <span className='ml-2'>
                                                                -{' '}
                                                                {
                                                                    category.description
                                                                }
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    )}
                                    {/* {event.steps && (
                                        <>
                                            <h3 className='text-xl font-semibold mb-2 text-purple-400'>
                                                How to Participate:
                                            </h3>
                                            <ol className='list-decimal list-inside mb-4'>
                                                {event.steps.map(
                                                    (step, index) => (
                                                        <li key={index}>
                                                            {step}
                                                        </li>
                                                    )
                                                )}
                                            </ol>
                                        </>
                                    )} */}
                                    {event.announcementDate && (
                                        <p className='mb-4'>
                                            <Award className='inline-block w-4 h-4 mr-2 text-purple-400' />
                                            Winners will be announced on{' '}
                                            {event.announcementDate}
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                                    <Button
                                        variant='outline'
                                        className='bg-purple-600 text-white hover:bg-purple-700'
                                        asChild
                                    >
                                        <a
                                            href={event.instagramLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Instagram className='w-4 h-4 mr-2' />
                                            Follow on Instagram
                                        </a>
                                    </Button>
                                    <Button
                                        variant='outline'
                                        className='bg-purple-600 text-white hover:bg-purple-700'
                                        asChild
                                    >
                                        <a
                                            href={event.linkedinLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Linkedin className='w-4 h-4 mr-2' />
                                            Follow on LinkedIn
                                        </a>
                                    </Button>
                                </div>
                                <Button
                                    className='bg-green-600 hover:bg-green-700'
                                    asChild
                                >
                                    <a
                                        href={event.whatsappLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <MessageCircle className='w-4 h-4 mr-2' />
                                        Join WhatsApp Group
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
