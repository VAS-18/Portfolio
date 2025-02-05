"use client"
import React, { useState } from "react";
import Image from "next/image";
import Card from "@/components/card/card";
import HomeCard from "@/components/card/HomeCard";
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import TypewriterComponent from "typewriter-effect";

const Homepage: React.FC = () => {
  const name = "Uday Vashishtha";
  const [positions, setPositions] = useState({
    homecard: { x: 1000, y: 500 },
    voidcard: {x: 1300, y: 200 }
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, delta } = event;
    if (delta) {
      setPositions(currentPositions => ({
        ...currentPositions,
        [active.id]: {
          x: currentPositions[active.id as keyof typeof currentPositions].x + delta.x,
          y: currentPositions[active.id as keyof typeof currentPositions].y + delta.y,
        }
      }));
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-screen w-screen overflow-hidden">
        <div className="relative h-full w-full px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto h-full">
            <div className="w-full lg:w-auto pt-10 lg:pt-20 mx-2 lg:mx-5">
              <p className="font-extralight text-white text-lg sm:text-xl break-words">
                {">"} Hi My Name is <span className="text-xl sm:text-2xl font-bold animate-pulse">[{name}]</span>
              </p>
              <ul className="mt-6 lg:mt-10">
                <li className="text-white font-mono text-base sm:text-xl mt-2">{"$"} I am a Full Stack Developer</li>
                <li className="text-white font-mono text-base sm:text-xl mt-2">{"$"} Low Level Enthusiast </li>
                <li className="text-white font-mono text-base sm:text-xl mt-2">{"$"} I am a Full Stack Developer</li>
                <li className="text-white font-mono text-base sm:text-xl mt-2">{"$"} I am a Full Stack Developer</li>
              </ul>
              <div className="mt-20 text-white font-pixel">
                <TypewriterComponent
                options={{
                    strings: ['...'],
                    
                    delay:1000,
                    cursor:"...",
                }}
              />
                <div className="font-mono">
                  <ul>
                    <li>$ MERN stack</li>
                    <li>$ MERN stack</li>
                    <li>$ MERN stack</li>
                    <li>$ MERN stack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
            <div 
              className="pointer-events-auto absolute"
              style={{
                transform: `translate(${positions.voidcard.x}px, ${positions.voidcard.y}px)`,
              }}
            >
              <Card />
            </div>

            <div 
              className="pointer-events-auto absolute"
              style={{
                transform: `translate(${positions.homecard.x}px, ${positions.homecard.y}px)`,
              }}
            >
              <HomeCard />
            </div>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default Homepage;
