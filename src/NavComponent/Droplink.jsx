import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";

function DropdownLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to="/local-1/beauty-and-spas"
        className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
          isHovered ? "text-yellow-500" : ""
        }`}
      >
        <FontAwesomeIcon icon={faSpa} className="mr-2 hidden sm:inline" /> Beauty & Spas
      </Link>

      {isHovered && (
        <div className="absolute left-0 mt-2 min-w-[150px] flex-col space-y-1 rounded-md bg-white p-2 shadow-md z-10">
          <Link to="/local-1/link1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
            Link 1
          </Link>
          <Link to="/local-1/link2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
            Link 2
          </Link>
          <Link to="/local-1/link3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
            Link 3
          </Link>
        </div>
      )}
    </div>
  );
}

export default DropdownLink;
