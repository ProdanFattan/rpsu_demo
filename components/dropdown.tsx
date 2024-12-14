"use client"
import { useState } from "react";
import Image from "next/image"; // for optimized images in Next.js

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center space-x-4 p-4 bg-blue-800 rounded-xl">
        <button
          onClick={toggleDropdown}
          className="bg-transparent border-2 border-orange-500 text-white px-6 py-2 rounded-lg transition-colors hover:bg-orange-600"
        >
          Admissions
        </button>
        <button
          onClick={toggleDropdown}
          className="bg-transparent border-2 border-orange-500 text-white px-6 py-2 rounded-lg transition-colors hover:bg-orange-600"
        >
          ERP
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-56 z-10">
          <div className="flex flex-col items-start p-4 space-y-2">
            <button className="text-gray-800 hover:bg-gray-200 px-4 py-2 w-full text-left">
              Academics Overview
            </button>
            <button className="text-gray-800 hover:bg-gray-200 px-4 py-2 w-full text-left">
              Admission Requirements
            </button>
            <button className="text-gray-800 hover:bg-gray-200 px-4 py-2 w-full text-left">
              Academic Calendar
            </button>
            <button className="text-gray-800 hover:bg-gray-200 px-4 py-2 w-full text-left">
              Tuition & Others Fees
            </button>
            <button className="text-gray-800 hover:bg-gray-200 px-4 py-2 w-full text-left">
              Alumni
            </button>
            <button className="text-gray-800 hover:bg-gray-200 px-4 py-2 w-full text-left">
              Special Waiver / Scholarship
            </button>
            <button className="text-gray-800 hover:bg-gray-200 px-4 py-2 w-full text-left">
              International Admission
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
