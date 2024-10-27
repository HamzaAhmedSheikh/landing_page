import Image from 'next/image';


import React from 'react'
import { Cog, Zap, Plus, Cloud, Check, Users, Clock, Briefcase } from 'lucide-react'

interface CardProps {
  icon: string;
  heading: string;
  subheading: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, heading, subheading }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start">
      <div className="flex items-center justify-center mb-2">
        <Image src={Icon} width={70} height={70} alt="icon" className="w-[70px] h-[70px] mr-4" />
         <h2 className="text-blue-600 font-bold text-2xl leading-[20px] tracking-tight">{heading}</h2>
      </div>
      <p className="text-gray-600 text-sm ml-3">{subheading}</p>
    </div>
  )
}

export default function CardGrid() {
  const cards = [
    { icon: "/images/image.png", heading: 'HEADING', subheading: 'Subheading' },
    { icon: "/images/image2.png", heading: 'HEADING', subheading: 'Subheading' },
    { icon: "/images/image3.png", heading: 'HEADING', subheading: 'Subheading' },
    { icon: "/images/image4.png", heading: 'HEADING', subheading: 'Subheading' },
    { icon: "/images/image5.png", heading: 'HEADING', subheading: 'Subheading' },
    { icon: "/images/image6.png", heading: 'HEADING', subheading: 'Subheading' },
    { icon: "/images/image7.png", heading: 'HEADING', subheading: 'Subheading' },
    { icon: "/images/image8.png", heading: 'HEADING', subheading: 'Subheading' },
  ]

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} heading={card.heading} subheading={card.subheading} />
        ))}
      </div>
    </div>
  )
}
