import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [currentLanguage, setCurrentLanguage] = useState("tr"); 
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang); 
    i18n.changeLanguage(lang); 
    setIsDropdownOpen(false);
  };
  return (
    <nav className="mb-20 flex flex-col lg:flex-row items-center justify-between py-6">
      <div className="flex-flex-shrink-0 items-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Sercan Turhan
    </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-2xl">
        <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sercanturhan"  target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sercantrhnn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/sercantrhnn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/sercantrhnn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        </div>
        <div className="relative mt-4 lg:mt-0">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="block w-full px-4 py-2 text-left text-sm font-semibold bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
        >
          {currentLanguage === "tr" ? "Türkçe" : "English"}
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-purple-700 shadow-lg rounded">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-800 transition duration-300"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("tr")}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-800 transition duration-300"
            >
              Türkçe
            </button>
          </div>
        )}
      </div>
      </div>
      
    </nav>
  );
}
