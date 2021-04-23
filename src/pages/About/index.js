import React from 'react';
import { Rotate, Slide } from 'react-awesome-reveal';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// icons
import globe from '../../assets/globe.svg';
import Partners from '../../components/Partners';

const About = () => (
  <>
    <Navbar />
    <section>
      <div className="md:pl-16 md:py-40">
        <div className="md:flex items-center">
          <div className="md:w-3/5">
            <h1 className="md:text-7xl text-orange font-trirong font-medium">
              We are challenging
              the Status Quo.
            </h1>
          </div>
          <div className="md:w-2/5">
            <Slide direction="right">
              <img src={globe} alt="globe" />
            </Slide>
          </div>
        </div>
        <div>
          <h1 className="text-2xl uppercase text-textgrey font-medium">We</h1>
          <h1 className="capitalize font-trirong text-4rem py-4 dark:text-white">
            Driving Business Growth
            <br />
            Accross Africa and Beyond
          </h1>
          <h1 className="text-5xl font-medium text-coregray capitalize dark:text-orange">Driving the frontiers for business innovation.</h1>
        </div>
      </div>
    </section>
    <section>
      <div className="md:px-16 md:py-40">
        <div className="md:pl-8">
          <Rotate direction="bottom-left">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="21" fill="url(#paint0_angular)" />
              <defs>
                <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(21)">
                  <stop stopColor="#FF8300" />
                  <stop offset="1" stopColor="#E6D308" />
                </radialGradient>
              </defs>
            </svg>
          </Rotate>
        </div>
        <div className="md:pl-8">
          <h1 className="text-5xl font-trirong font-medium dark:text-white md:pt-16">Lawrence Price & Company</h1>
          <h1 className="text-2xl text-textgrey dark:text-orange uppercase pt-5">Management Team</h1>
        </div>
        <div>
          <div className="md:pt-44">
            <div className="bg-altgrey dark:bg-gray-900 px-8 rounded-tl-2xl rounded-tr-2xl relative">
              <div className="md:flex items-center space-x-6 relative md:-top-24">
                <div className="md:w-1/4 relative">
                  <div className="bg-white dark:bg-black absolute bottom-0 left-0 px-5 py-6">
                    <a href="3a" className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                      Onyeabo Okafor
                    </a>
                    <div className="">
                      <p className="text-coregray uppercase text-10px pt-1 dark:text-gray-300">
                        CHAIRMAN LP&CO.
                      </p>
                      <button className="flex space-x-2 items-center mt-3 text-orange uppercase text-8px" type="button">
                        <span>read bio</span>
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L4 4L1 7" stroke="#FF8300" strokeLinecap="square" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <img
                    className="md:h-380px h-96  w-full object-cover"
                    src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1619184026/blackboxlanding/okafor_iwsoeo.svg"
                    alt="people"
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <div className="bg-white dark:bg-black absolute bottom-0 left-0 px-5 py-6">
                    <a href="3a" className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                      Oluseun Taiwo
                    </a>
                    <div className="">
                      <p className="text-coregray text-10px uppercase pt-1 dark:text-gray-300">
                        GCEO  LP&CO, NIGERIA, ZAMBIA.
                      </p>
                      <button className="flex space-x-2 items-center mt-3 text-orange uppercase text-8px" type="button">
                        <span>read bio</span>
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L4 4L1 7" stroke="#FF8300" strokeLinecap="square" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <img
                    className="md:h-380px h-96  w-full object-cover"
                    src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1619184001/blackboxlanding/sean_sibgwd.svg"
                    alt="people"
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <div className="bg-white dark:bg-black absolute bottom-0 left-0 px-5 py-6">
                    <a href="3a" className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                      Abiodun A.
                    </a>
                    <div className="">
                      <p className="uppercase text-coregray text-10px pt-1 dark:text-gray-300">
                        MD, Business Solutions  LP&CO.
                      </p>
                      <button className="flex space-x-2 items-center mt-3 text-orange uppercase text-8px" type="button">
                        <span>read bio</span>
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L4 4L1 7" stroke="#FF8300" strokeLinecap="square" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <img
                    className="md:h-380px h-96  w-full object-cover"
                    src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618821392/blackboxlanding/IMG_3017_ltypby.jpg"
                    alt="people"
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <div className="bg-white dark:bg-black absolute bottom-0 left-0 md:px-10 px-5 py-6">
                    <a href="3a" className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                      Rukayat O.
                    </a>
                    <div className="">
                      <p className="uppercase text-coregray text-10px pt-1 dark:text-gray-300">
                        HEAD DATA & ANALYTICS  LP&CO.
                      </p>
                      <button className="flex space-x-2 items-center mt-3 text-orange uppercase text-8px" type="button">
                        <span>read bio</span>
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L4 4L1 7" stroke="#FF8300" strokeLinecap="square" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <img
                    className="md:h-380px h-96  w-full object-cover"
                    src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618305827/blackboxlanding/Rukayat_1.25x_zlw96o.jpg"
                    alt="people"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="relative">
        <div className="absolute md:px-16 px-5 py-16 md:py-40">
          <h1 className="text-lg text-white font-bold uppercase">Lawrence Price & Company.</h1>
          <h1 className="font-trirong font-semibold md:text-4rem text-5xl text-white md:pt-96 pt-5">
            The Future of Tech &
            <br />
            Coporate Growth in Africa
          </h1>
          <h1 className="font-medium text-5xl text-white capitalize md:pt-6">Sustainable Goals</h1>
          <div>
            <button type="button" className="flex text-white text-lg font-medium space-x-2 items-center mt-6">
              <span>Learn How</span>
              <span>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill="white" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <img className="md:h-900px h-96 w-full md:w-full" src="https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="leaf" />
      </div>
    </section>
    <section>
      <Partners />
    </section>
    <Footer />
  </>
);

export default About;
