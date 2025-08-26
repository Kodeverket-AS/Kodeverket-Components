"use client";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({}); // Holder styr på åpne undermenyer

  const toggleSubmenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-100 border-r border-gray-300 h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-16"} flex flex-col`}>
        {/* Logo + toggle */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <span className="text-xl font-bold text-gray-700">{isOpen ? "MyApp" : "M"}</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-200"
          >
            ☰
          </button>
        </div>

        {/* Navigasjon */}
        <nav className="flex-1 mt-4 px-2 space-y-2">
          {/* Home (uten underkategorier) */}
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>

          
          <div>
            <button
              onClick={() => toggleSubmenu("Nav")}
              className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center"
            >
              Nav
              <span>{openMenus.Nav ? "▲" : "▼"}</span>
            </button>
            {openMenus.Nav && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Team</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">History</a>
              </div>
            )}
          </div>

          
          <div>
            <button
              onClick={() => toggleSubmenu("Hero")}
              className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center"
            >
              Hero
              <span>{openMenus.Hero ? "▲" : "▼"}</span>
            </button>
            {openMenus.Hero && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Design</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Development</a>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSubmenu("Main")}
              className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center"
            >
              Main
              <span>{openMenus.Main ? "▲" : "▼"}</span>
            </button>
            {openMenus.Main && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Design</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Development</a>
              </div>
            )}
          </div>

                    <div>
            <button
              onClick={() => toggleSubmenu("Footer")}
              className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center"
            >
              Footer
              <span>{openMenus.Footer ? "▲" : "▼"}</span>
            </button>
            {openMenus.Footer && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Design</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Development</a>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSubmenu("SingelItems")}
              className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center"
            >
              Singel Items
              <span>{openMenus.SingelItems ? "▲" : "▼"}</span>
            </button>
            {openMenus.SingelItems && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="#" className="block text-gray-600 hover:text-blue-500">Buttonons</a>
                <a href="#" className="block text-gray-600 hover:text-blue-500">Serchbars</a>
              </div>
            )}
          </div>

            

          {/* Contact (uten underkategorier) */}
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>

      {/* Hovedinnhold */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4 text-gray-600">
          Her kommer hovedinnholdet. Sidebaren holder seg til venstre.
        </p>
      </div>
    </div>
  );
}
