import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BioCard = ({
  id, name, position, imageUrl,
}) => (
  <div className="md:w-1/4 relative" key={id}>
    <div className="bg-white dark:bg-black absolute bottom-0 left-0 px-5 py-6">
      <Link
        to={`/bio/${id}`}
        className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange"
      >
        {name}
      </Link>
      <div className="">
        <p className="uppercase text-coregray text-10px pt-1 dark:text-gray-300">
          {position}
        </p>
        <Link
          to={`/bio/${id}`}
          className="flex space-x-2 items-center mt-3 text-orange uppercase text-8px"
          type="button"
        >
          <span>read bio</span>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 4L1 7" stroke="#FF8300" strokeLinecap="square" />
          </svg>
        </Link>
      </div>
    </div>
    <img
      className="md:h-380px h-96  w-full object-cover"
      src={imageUrl}
      alt="people"
    />
  </div>
);

export default BioCard;

BioCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

BioCard.defaultProps = {};
