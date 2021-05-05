import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import bios from '../../json/bios';

const BioCard = ({ bio }) => (
  <div className="md:w-1/4 relative" key={bio.id}>
    <div className="bg-white dark:bg-black absolute bottom-0 left-0 px-5 py-6">
      <Link
        to={`/bio/${bio.id}`}
        className="block text-lg font-trirong font-medium pt-2 dark:text-white hover:text-orange"
      >
        {bio.name}
      </Link>
      <div className="">
        <p className="uppercase text-coregray text-10px pt-1 dark:text-gray-300">
          {bio.position}
        </p>
        <Link
          to={`/bio/${bio.id}`}
          className="flex space-x-2 items-center mt-3 text-orange uppercase text-8px"
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
      src={bio.imageUrl}
      alt="people"
    />
  </div>
);

export default BioCard;

BioCard.propTypes = {
  bio: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }),
};

BioCard.defaultProps = {
  bio: {},
};
