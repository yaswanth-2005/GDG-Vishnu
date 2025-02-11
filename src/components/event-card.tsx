// import Image, { StaticImageData } from 'next/image'
// import React from 'react'
// import Link from 'next/link'

// interface EventCardProps {
//     bannerImage: StaticImageData
//     title: string
//     slug: string
//     description: string
//     date?: string
// }

// const EventCard: React.FC<EventCardProps> = ({
//     bannerImage,
//     title,
//     slug,
//     description,
//     date,
// }) => {
//     return (
//         <Link
//             href={`/${slug}`}
//             className='max-w-sm sm:w-[500px] w-[350px] h-[450px] sm:h-[400px] bg-white border-2 border-black rounded-[20px] hover:shadow-2xl flex-shrink-0'
//         >
//             {/* Banner Image Section */}
//             <div className='relative w-full h-[200px] overflow-hidden rounded-t-[20px]'>
//                 <Image
//                     src={bannerImage}
//                     alt={title}
//                     width={500}
//                     height={600}
//                     className='w-full h-full rounded-t-[20px] border-black border-2'
//                 />
//             </div>

//             <hr className='border-t-2 border-black w-full' />

//             {/* Content Area */}
//             <div className='pl-4 pr-4 pt-3 pb-6 flex-grow'>
//                 <h2 className='text-lg font-bold mb-2 font-google_sans_display text-left'>
//                     {title}
//                 </h2>
//                 <p className='text-gray-700 text-left break-words truncate font-google_sans_display py-1'>
//                     {description}
//                 </p>
//                 <p className='text-gray-700 text-left font-semibold'>
//                     {date ? date : 'UPCOMING'}
//                 </p>
//             </div>

//             {/* Footer with Tags and RSVP Button */}
//             <div className='flex justify-between items-center p-4 mt-auto'>
//                 <div className='flex space-x-3 py-1'>
//                     <span className='inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-700'>
//                         #gaming
//                     </span>
//                     <span className='inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-700'>
//                         #hackathon
//                     </span>
//                 </div>
//                 <button className='bg-blue-500 text-white text-center px-6 py-1 rounded backdrop-blur transition-colors hover:bg-white/30 hover:text-black'>
//                     VIT-B
//                 </button>
//             </div>
//         </Link>
//     )
// }

// export default EventCard

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface EventCardProps {
    bannerImage: string
    title: string
    slug: string
    description: string
    date?: string
}

const EventCard: React.FC<EventCardProps> = ({
    bannerImage,
    title,
    slug,
    description,
    date,
}) => {
    return (
        <Link
            href={`/${slug}`}
            className='max-w-sm sm:w-[500px] w-[370px] h-[450px] sm:h-[400px]  bg-slate-900/50 border-2 border-black rounded-[20px] hover:shadow-2xl flex-shrink-0 flex flex-col'
        >
            {/* Banner Image Section */}
            <div className='relative w-full h-[200px] overflow-hidden rounded-t-[18px]'>
                <Image
                    src={bannerImage}
                    alt={title}
                    fill
                    sizes='(max-width: 500px) 100vw, 500px'
                    className='object-cover'
                />
            </div>

            <hr className='border-t-2 border-black w-full' />

            {/* Content Area */}
            <div className='pl-4 pr-4 pt-3 pb-6 flex-grow'>
                <h2 className='text-lg font-bold mb-2 font-google_sans_display text-left'>
                    {title}
                </h2>
                <p className='text-gray-700 text-left break-words truncate font-google_sans_display py-1'>
                    {description}
                </p>
                <p className='text-gray-700 text-left font-semibold'>
                    {date ? date : 'UPCOMING'}
                </p>
            </div>

            {/* Footer with Tags and RSVP Button */}
            <div className='flex justify-between items-center p-4 mt-auto'>
                <div className='flex space-x-3 py-1'>
                    <span className='inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-700'>
                        #GDG-VITB
                    </span>
                    {/* <span className='inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-700'>
                        #hackathon
                    </span> */}
                </div>
                <button className='bg-blue-500 text-white text-center px-6 py-1 rounded backdrop-blur transition-colors hover:bg-white/30 hover:text-black'>
                    VIT-B
                </button>
            </div>
        </Link>
    )
}

export default EventCard
