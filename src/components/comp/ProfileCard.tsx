import React from 'react';

import { Card } from '../ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface IProfileCard {
  name: string;
  bio?: string;
  image?: string;
  email?: string;
}

const ProfileCard : React.FC<IProfileCard>  = (
  { name, bio, image, email }
) => {
  return (
    <Card className="flex items-start p-4 gap-4 w-full lg:w-96 mx-auto">
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