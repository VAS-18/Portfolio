"use client"
import React from "react";
import Image from "next/image";
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const Card: React.FC = () => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'voidcard',
  });
  
  const style = transform ? {
    transform: CSS.Transform.toString(transform),
    touchAction: 'none',
  } : undefined;

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      {...attributes} 
      {...listeners}
      className="container w-[500px] sm:w-[300px] lg:w-[500px] border-2 border-white border-dashed bg-black cursor-grab z-[9999]"
    >
      <div className="outer-container border border-dashed border-t-0">
        <div className="flex justify-between w-full space-x-2 p-2">
          <div className="font-terminal text-xs sm:text-sm p-1">Photo : /void.gif</div>
          <div className="border border-dashed border-white text-white font-mono p-1">
            <button className="font-extrabold text-base sm:text-lg">X</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/void.gif"
          alt="void"
          width={500}
          height={500}
          unoptimized={true}
          className=""
          priority
        />
      </div>
    </div>
  );
};

export default Card;
