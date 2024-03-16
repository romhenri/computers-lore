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
        `w-[500px] ${tokens} ${bg} bg-cover bg-center bg-no-repeat rounded p-4 mb-8`
      }>
        {
          children
        }
      </div>
    </div>
  )
};

export default Timeline;