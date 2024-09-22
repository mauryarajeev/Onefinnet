import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaCog, FaBell, FaTh, FaSearch } from 'react-icons/fa';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  // State to handle the sidebar toggle on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to handle the sidebar toggle
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
      {/* Left section with logo and sidebar toggle button */}
      <div className="flex items-center space-x-4">
        {/* Company Name */}
        <p className="text-lg font-semibold text-black">Onefinnet</p>

        {/* Toggle button for Sidebar (visible on smaller screens) */}
        <button onClick={handleToggleSidebar} className="focus:outline-none">
          <FaBars size={24} className="text-black" />
        </button>
      </div>

      {/* Right section with icons and search */}
      <div className="flex items-center space-x-6">
        {/* 9-dot grid icon */}
        <FaTh size={24} className="text-gray-600" />

        {/* Search Bar with Search Icon */}
        <div className="hidden lg:block relative">
          <input
            type="text"
            placeholder="Start searching"
            className="p-2 pl-10 border border-gray-300 rounded-full w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Settings Icon */}
        <FaCog size={24} className="text-gray-600" />

        {/* Notification Icon with Badge */}
        <div className="relative">
          <FaBell size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-2 inline-flex items-center justify-center h-4 w-4 bg-red-600 text-white text-xs font-bold rounded-full">9</span>
        </div>

        {/* User Profile Icon */}
        <FaUserCircle size={24} className="text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
