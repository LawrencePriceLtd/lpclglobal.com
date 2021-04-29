import React from 'react';
// import { Link } from 'react-router-dom';
import { Rotate, Slide } from 'react-awesome-reveal';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Partners from '../../components/Partners';

import bios from '../../json/bios';

// images/icons
import Sphere2 from '../../assets/sphere2.svg';
import BioCard from '../../components/BioCard';

// eslint-disable-next-line no-unused-vars
const Team = (props) => (
  <>
    <Navbar />
    <section>
      <Banner image={Sphere2} />
    </section>
    <section>
      <div className="md:px-16 md:py-32 py-16 px-5">
        <div className="md:pr-32">
          <h1 className="md:text-5xl text-3xl font-trirong capitalize font-medium dark:text-white">Lawrence Price & Company</h1>
          <p className="md:text-24px text-lg text-coregray pt-4 dark:text-gray-300">
            That is just what I was about to venture to propose,” returned the doctor
            with a smile.
            But the words were hardly uttered, before the smile was struck out of his face
            and succeeded by an expression of such abject terror and despair, as froze the very
            blood of the two gentlemen below.
          </p>
          <p className="pt-2 text-coregray md:text-24px text-lg dark:text-gray-300">
            They saw it but for a glimpse for the window was instantly thrust down;
            but that glimpse had been sufficient, and they turned and left the court
            without a word.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="md:px-16 py-16 px-5 md:py-40">
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
          <h1 className="md:text-5xl text-3xl font-trirong font-medium dark:text-white md:pt-16 pt-10">Lawrence Price & Company</h1>
          <h1 className="text-2xl text-textgrey dark:text-orange uppercase pt-5 md:mb-0 mb-8">Management Team</h1>
        </div>
        <div>
          <div className="md:pt-44">
            <div className="bg-altgrey dark:bg-gray-900 md:px-8 rounded-tl-2xl rounded-tr-2xl relative">
              <div className="md:flex items-center md:space-x-6 md:space-y-0 space-y-8 relative md:-top-24">
                {bios?.slice(0, 4).map((bio) => (
                  <BioCard bio={bio} />
                ))}
              </div>
              <div className="md:flex items-center md:space-x-6 md:space-y-0 space-y-8 relative md:-top-24 mt-12">
                {bios?.slice(4, 8).map((bio) => (
                  <BioCard bio={bio} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray1 dark:bg-kiwi">
      <div className="md:px-16 px-5 py-16 md:py-40">
        <h1 className="md:text-4rem text-5xl font-trirong text-white font-medium">The Future is Now.</h1>
        <p className="md:text-4xl text-2xl pt-4 md:pb-0 pb-8 text-white font-medium">
          Creating and building Solutions
          <br />
          to Africa’s Business Problems.
        </p>
        <div className="h-full relative mt-20">
          <Slide direction="up">
            <div className="bg-orange py-32" />
          </Slide>
          <Slide direction="down">
            <img
              src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1619538093/blackboxlanding/model_wmd6tg.svg"
              className="absolute right-0 -bottom-1"
              alt="model"
            />
          </Slide>
        </div>
      </div>
    </section>
    <Partners />
    <Footer />
  </>
);

export default Team;
