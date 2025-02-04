import React from "react";
import Image from "next/image";
import Card from "@/components/card/card";
const Homepage: React.FC = () => {

  const name = "Uday Vashishtha";
  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex justify-between items-start">
        <div className="pl-0">
          <p className="font-extralight text-white text-xl">
            Hi My Name is <span className="text-2xl font-bold animate-pulse">[{name}]</span>
          </p>
        </div>
        <div className="my-10 p-10">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
