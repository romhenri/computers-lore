import React from 'react';

import { Card } from '../base/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/base/avatar";

interface IProfileCard {
  name: string;
  bio?: string;
  image?: string;
  email?: string;
};

const ProfileCard : React.FC<IProfileCard>  = (
  { name, bio, image, email }
) => {
  return (
    <Card className="flex items-start py-4 px-3 gap-4 w-full 
    lg:basis-[21.4rem]">
      {/* Div with image */}
      <div>
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </div>
      {/* Div with text */}
      <div>
        <h2>{name}</h2>
        <p className="text-neutral-500 text-sm">
          {bio}
        </p>

        {
          email && <p>{email}</p>
        }

      </div>
    </Card>
  )
};

export default ProfileCard;