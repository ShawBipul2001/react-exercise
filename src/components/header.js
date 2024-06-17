import React, { useState } from 'react';

const Header = ({isDarkMode, toggleDarkMode}) => {

  return (
    <div className=" bg-blue-500 w-full dark:bg-black dark:from-stone-50 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Users List</div>
      <button
        className="px-4 py-2 rounded bg-gray-200 text-black dark:bg-white "
        onClick={toggleDarkMode}
      >
        {isDarkMode ==='dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Header;
