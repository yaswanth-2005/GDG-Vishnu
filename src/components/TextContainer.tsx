import React from 'react'

// Define color classes based on the variant for light and dark modes
const colorVariants = {
    red: {
        light: 'bg-red-100 text-red-700 border-red-400',
        dark: 'bg-red-900  text-slate-500 border-red-600',
    },
    blue: {
        light: 'bg-blue-100 text-blue-700 border-blue-400',
        dark: 'bg-blue-900 text-blue-100 border-blue-600',
    },
    yellow: {
        light: 'bg-yellow-100 text-yellow-700 border-yellow-400',
        dark: 'bg-yellow-900 text-yellow-100 border-yellow-600',
    },
    green: {
        light: 'bg-green-100 text-green-700 border-green-400',
        dark: 'bg-green-900 text-green-100 border-green-600',
    },
}

interface TextContainerProps {
    title: string
    children: React.ReactNode
    variant: keyof typeof colorVariants
}

const TextContainer: React.FC<TextContainerProps> = ({
    title,
    children,
    variant,
}) => {
    const variantClasses = colorVariants[variant] || colorVariants.red

    return (
        <div
            className={`p-6 font-Poppins rounded-lg shadow-md border  w-5/6 md:w-full m-auto md:mt-8 ${variantClasses.light} dark:${variantClasses.dark}`}
        >
            <h2 className='text-2xl font-bold mb-4'>{title}</h2>
            <p className='text-base  text-slate-600 leading-relaxed'>
                {children}
            </p>
        </div>
    )
}

export default TextContainer
