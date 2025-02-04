import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar h-20 top-0 border border-white text-white flex gap-5 cursor-pointer">
        <h1 className="text-2xl p-2 my-auto">[portfolio]</h1>
        <div className="hover:bg-white hover:text-black p-3 font-bold py-7 ">
          <Link href="/home">Home</Link>
        </div>
        <div className="hover:bg-white hover:text-black p-3 font-bold py-7">
          <Link href="#home">Projects</Link>
        </div>
        <div className="hover:bg-white hover:text-black p-3 font-bold py-7">
          <Link href="#home">About Me</Link>
        </div>
        <div className="hover:bg-white hover:text-black p-3 font-bold py-7">
          <Link href="#home">{"Blogs"}</Link>
        </div>
        <div className="hover:bg-white hover:text-black p-3 font-bold py-7 ">
          <Link href="#home" >{"</>"}</Link>
        </div>
        
    </nav>
  );
};

export default Navbar;
