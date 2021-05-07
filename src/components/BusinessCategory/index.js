import React from 'react';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
// iamges
import Razor from '../../assets/razor.svg';

const BusinessCategory = ({ businessType }) => (

  <div className="md:flex items-center md:px-16 md:space-y-0 space-y-20 px-5 md:py-40 py-20">
    <div className="md:w-1/2">
      <AttentionSeeker>
        <h1 className="text-lg text-orange font-medium uppercase">{businessType}</h1>
      </AttentionSeeker>
      <Fade direction="down">
        <p className="md:text-5xl text-4xl font-trirong font-medium pt-10 dark:text-white">
          Leveraging innovation and
          advanced analytics to create
          bespoke investment products
        </p>
      </Fade>
      <AttentionSeeker effect="pulse">
        <p className="font-medium text-coregray md:text-4xl text-3xl md:pt-10 pt-4 dark:text-gray-400">
          Constantly innovating to bring convenience,
          transparency and precision to investing,
          we act with conviction on the investment
          themes that are important to you.
        </p>
      </AttentionSeeker>
    </div>
    <div className="md:w-1/2">
      <img src={Razor} alt="Razor" />
    </div>
  </div>
);

export default BusinessCategory;

BusinessCategory.propTypes = {
  businessType: PropTypes.string.isRequired,
};
