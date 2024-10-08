import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { Card } from '@/components/base/card';

interface IChapCardProps {
  name: string;
  desc: string;
  info?: string; 
  img?: string;
  pathPage: Url;
  alt?: string;
}

const ChapCard : React.FC<IChapCardProps> = (
  {
    name,
    desc,
    info,
    pathPage,
    img = "https://computers-lore.vercel.app/assets/images/turing-generated-by-ia.jpg",
    alt
  }
) => {
  return (
    <Link href={pathPage}>
      <Card className="p-3 flex gap-3 flex-col max-w-[350px]">
        <div className="w-full max-w-[345px] h-[150px] overflow-hidden">
          <Image
            className="rounded-lg w-80 object-cover"
            src={img}
            alt={alt || name}
            priority
            width={350}
            height={200}
          />
        </div>
        <div>
          <h3>{name} ({info})</h3>
          <p className="text-neutral-500">
            {desc} 
          </p>
        </div>
      </ Card>
    </Link>
  );
};

export default ChapCard;