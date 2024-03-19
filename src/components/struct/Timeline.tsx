import React from 'react';

interface ITimelineProps {
  children: React.ReactNode;
  tokens: string;
  bg: string;
}

const Timeline : React.FC<ITimelineProps> = ({
  children,
  tokens,
  bg
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className={
        `w-[500px] min-w-[500px] ${tokens} ${bg} bg-cover bg-center bg-no-repeat rounded p-4 mb-8
        
        origin-top
        scale-75 sm:scale-100

        max-[400px]:scale-[0.7]
        max-[350px]:scale-[0.6]
        max-[300px]:scale-[0.5]
        `
      }>
        {
          children
        }
      </div>
    </div>
  )
};

export default Timeline;