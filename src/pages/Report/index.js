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
              src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2398&q=80"
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
                m
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
