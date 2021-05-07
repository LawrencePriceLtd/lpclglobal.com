import React from 'react';
import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import PropTypes from 'prop-types';

const Banner = ({ image }) => (
  <div className="md:flex md:space-x-10 md:px-16 px-5 md:pt-40 pt-20 md:pb-20">
    <div className="md:w-1/2">
      <Slide direction="up">
        <h1 className="md:text-4rem text-5xl font-trirong font-medium dark:text-white">
          We are here for those
          who are bold enough
          to face
          <span className="text-orange"> Change.</span>
        </h1>
      </Slide>
      <AttentionSeeker effect="pulse">
        <h1 className="md:text-4xl text-3xl md:pt-10 pt-4 dark:text-gray-400">
          Driving business Innovation across Africa
          and beyond
        </h1>
      </AttentionSeeker>
    </div>
    <div className="md:w-1/2">
      <Slide direction="down">
        <img className="block pt-10" src={image} alt="sphere" />
      </Slide>
    </div>
  </div>
);

export default Banner;

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};
