'use client'

import { motion } from 'framer-motion'
import Gallery from '@/components/Gallery'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
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
import { useState } from 'react'

export default function HackathonPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }
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
                            {problemStatements.map((problem, index) => {
                                const isExpanded = expandedIndex === index
                                const shortDescription =
                                    problem?.description?.slice(0, 150) + '...'

                                return (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 50 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <Card
                                            className={`border-gray-700 bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all flex flex-col justify-between ${isExpanded ? 'h-auto' : 'h-[350px'} `}
                                        >
                                            <CardContent className='text-left flex-grow'>
                                                <h3 className='mb-4 text-xl font-semibold text-[#4285F4] font-Open_Sans'>
                                                    {problem.title}
                                                </h3>
                                                <p className='text-gray-300'>
                                                    {isExpanded
                                                        ? problem.description
                                                        : shortDescription}
                                                </p>
                                            </CardContent>

                                            {/* Button at the bottom */}
                                            <CardFooter className='mt-auto flex justify-center'>
                                                <Button
                                                    variant='outline'
                                                    onClick={() =>
                                                        toggleExpand(index)
                                                    }
                                                    className='text-white border border-white px-4 py-2'
                                                >
                                                    {isExpanded
                                                        ? 'Read Less'
                                                        : 'Read More'}
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                        <div className='flex justify-center mt-10'>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className='relative rounded-lg transition-all duration-500 hover:shadow-none border-4 border-transparent hover:border-white '
                            >
                                <Image
                                    src='/TEAM_GDG/timeline.jpg'
                                    alt='Hack-a-tron Logo'
                                    width={800}
                                    height={800}
                                    className='rounded-lg transition-all duration-500'
                                />
                            </motion.div>
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
                                            <h3 className='mb-4 text-xl font-semibold text-[#4285F4] font-Open_Sans'>
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
            '8:00 AM - Project Submissions',
            '9:00 PM - Presentations',
            '10:00 PM - Winners Announcement',
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
        description: `Millions of children and adults in underserved communities lack access to quality education due to inadequate infrastructure, insufficient resources, and a shortage of trained teachers. This educational gap perpetuates cycles of poverty and inequality, limiting opportunities for individuals and hindering community development.
Objective:
Participants are tasked with creating innovative, scalable, and technology-driven solutions to make education more accessible, inclusive, and personalized for diverse learners. Your solutions should align with UN SDG 4: Quality Education, which aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.`,
    },
    {
        title: 'Lack of Access to Healthcare in Underserved Communities',
        description: `Many communities, especially in rural and remote areas, lack access to basic healthcare services. This results in poor health outcomes, preventable diseases, and reduced quality of life. Barriers include inadequate healthcare infrastructure, a shortage of medical professionals, and limited awareness of preventive care.
Objective:
Participants are tasked with creating innovative, scalable, and sustainable solutions to improve access to healthcare in underserved communities. Your solutions should align with UN SDG 3: Good Health and Well-being, which aims to ensure healthy lives and promote well-being for all at all ages.`,
    },
    {
        title: 'Uneven Access to Quality Education in the Digital Age',
        description: `In today's rapidly evolving digital landscape, access to quality education remains uneven across regions and demographics. Traditional educational systems often fail to adapt to individual learning needs, integrate modern technology, or provide real-time feedback. This gap is further exacerbated by limited access to digital tools, resources, and personalized learning experiences, particularly in underserved communities. As a result, students from disadvantaged backgrounds are left behind, unable to thrive in the digital age.
Objective:
Participants are tasked with creating innovative, scalable, and technology-driven solutions to make education more accessible, inclusive, and personalized for diverse learners. Your solutions should align with UN SDG 4: Quality Education, which aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all`,
    },
    {
        title: 'Overburdened Teachers and the Need for Personalized Feedback',
        description: `Teachers in schools, coaching centres, and colleges often face a heavy workload when providing individualized feedback to students in large classrooms. Manual grading and feedback processes are time-consuming, leaving educators with limited time to focus on teaching and mentoring. This challenge is particularly acute in under-resourced settings, where teacher-to-student ratios are high. As a result, students miss out on personalized guidance, which is critical for their academic growth and success.
Objective:
Participants are tasked with creating an AI-powered teacher assistant that automates the grading of assignments and provides personalized feedback to students. The solution should enhance the teaching process by reducing the burden on educators, improving the quality of feedback, and enabling personalized learning experiences. Your solution should align with UN SDG 4: Quality Education, which aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.`,
    },
    {
        title: 'Transforming Logistics for a Sustainable and Efficient Future',
        description: `The logistics industry is a cornerstone of global trade, but it faces significant challenges in sustainability, efficiency, and resilience. Logistics operations contribute heavily to carbon emissions, waste generation, and resource depletion. Inefficiencies in route optimization, inventory management, and last-mile delivery lead to increased costs, delays, and customer dissatisfaction. Additionally, the industry struggles to adapt to disruptions like natural disasters, geopolitical events, and pandemics. How can we leverage technology, data, and innovation to transform logistics, making it more sustainable, efficient, and inclusive?
Objective:
Participants are tasked with creating innovative, scalable, and sustainable solutions to address the challenges faced by the logistics industry. Solutions should leverage technologies such as AI, IoT, blockchain, and data analytics to reduce environmental impact, optimize operations, and build resilient supply chains.`,
    },
    {
        title: 'Reviving the Indian Cow Breed for a Sustainable Future',
        description: `The Indian cow, once revered as a cornerstone of sustainable living, is facing a decline in both population and genetic quality due to urbanization, industrialization, and a lack of awareness about its socio-spiritual, economic, and environmental significance. This decline has led to a loss of traditional practices that rely on the Indian cow, such as organic farming, Ayurvedic medicine, and sustainable energy production. Additionally, the lack of systematic breeding programs and farmer education has further exacerbated the problem, threatening the conservation of indigenous cow breeds and their contributions to a sustainable society.
Objective:
Participants are tasked with creating innovative, scalable, and sustainable solutions to support the conservation and improvement of Indian cow breeds. Solutions should focus on raising awareness, enhancing breeding programs, and promoting the socio-economic and environmental benefits of Indian cows, aligning with the principles of the Kamdhenu Program.`,
    },
    {
        title: 'Bridging the Gender Gap – Empowering the Girl Child',
        description: `The global sex ratio imbalance, as highlighted by the 2011 census figure of 914 girls for every 1000 boys, reflects a deep-rooted societal preference for male children and a systemic devaluation of the girl child. This skewed mindset manifests in various forms across the world: in China, infant girls are seen as "just another mouth to feed"; in Africa, they are often denied education; and in Europe, they are reduced to "a piece of beauty." These attitudes have led to millions of girls missing from the world due to female feticide, infanticide, and neglect. Despite progress in some areas, the lack of societal awareness and gender sensitivity continues to perpetuate this crisis, which is not only a violation of human rights but also a crime against humanity.
Objective:
Participants are tasked with creating innovative, scalable, and impactful solutions to address gender imbalance and promote the value of the girl child. Solutions should focus on raising societal awareness, changing mindsets, and empowering communities to take action against female feticide and gender-based discrimination.`,
    },
    {
        title: 'Empowering Small and Marginal Farmers with AI-Driven Agricultural Solutions',
        description: `Small and marginal farmers, who constitute approximately 126 million of India's agricultural sector, face significant challenges due to limited landholdings, resource constraints, and the adverse impacts of climate change. In regions like Siddharthnagar and Balrampur in Uttar Pradesh, erratic rainfall, rising temperatures, and extreme weather events have disrupted traditional farming practices, leading to reduced crop yields, economic difficulties, and environmental degradation. Key challenges include:
Climate Change Impacts: Unpredictable weather patterns and rising temperatures.
Resource Constraints: Limited access to quality seeds, fertilizers, and modern farming equipment.
Soil Degradation: Unsustainable farming practices leading to soil erosion and loss of fertility.
Information Gap: Limited access to accurate and timely agricultural information.
Inefficient Practices: Resource-intensive traditional methods prone to crop failures.
These challenges result in economic losses, food insecurity, and environmental degradation, threatening the livelihoods of small and marginal farmers and the well-being of rural communities.
Objective:
Participants are tasked with creating an AI-powered agricultural advisory system to provide timely, relevant, and personalized agricultural information to small and marginal farmers. The solution should leverage machine learning, remote sensing, and IoT technologies to address the challenges and improve agricultural productivity, resilience, and sustainability.`,
    },
    {
        title: 'The Growing Crisis of E-Waste',
        description: `The rapid pace of technological advancement, coupled with increasing demand for consumer electronics and shorter device lifespans, has led to a dramatic rise in electronic waste (e-waste). According to the Global E-waste Monitor 2020, the world is projected to generate 74 million metric tons of e-waste by 2030. E-waste contains harmful substances and chemicals, contributing to toxic landfills and posing serious risks to public health and the environment. With the integration of artificial intelligence and the demand for advanced hardware like CPUs, GPUs, and memory chips, the e-waste problem is expected to worsen.
Objective:
Participants are tasked with creating innovative, scalable, and sustainable solutions to address the growing e-waste crisis. Your solutions should align with UN SDG 12: Responsible Consumption and Production, which aims to ensure sustainable consumption and production patterns, including the reduction of waste generation through prevention, reduction, recycling, and reuse.`,
    },
    {
        title: 'Breaking Financial Barriers to Ensure Equal Access to Education',
        description: `A significant number of students from lower-income families face financial challenges in paying their school or college fees, which hinders their ability to continue their education. These barriers prevent students from accessing necessary learning resources, participating fully in academic activities, and pursuing their desired courses or streams. The situation has worsened after the COVID-19 pandemic, with many families experiencing economic hardships. As a result, students are at risk of dropping out, experiencing poor academic performance, and facing limited future opportunities, perpetuating cycles of poverty and inequality.
Objective:
Participants are tasked with creating innovative, scalable, and sustainable solutions to address the financial barriers faced by students from lower-income families. The solutions should ensure equal access to education, reduce dropout rates, and support students in achieving their academic and career goals.`,
    },
    {
        title: 'Revolutionizing Voting with Faster and Secure Automated Verification',
        description: `The current manual verification process at polling booths is time-consuming, prone to errors, and vulnerable to security breaches. Voters often face long queues and delays, leading to frustration and reduced participation in the electoral process. Additionally, manual verification methods, such as checking voter IDs and cross-referencing paper lists, are inefficient and can compromise the integrity of elections. There is an urgent need to automate these processes to make voting faster, more secure, and more accessible, thereby enhancing voter confidence and participation.
Objective:
Participants are tasked with creating innovative, scalable, and secure solutions to automate the verification process at polling booths. The solutions should aim to reduce waiting times, enhance security, and ensure the integrity of the voting process.`,
    },
    {
        title: 'Empowering Rural Communities to Break the Cycle of Poverty',
        description: `Globally, over 700 million people live on less than $1.90 a day, with the majority residing in rural areas. Despite economic growth in many regions, rural communities face persistent poverty due to limited access to quality education, inadequate infrastructure, and a lack of sustainable employment opportunities. Women and marginalized groups are disproportionately affected, further exacerbating the cycle of poverty. In regions heavily dependent on agriculture, the scarcity of modern tools, financial literacy programs, and market access compounds the problem. Without intervention, these communities risk remaining trapped in generational poverty, hindering global efforts to achieve Sustainable Development Goal 1: No Poverty.
Objective:
Participants are tasked with creating innovative, scalable, and culturally sensitive solutions to empower rural communities. The solutions should focus on achieving financial independence, improving access to quality education, and building resilience against poverty.`,
    },
    {
        title: 'Bridging the Gap for Immersive and Inclusive Education',
        description: `Technologies like Augmented Reality (AR), Virtual Reality (VR), Extended Reality (XR), and the Internet of Things (IoT) hold immense potential to revolutionize education by creating immersive, engaging, and inclusive learning experiences. However, their implementation has largely remained theoretical or gimmicky, failing to achieve real-world impact. The challenge lies in bridging the gap between conceptual prototypes and scalable, sustainable deployment. Without effective integration, these technologies cannot address the pressing need for equitable access to quality education, particularly in underserved and resource-constrained communities.
Objective:
Participants are tasked with creating innovative, scalable, and sustainable solutions that leverage AR, VR, XR, and IoT to transform education. The solutions should move beyond theoretical applications to deliver real-world impact, ensuring equitable access to immersive and inclusive learning experiences.`,
    },
    {
        title: 'Revolutionizing Student Education with AI-Generated Video Content',
        description: `The Apprentice Project (TAP) currently provides educational content in Visual Arts, Performing Arts, Coding, Financial Literacy, and Science to students through its WhatsApp Chatbot, TAPBuddy. However, the manual creation of this content is time-consuming, resource-intensive, and unsustainable for scaling to a larger audience. Students require engaging, high-quality, and personalized learning materials to continue their educational journey effectively. Leveraging AI to automate the creation of video tutorials, code snippets, templates, and design ideas can address these challenges, ensuring seamless and scalable access to educational resources.
Objective:
Participants are tasked with creating an AI-powered solution to automate the generation of educational video content for students. The solution should cover Visual Arts, Performing Arts, Coding, Financial Literacy, and Science, providing engaging, personalized, and high-quality learning materials that can be delivered via platforms like TAPBuddy.`,
    },
    {
        title: 'Tackling Climate Change Through Innovation and Collaboration',
        description: `Climate change poses an existential threat to ecosystems, economies, and societies worldwide, driven by rising global temperatures, extreme weather events, and escalating greenhouse gas (GHG) emissions. Key sectors like energy, transportation, agriculture, and urban development remain heavily reliant on fossil fuels and inefficient practices, exacerbating the crisis. Vulnerable communities, particularly in developing countries, face disproportionate impacts due to limited resources and adaptive capacity. Despite the urgency, global efforts are hindered by fragmented approaches, insufficient adoption of transformative technologies, and inadequate data-driven decision-making. Addressing these challenges requires scalable, inclusive, and innovative solutions to reduce emissions, enhance resilience, and ensure equitable access to sustainable practices.
Objective:
Participants are tasked with creating innovative, scalable, and inclusive solutions to mitigate and adapt to climate change. The solutions should focus on reducing GHG emissions, enhancing resilience, and leveraging technology to bridge the gap between innovation and implementation.`,
    },
    {
        title: 'Addressing Educational Gaps in Minority Communities for Holistic Development',
        description: `The lack of awareness and non-serious attitude toward education in minority communities is a significant barrier to community development. Despite numerous educational programs, particularly those targeting minority women, the desired outcomes remain unachieved. This gap in education perpetuates cycles of poverty, unemployment, and social inequality, hindering the overall progress of these communities. Without effective interventions, minority groups, especially women, will continue to face limited opportunities for personal and professional growth, further exacerbating existing disparities.
        Objective:
        Participants are tasked with creating innovative, culturally sensitive, and impactful solutions to address the educational gaps in minority communities. The solutions should focus on raising awareness about the importance of education, increasing participation in educational programs, and ensuring that these programs achieve their intended outcomes.`,
    },
    {
        title: 'Leveraging AI to Tackle Rural Challenges and Foster Sustainable Development',
        description: `Rural communities face a multitude of challenges that hinder their development and well-being. These include limited access to clean drinking water, unpredictable weather affecting agricultural livelihoods, lack of quality education for underprivileged children, unsustainable natural resource management, inadequate healthcare access, and systemic gender inequalities in employment and livelihoods. These issues are interconnected and exacerbate poverty, health crises, and environmental degradation. Innovative, AI-driven solutions are needed to address these challenges, empower marginalized groups, and promote sustainable development in rural areas.
        Objective:
        Participants are tasked with creating AI-powered solutions to address the following key challenges in rural communities:
        Access to Clean Drinking Water: Monitor water quality, optimize resource distribution, and create sustainable systems for clean water access.
        Improving Livelihoods for Marginalized Farmers and Women: Analyze weather patterns, improve crop yield predictions, enhance market linkages, and provide skill-building opportunities.
        Advocating Girl Child Education and Learning: Facilitate personalized learning, enable virtual classrooms, and optimize educational resources for underprivileged children.
        Sustainable Natural Resource Management: Monitor natural resources, suggest sustainable practices, and predict ecological changes.
        Early Detection and Prevention of Health Crises: Enable disease surveillance, early diagnosis, and efficient resource allocation for healthcare.
        Sustainable Practices in Combating Climate Change: Monitor environmental changes, recommend eco-friendly farming techniques, and track carbon emissions.
        Reducing Gender Inequalities in Employment and Livelihoods: Identify job opportunities, offer skill-building programs, and connect women with financial resources and mentors.`,
    },
    {
        title: 'Bridging the Education and Digital Literacy Gap for Marginalized Communities',
        description: `Marginalized communities worldwide face significant barriers to accessing quality education and digital tools, perpetuating cycles of poverty and inequality. Limited infrastructure, lack of affordable internet access, and insufficient educational resources exacerbate the problem, leading to a widening knowledge gap. Without equitable access to education and digital literacy, individuals in these communities are unable to participate fully in the digital economy, access information, or develop the skills needed for modern employment. This disparity not only hinders personal growth but also limits the socio-economic development of entire communities.
        Objective:
        Participants are tasked with creating innovative, scalable, and inclusive solutions to improve access to quality education and digital literacy for marginalized communities. The solutions should address the barriers to education and digital access, ensuring that individuals in these communities can acquire the knowledge and skills needed to thrive in the digital age.`,
    },
    {
        title: 'Revolutionizing Athlete Management in the Indian Sporting Industry',
        description: `The Indian sporting industry has seen significant growth in recent years, with increasing participation and interest in various sports. However, the management of athletes remains fragmented and inefficient, lacking a centralized, technology-driven solution. Athletes, coaches, and sports organizations often struggle with challenges such as performance tracking, injury management, career planning, and financial management. The absence of a comprehensive athlete management system hinders the development of athletes, limits their potential, and creates barriers to achieving excellence in sports. There is an urgent need for a unified platform that addresses these challenges and supports the holistic development of athletes in India.
        Objective:
        Participants are tasked with creating an innovative, scalable, and user-friendly Athlete Management Solution tailored to the needs of the Indian sporting industry. The solution should streamline athlete management processes, enhance performance tracking, and provide tools for career development, injury prevention, and financial planning.`,
    },
    {
        title: 'Accelerating Drug Discovery with Generative AI',
        description: `The process of drug discovery is time-consuming, expensive, and often inefficient, with a high rate of failure in clinical trials. Traditional methods rely heavily on trial and error, requiring years of research and significant financial investment. Additionally, the complexity of biological systems and the vast chemical space make it challenging to identify promising drug candidates efficiently. Generative AI, with its ability to analyze large datasets, predict molecular interactions, and generate novel compounds, has the potential to revolutionize this process. However, there is a lack of accessible, user-friendly tools that leverage generative AI to assist researchers in accelerating drug discovery while reducing costs and improving success rates.
        Objective:
        Participants are tasked with creating an innovative, scalable, and user-friendly Drug Discovery Assistant powered by Generative AI. The solution should enable researchers to efficiently identify, design, and optimize potential drug candidates, reducing the time and cost associated with traditional drug discovery methods.`,
    },
    {
        title: 'Building an Inclusive World for Neurodiverse Individuals',
        description: `Neurodiversity, a fundamental dimension of human diversity, encompasses a range of neurological differences such as autism, ADHD, dyslexia, and other cognitive variations. Despite its importance, awareness about neurodiversity remains low in many parts of the world, leading to stigma, discrimination, and a lack of support for neurodiverse individuals. Many neurodiverse people face significant barriers in education, employment, and daily life, preventing them from living independently and reaching their full potential. The absence of accessible solutions tailored to their unique needs further exacerbates these challenges, highlighting the urgent need for innovative, technology-driven approaches to create a more inclusive world.
        Objective:
        Participants are tasked with creating innovative, scalable, and accessible solutions that empower neurodiverse individuals to live independent and fulfilling lives. Solutions should leverage technology to address the unique challenges faced by neurodiverse people and promote inclusivity in education, employment, and daily activities.`,
    },
    {
        title: 'Safeguarding Stories: AI for Intellectual Property Protection',
        description: `Disney's vast library of intellectual property, including movies, TV shows, and characters, is a prime target for cyberattacks and piracy.Unauthorized access and distribution of this content can lead to significant financial losses and damage to the brand.
        Objective:
        Participants are tasked with developing AI-driven solutions to protect Disney's intellectual property from cyber threats. Solutions should include real-time monitoring, automated takedown requests, and predictive analytics to identify and mitigate piracy risks.`,
    },
    {
        title: 'Precision Baking: AI for Accurate Ingredient Measurement in Grams',
        description: `Online recipe platforms often list ingredients in vague measurements like "cups" or "spoons," which can lead to inconsistent results, especially in professional baking. This lack of precision frustrates bakers and affects the quality of their baked goods.
        Objective:
        Participants are tasked with developing AI-powered tools that convert recipe measurements into precise grams. Solutions should include a database of ingredient densities, real-time conversion algorithms, and user-friendly interfaces, ensuring accurate and consistent results for all bakers.`,
    },
    {
        title: 'Empowering Safety Champions: AI-Driven Fire Safety Training for Hotel Staff',
        description: `Traditional fire safety training methods for hotel staff are often repetitive, time-consuming, and fail to engage employees effectively. This results in gaps in preparedness and a lack of confidence in handling real-life emergencies.
        Objective:
        Participants are tasked with developing AI-powered training platforms that enhance fire safety training for hotel staff. Solutions should include interactive simulations, personalized learning paths, and real-time feedback, ensuring staff are well-prepared`,
    },
    {
        title: 'Driving Safer Roads: AI for Motor Insurance Risk Assessment',
        description: `Motor insurance claims are often influenced by driver behaviour, road conditions, and vehicle maintenance, leading to high costs for insurers and customers. Traditional risk assessment methods rely on historical data and lack real-time insights, making it difficult to incentivize safe driving and reduce claims.
        Objective:
        Participants are tasked with developing AI-driven solutions that assess motor insurance risks in real time. Solutions should leverage telematics, IoT, and machine learning to monitor driver behaviour, predict risks, and provide personalized feedback to policyholders, promoting safer driving and reducing claims.`,
    },
    {
        title: 'Navigating Digital Rights: AI for Content Licensing and Compliance',
        description: `As aha expands its content library with originals, exclusives, and theatrical acquisitions, managing digital rights and ensuring compliance with licensing agreements becomes increasingly complex. Manual processes are prone to errors and can lead to legal disputes, revenue loss, and reputational damage.
        Objective:
        Participants are tasked with developing AI-driven solutions to streamline content licensing and rights management. Solutions should include automated contract analysis, compliance tracking, and real-time alerts for licensing violations, ensuring seamless operations and legal compliance.`,
    },
    {
        title: 'Scaling Trust: AI-Powered Detection of Online Harms',
        description: `The rapid growth of online platforms has led to an exponential increase in harmful content, including hate speech, misinformation, and cyberbullying. Traditional moderation methods struggle to keep up with the volume and complexity of these threats, leaving platforms vulnerable to abuse and users exposed to harm.
        Objective:
        Participants are tasked with developing AI-driven solutions that enhance the detection and moderation of harmful content at scale. Solutions should leverage machine learning, natural language processing (NLP), and generative AI to identify and mitigate emerging threats in real time, ensuring safer online communities.`,
    },
    {
        title: 'Disaster Management - Lack of Proper Response and Relay Mechanisms in India',
        description: `When disasters strike India, there is a significant lack of proper response and relay mechanisms. This results in delayed aid, inefficient resource allocation, and increased suffering for affected communities.
        Objective:
        To develop a centralized disaster response and inventory management system that leverages AI to predict disasters, manage responses effectively, and ensure timely allocation of resources.`,
    },
    {
        title: 'Library & Tool for analysis & synthesis of Indian Classical Music',
        description: `This uses a neural & symbolic processing to analyze and synthesize Indian Classical music. Certain parts are done in traditional speech processing for recognition and analysis of audio signals. Some of them are done using symbolic processing for generating & synthesizing notes. Finally some neural (transformer/latent diffusion based models) for parsing and synthesizing audio.
        Objective:
        This use case addresses the problem of analysis and synthesis of Indian Classical Music. The AI-based solution uses a combination of neural and symbolic processing to analyze and synthesize Indian Classical music. Certain parts are done in traditional speech processing for recognition and analysis of audio signals. Some of them are done using symbolic processing for generating & synthesizing notes. Finally some neural (transformer/latent diffusion based models) for parsing and synthesizing audio.`,
    },
    {
        title: 'GenAI-Powered Financial Assistant for Better Investing Decisions',
        description: `GenAI based financial assistant that allows people to ask the most basic questions around investing, but also allows them to find products to invest in. Financial literacy levels are extremely low in India, and while there's a growing number of investors in the market, there's little to no guidance given to them. We're working to bridge that divide and help people invest better. The the 100s of millions of investors coming in to the market, there's only one solution to address the problem and that is using AI. The scale of users simply cannot be addressed through manual means. We are building a GenAI based solution to allow people to have a conversation about their financial needs and be better informed while making a decision.
        Objective:
        The the 100s of millions of investors coming in to the market, there's only one solution to address the problem and that is using AI. The scale of users simply cannot be addressed through manual means. We are building a GenAI based solution to allow people to have a conversation about their financial needs and be better informed while making a decision.`,
    },
    {
        title: 'Harvesting the Future: AI Solutions for Smallholder Farmers',
        description: `Smallholder farmers, who produce a significant portion of the world’s food, often lack access to advanced tools and technologies to optimize their farming practices. This results in lower crop yields, inefficient resource use, and vulnerability to climate change, threatening global food security.
        Objective:
        Participants are tasked with developing AI-based solutions that empower smallholder farmers with real-time insights and recommendations. Solutions should leverage AI for crop monitoring, pest detection, and resource optimization, ensuring scalability and affordability for farmers in developing regions.`,
    },
    {
        title: 'Enhancing Efficiency and Sustainability in Tamil Nadu’s Coastal Fishing Practices',
        description: `Tamil Nadu’s coastal fishermen rely on traditional knowledge to guide their fishing practices, but they face increasing challenges in territorial compliance, efficiency, and sustainability.While their experience provides insights into fish movement patterns based on wind direction, time of day, and ocean conditions, the lack of technological support leads to resource wastage(fuel, time at sea), unintended boundary crossings, and overfishing.Key challenges include:
        Territorial Compliance: Unintentional crossings into international waters result in legal and security issues.
        Fishing Efficiency: Lack of real-time tools to predict fish movement, optimize fishing times, and select appropriate nets.
        Overfishing and Sustainability: Difficulty enforcing the 60-day fishing ban and monitoring catch levels.
        Resource Optimization: Inefficient fuel consumption and trip planning due to reliance on manual methods.
        These challenges threaten the livelihoods of fishermen, the sustainability of marine ecosystems, and the economic stability of coastal communities.
        Objective:
        Participants are tasked with creating a technology-integrated fishing solution that addresses the challenges faced by Tamil Nadu’s coastal fishermen. The solution should leverage GPS, weather analytics, and real-time data to enhance efficiency, ensure territorial compliance, and promote sustainable fishing practices.`,
    },
    {
        title: 'Transforming Plastic Waste into Sustainable Urban Infrastructure',
        description: `Cities across India generate vast amounts of plastic waste, which often ends up in landfills, posing significant health hazards, contributing to environmental pollution, and creating unsightly urban landscapes. Simultaneously, many cities face challenges with deteriorating roads, pavements, and boundary walls, leading to high maintenance costs and unsafe conditions for residents. There is a pressing need for an innovative, sustainable solution that addresses both the plastic waste crisis and the demand for durable, long-lasting urban infrastructure.
        Objective:
        Participants are tasked with creating a technology-driven, sustainable solution to convert plastic waste into durable infrastructure materials, such as roads, pavements, and boundary walls. The solution should integrate smart systems for waste sorting, real-time monitoring, and predictive maintenance to ensure efficiency, transparency, and long-term sustainability.`,
    },
    {
        title: 'Enabling Year-Round Agriculture through Sustainable Irrigation Solutions',
        description: `Farmers on the outskirts of Mumbai, Maharashtra, face severe irrigation challenges due to their reliance on rain-fed water sources. This limits cultivation to just three months of the year, leaving farmland idle for the remaining months. As a result, farmers experience reduced productivity, economic instability, and are often forced to seek low-paying, temporary jobs outside agriculture. Many wish to return to farming as their primary livelihood but lack the tools and technology for sustainable, year-round irrigation. Additionally, prolonged periods of idleness and overuse have led to deteriorating soil health, further compounding the problem. Without innovative water management solutions, farmers struggle to maximize their agricultural potential and improve their livelihoods.
        Objective:
        Participants are tasked with creating innovative, scalable, and sustainable irrigation solutions to enable year-round farming for farmers in Mumbai’s outskirts. The solutions should focus on rainwater harvesting, atmospheric moisture harvesting, and AI-driven water optimization to ensure efficient water capture, storage, and usage.`,
    },
]
