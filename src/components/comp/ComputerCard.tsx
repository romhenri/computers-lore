import React from 'react';
import { Card } from '@/components/base/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/base/image";

interface IComputerCardProps {
  machine: string;
  creator: string;
  year: number;
}

const ComputerCard : React.FC<IComputerCardProps> = (
  {
    machine, creator, year
  }
) => {
  return (
    <Card className="p-3 flex gap-3">
      <div>
        <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/1024025?v=4" alt="@shadcn" />
        <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h3>{machine} ({year})</h3>
        <p className="text-neutral-500">
          {creator} 
        </p>
      </div>
    </ Card>
  )
};

export default ComputerCard;