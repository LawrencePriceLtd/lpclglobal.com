import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const AboutItems = () => {
  // eslint-disable-next-line no-unused-vars
  const { theme } = useContext(ThemeContext);
  return (
    <div className="absolute right-0 shadow bg-white md:px-10 md:pt-10 md:pb-28 z-40 dark:bg-gray-900 dark:shadow-lg">
      <div className="flex items-center md:space-x-16">
        <div className="flex space-x-3">
          <div>
            <a href="#a" className="block">Lawrence Price & Co</a>
            <a href="#a" className="block">Management Team</a>
            <a href="#a" className="block">Our Partners</a>
          </div>
          <div>
            <a href="#a" className="block">All Team Members</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItems;
