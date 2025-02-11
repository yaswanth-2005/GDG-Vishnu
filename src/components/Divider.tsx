import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface DividerProps {
  image: StaticImageData;
  altText?: string;
}

const Divider: React.FC<DividerProps> = ({ image, altText = "Divider Image" }) => {
  return (
    <div className="w-full h-32 md:h-48 lg:h-64 relative">
      <Image
        src={image}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="w-full h-full dark:opacity-80"
        priority
      />
    </div>
  );
};

export default Divider;

