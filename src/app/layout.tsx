import './globals.css'

import { Inter, Poppins, Ubuntu, Rubik, Open_Sans } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'

import Navbar from '../components/Navbar'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const rubik = Rubik({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-rubik',
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['500'],
})

const ubuntu = Ubuntu({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-ubuntu',
})

const open_sans = Open_Sans({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-open_sans',
})

 

export const metadata = {
    title: 'Google Developer Groups @ VIT-B',
    description: 'GDG is officially live and Innovation starts here!',
    openGraph: {
        title: 'Google Developer Groups @ VIT-B',
        description: 'GDG is officially live and Innovation starts here!',
        url: 'https://gdg-vit.vercel.app/',  
        images: [
            {
                url: '/opengraph-image.jpg',  
                width: 1200,
                height: 830,
                alt: 'GDG VIT-Banner',
            },
        ],
    },
    // twitter: {
    //     card: 'summary_large_image',
    //     title: 'Google Developer Groups @ VIT-B',
    //     description: 'GDG is officially live and Innovation starts here!',
    //     images: ['/images/twitter-card.jpg'], // Path to the Twitter card image
    // },
};





export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): React.ReactNode {
    return (
        <html
            className={`${inter.variable} ${poppins.variable} ${ubuntu.variable} ${rubik.variable} ${open_sans.variable}`}
        >
            <Analytics />
            <body>
                {/* TEMP  */}
                <Navbar />
                {children}
            </body>
        </html>
    )
}
