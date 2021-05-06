import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Report = () => {
  // eslint-disable-next-line no-unused-vars
  const a = 2;

  return (
    <>
      <Navbar />
      <section>
        <div className="md:px-16 md:py-40 py-20 px-5">
          <div className="md:flex">
            <div className="md:w-1/5" />
            <div className="md:w-3/5">
              <div className="flex justify-between">
                <span className="text-xs text-orange font-bold uppercase">Report</span>
                <span className="text-8px text-textgrey">Lawrence Price business solution</span>
              </div>
              <h1 className="text-4xl font-trirong font-medium dark:text-white pt-2">The First and Best Way, Business Entry Innovation for 2021.</h1>
              <p className="text-lg text-coregray pt-5 dark:text-gray-300">
                Bless me, Poole, what brings you here?” he cried; and then taking
                a second look at him, “What ails you?” he added; “is the doctor ill
              </p>
            </div>
            <div className="md:w-1/5" />
          </div>
          <div className="md:pt-16">
            <img
              className="w-full md:h-64 object-cover"
              src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Banner"
            />
          </div>
          <div className="md:flex md:space-x-24 md:space-y-0 space-y-12 md:pt-40 pt-20">
            <div className="md:w-3/5">
              <Slide direction="down">
                <div>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="21" fill="url(#paint0_angular)" />
                    <defs>
                      <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(21)">
                        <stop stopColor="#FF8300" />
                        <stop offset="1" stopColor="#E6D308" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </Slide>
              <div className="md:py-20 py-16">
                <div className="w-64 border-b border-coregray" />
              </div>
              <p className="text-24px text-gray2 md:pt-24 pt-8 dark:text-gray-300">
                That is just what I was about to venture to propose,”
                returned the doctor with a smile. But the words were hardly uttered,
                before the smile was struck out of his face and succeeded by an expression
                of such abject terror and despair, as froze the very blood of the two
                gentlemen below.
              </p>
              <p className="text-24px text-gray2 pt-4 dark:text-gray-300">
                They saw it but for a glimpse for the window was instantly thrust down;
                but that glimpse had been sufficient, and they turned and left the court
                without a word.In silence, too, they traversed the by- street; and it was
                not until they had come into a neighbouring thoroughfare, where even upon
                a Sunday there were still some stirrings of life, that Mr.
              </p>
              <p className="text-24px text-gray2 pt-4 dark:text-gray-300">
                Utterson at last turned and looked at his companion.They were both pale;
                and there was an answering horror in their eyes.
              </p>
            </div>
            <div className="md:w-2/5">
              <div className="md:pt-28">
                <div>
                  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="21.5" r="21.5" fill="#61686C" />
                    <path d="M26.2946 24.3333C25.9204 24.3347 25.5504 24.4117 25.2067 24.5597C24.863 24.7077 24.5528 24.9236 24.2946 25.1944L17.5224 21.8055C17.689 21.3004 17.689 20.7551 17.5224 20.25L24.3057 16.8C24.7916 17.312 25.4505 17.6251 26.1543 17.6783C26.8582 17.7316 27.5567 17.5213 28.1141 17.0882C28.6715 16.6552 29.048 16.0304 29.1704 15.3352C29.2928 14.64 29.1523 13.9242 28.7763 13.3268C28.4003 12.7294 27.8156 12.2932 27.1359 12.1029C26.4562 11.9126 25.73 11.9818 25.0985 12.2971C24.467 12.6124 23.9752 13.1512 23.7188 13.8089C23.4625 14.4665 23.4598 15.196 23.7113 15.8555L16.9946 19.2722C16.6319 18.8286 16.1408 18.508 15.5887 18.3544C15.0366 18.2008 14.4505 18.2217 13.9107 18.4143C13.371 18.6069 12.904 18.9617 12.5738 19.43C12.2436 19.8984 12.0664 20.4575 12.0664 21.0305C12.0664 21.6036 12.2436 22.1626 12.5738 22.631C12.904 23.0994 13.371 23.4542 13.9107 23.6468C14.4505 23.8393 15.0366 23.8603 15.5887 23.7067C16.1408 23.5531 16.6319 23.2325 16.9946 22.7889L23.6946 26.1611C23.5814 26.4651 23.5231 26.7867 23.5224 27.1111C23.5224 27.6605 23.6853 28.1975 23.9905 28.6543C24.2957 29.1111 24.7296 29.4672 25.2372 29.6774C25.7447 29.8877 26.3032 29.9427 26.8421 29.8355C27.3809 29.7283 27.8759 29.4637 28.2643 29.0753C28.6528 28.6868 28.9174 28.1918 29.0246 27.653C29.1317 27.1142 29.0767 26.5556 28.8665 26.0481C28.6562 25.5405 28.3002 25.1067 27.8434 24.8014C27.3866 24.4962 26.8496 24.3333 26.3002 24.3333H26.2946Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Report;
