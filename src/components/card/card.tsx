import React from "react";
import Image from "next/image";
const Card: React.FC = () => {
  return (
    <div className="container w-auto h-auto min-w-full border-2 border-white  border-dashed">
      <div className="outer-container border-b-1 border-dashed border-white ">
        <div className="flex justify-between w-full space-x-2 ">
          <div className="font-mono text-white p-2">image.png</div>
          <div className="border border-dashed border-white text-white font-mono">
            <button className="">X</button>
          </div>
        </div>
      </div>
      <div>
        <Image src="/image.png" alt="image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Card;
