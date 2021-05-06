import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const { theme } = useContext(ThemeContext);
  return (
    <div className="absolute right-0 shadow bg-white md:px-10 md:pt-10 md:pb-28 z-40 dark:bg-gray-900 dark:shadow-lg">
      <div className="flex items-center md:space-x-16">
        <a href="#a" className="flex flex-1 space-x-4 items-center hover:bg-gray-100 p-4 rounded dark:hover:bg-gray-800">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.42731 32.7307C3.91151 32.0658 3.6536 31.3404 3.6536 30.5547C3.6536 30.0107 3.76823 29.4667 3.99747 28.9227C4.28403 28.3787 4.59924 27.9253 4.94311 27.5627L13.9697 19.584L2.19216 16.5013C1.3898 16.2596 0.788032 15.7458 0.386852 14.96C0.0429838 14.1742 -0.0716392 13.2978 0.0429834 12.3307C0.157606 11.5449 0.530132 10.9102 1.16056 10.4267C1.84829 9.88267 2.59334 9.61067 3.3957 9.61067C3.85419 9.61067 4.37 9.76178 4.94311 10.064L15.4311 16.32L13.5398 4.17067L13.4539 3.44533C13.4539 2.47822 13.7404 1.66222 14.3135 0.997331C14.944 0.332444 15.8323 0 16.9785 0C18.1247 0 18.9844 0.332444 19.5575 0.997331C20.188 1.66222 20.5032 2.47822 20.5032 3.44533L20.4172 4.17067L18.5259 16.32L29.0139 10.064C29.587 9.76178 30.1028 9.61067 30.5613 9.61067C31.5356 9.61067 32.338 9.94311 32.9684 10.608C33.6561 11.2729 34 12.0889 34 13.056C34 13.9022 33.7994 14.6578 33.3982 15.3227C32.9971 15.9271 32.4526 16.32 31.7649 16.5013L19.9874 19.584L29.0139 27.5627C29.3578 27.9253 29.6443 28.3787 29.8736 28.9227C30.1601 29.4667 30.3034 30.0107 30.3034 30.5547C30.3034 31.3404 30.0455 32.0658 29.5297 32.7307C28.842 33.5769 27.8963 34 26.6928 34C26.1197 34 25.5466 33.8791 24.9735 33.6373C24.4577 33.3351 24.0565 32.9422 23.7699 32.4587L16.9785 21.3067L10.1871 32.4587C9.90055 32.9422 9.47071 33.3351 8.8976 33.6373C8.3818 33.8791 7.83734 34 7.26422 34C6.06068 34 5.11505 33.5769 4.42731 32.7307Z" fill="#FF8300" />
          </svg>
          <div>
            <span className="block text-24px font-trirong font-medium capitalize dark:text-white">Wealth</span>
          </div>
        </a>
        <a href="#a" className="flex flex-1 space-x-4 items-center hover:bg-gray-100 p-4 rounded dark:hover:bg-gray-800">
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="16.5" stroke="#FF8300" strokeWidth="2" />
            <circle cx="17.5" cy="17.5" r="4.5" stroke="#FF8300" strokeWidth="2" />
            <path d="M5.98047 6.42358L14.5004 14.4998" stroke="#FF8300" strokeWidth="2" />
            <path d="M20.5 20.5L29.5 28" stroke="#FF8300" strokeWidth="2" />
            <path d="M0.999908 17.6386L12.9999 17.6386" stroke="#FF8300" strokeWidth="2" />
            <path d="M5.49978 28L14.4998 20.5" stroke="#FF8300" strokeWidth="2" />
            <path d="M19.8536 13.7505L27.2502 4.74963" stroke="#FF8300" strokeWidth="2" />
            <path d="M21.9158 17.5L33.2499 17.5" stroke="#FF8300" strokeWidth="2" />
            <path d="M17.5001 12.9996L17.5002 1.74963" stroke="#FF8300" strokeWidth="2" />
            <path d="M17.5 34L17.5 22" stroke="#FF8300" strokeWidth="2" />
          </svg>
          <div>
            <span className="block text-24px font-trirong font-medium capitalize dark:text-white">Capital</span>
          </div>
        </a>
        <a href="#a" className="flex flex-1 space-x-4 items-center hover:bg-gray-100 p-4 rounded dark:hover:bg-gray-800">
          <svg width="68" height="51" viewBox="0 0 68 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="30.5" r="9.5" stroke="#FF8300" strokeWidth="2" />
            <circle cx="48.5" cy="30.5" r="9.5" stroke="#FF8300" strokeWidth="2" />
            <path d="M24.5 25.5C27.2302 28.5185 34.5 31 40.5 25.5" stroke="#FF8300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="58.5" cy="17.5" r="1.5" fill="#FF8300" />
            <path d="M31 35C31.2564 35 32.0154 35 33 35" stroke="#FF8300" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <span className="block text-24px font-trirong font-medium capitalize dark:text-white">Business Solutions</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Products;
