"use client"

import { useState } from "react";

export function NavBarDesktop() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="hidden sm:flex">
      <div className='bg-gray-100 h-full w-[500px]'>
        <h1 className="text-black"> {/*Logo*/} Component</h1>
        <div className="gap-1">
          <a href="#" className="text-blue-700 hover:text-blue-300">Hjem</a>
          <a href="#" className="text-blue-700 hover:text-blue-300">Nav</a>
          <a href="#" className="text-blue-700 hover:text-blue-300">Footer</a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-2xl over:bg-gray-200"
            >
            ☰         
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
        )}
      </div>
    </nav>
  );
}