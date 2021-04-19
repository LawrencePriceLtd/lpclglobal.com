import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// images
import Sphere from '../../assets/sphere.svg';
import Razor from '../../assets/razor.svg';

const Home = () => (
  <div>
    <Navbar />
    <section>
      <div className="md:flex md:space-x-10 md:px-16 md:pt-40 md:pb-20">
        <div className="md:w-1/2">
          <h1 className="text-4rem font-trirong font-medium dark:text-white">
            We are here for those
            who are bold enough
            to face
            <span className="text-lawrenceprice"> Change.</span>
          </h1>
          <h1 className="text-4xl md:pt-10 pt-4 dark:text-gray-400">
            Driving business Innovation across Africa
            and beyond
          </h1>
        </div>
        <div className="md:w-1/2">
          <img className="block pt-10" src={Sphere} alt="sphere" />
        </div>
      </div>
    </section>
    <section>
      <div className="md:px-16 md:py-20">
        <h1 className="font-trirong text-4rem font-medium dark:text-white">The Future is Now.</h1>
        <h1 className="text-4xl font-medium text-coregray dark:text-gray-400 pt-4">
          Creating and building Solutions
          <br />
          to Africa’s Business Problems.
        </h1>
        <div className="md:flex justify-start items-end">
          <img className="block pt-12" src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618847443/blackboxlanding/solutions_hsc5ob.svg" alt="mechanism" />
          <button type="button" className="bg-orange hover:bg-yellow-600 flex items-center space-x-6 text-lg font-medium md:pl-20 md:pr-10 text-white md:pb-6 md:pt-36 flex-grow-0">
            <span>Start Now</span>
            <span>
              <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill="white" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
    <section>
      <div className="md:flex items-center md:px-16 md:py-20">
        <div className="md:w-1/2">
          <h1 className="text-lg text-orange font-medium">Lawrence Price Wealth</h1>
          <p className="text-5xl font-trirong font-medium pt-10 dark:text-white">
            leveraging innovation and
            advanced analytics to create
            bespoke investment products
          </p>
          <p className="font-medium text-coregray font-medium text-4xl md:pt-10 pt-4 dark:text-gray-400">
            Then, who taught you? who attended
            to you? Without a governess, you must
            have been neglected.
          </p>
          <div className="md:pt-16">
            <button type="button" className="hover:text-yellow-600 text-orange flex items-center space-x-2 text-24px font-bold">
              <span>Read more</span>
              <span>
                <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM36.8839 10.8839C37.372 10.3957 37.372 9.60427 36.8839 9.11612L28.9289 1.16117C28.4408 0.67301 27.6493 0.67301 27.1612 1.16117C26.673 1.64932 26.673 2.44078 27.1612 2.92893L34.2322 10L27.1612 17.0711C26.673 17.5592 26.673 18.3507 27.1612 18.8388C27.6493 19.327 28.4408 19.327 28.9289 18.8388L36.8839 10.8839ZM1.5 11.25H36V8.75H1.5V11.25Z" fill="#FF8300" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={Razor} alt="Razor" />
        </div>
      </div>
    </section>
    <section>
      <Footer />
    </section>
  </div>
);

export default Home;
