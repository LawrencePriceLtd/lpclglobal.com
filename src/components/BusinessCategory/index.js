import React from 'react';
import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
// iamges
import Razor from '../../assets/razor.svg';

const BusinessCategory = ({ businessType }) => (

  <div className="md:flex items-center md:px-16 md:space-y-0 space-y-20 px-5 md:py-40 py-20">
    <div className="md:w-1/2">
      <AttentionSeeker>
        <h1 className="text-lg text-orange font-medium">{businessType}</h1>
      </AttentionSeeker>
      <AttentionSeeker effect="swing">
        <p className="md:text-5xl text-4xl font-trirong font-medium pt-10 dark:text-white">
          leveraging innovation and
          advanced analytics to create
          bespoke investment products
        </p>
      </AttentionSeeker>
      <Slide direction="left">
        <p className="font-medium text-coregray md:text-4xl text-3xl md:pt-10 pt-4 dark:text-gray-400">
          Then, who taught you? who attended
          to you? Without a governess, you must
          have been neglected.
        </p>
      </Slide>
      <div className="md:pt-16 pt-10">
        <AttentionSeeker effect="pulse">
          <button type="button" className="hover:text-yellow-600 text-orange flex items-center space-x-2 text-24px font-bold">
            <span>Read more</span>
            <span>
              <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM36.8839 10.8839C37.372 10.3957 37.372 9.60427 36.8839 9.11612L28.9289 1.16117C28.4408 0.67301 27.6493 0.67301 27.1612 1.16117C26.673 1.64932 26.673 2.44078 27.1612 2.92893L34.2322 10L27.1612 17.0711C26.673 17.5592 26.673 18.3507 27.1612 18.8388C27.6493 19.327 28.4408 19.327 28.9289 18.8388L36.8839 10.8839ZM1.5 11.25H36V8.75H1.5V11.25Z" fill="#FF8300" />
              </svg>
            </span>
          </button>
        </AttentionSeeker>
      </div>
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
