import React from 'react';

interface ITimelineProps {
  children: React.ReactNode;
  height?: string;
  bg: string;
}

const Timeline : React.FC<ITimelineProps> = ({
  children,
  height = 2205,
  bg
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className={
        `w-[500px] h-[${height}] ${bg} bg-cover bg-center bg-no-repeat rounded p-4`
      }>
        {
          children
        }
      </div>
    </div>
  )
};

export default Timeline;