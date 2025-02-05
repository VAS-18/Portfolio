"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar h-20 top-0 border-b-2 border-dashed border-white text-white opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-xl sm:text-2xl p-3 my-auto font-vt">[portfolio]</h1>
          <div className="hidden md:flex items-center space-x-4 text-2xl">
            <Link href="/home" className="hover:bg-white hover:text-black px-3 py-2 font-bold font-vt">
              Home
            </Link>
            <Link href="#home" className="hover:bg-white hover:text-black px-3 py-2 font-bold">
              Projects
            </Link>
            <Link href="#home" className="hover:bg-white hover:text-black px-3 py-2 font-bold">
              About Me
            </Link>
            <Link href="#home" className="hover:bg-white hover:text-black px-3 py-2 font-bold">
              Blogs
            </Link>
            <Link href="#home" className="hover:bg-white hover:text-black px-3 py-2 font-bold">
              {"</>"}
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 px-2 pt-2 pb-3 border-t border-dashed border-white">
              <Link 
                href="/home" 
                className="hover:bg-white hover:text-black px-3 py-2 font-bold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#home" 
                className="hover:bg-white hover:text-black px-3 py-2 font-bold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#home" 
                className="hover:bg-white hover:text-black px-3 py-2 font-bold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                href="#home" 
                className="hover:bg-white hover:text-black px-3 py-2 font-bold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href="#home" 
                className="hover:bg-white hover:text-black px-3 py-2 font-bold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {"</>"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
