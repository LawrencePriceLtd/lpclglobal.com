import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticleCard = ({
  tag, title, link, imageUrl,
}) => (
  <div className="relative flex items-center">
    <div className="absolute md:px-16 px-5">
      <h1 className="text-24px text-white capitalize">{tag}</h1>
      <Link to={link} className="capitalize block pt-1 pb-2 font-medium md:text-4rem text-5xl font-trirong text-white hover:text-orange">
        {title}
      </Link>
      <button type="button">
        <Link to={link}>
          <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 25.5371C12.0335 25.5371 11.25 26.3206 11.25 27.2871C11.25 28.2536 12.0335 29.0371 13 29.0371V25.5371ZM38.2374 28.5245C38.9209 27.8411 38.9209 26.7331 38.2374 26.0497L27.1005 14.9127C26.4171 14.2293 25.309 14.2293 24.6256 14.9127C23.9422 15.5962 23.9422 16.7042 24.6256 17.3876L34.5251 27.2871L24.6256 37.1866C23.9422 37.87 23.9422 38.9781 24.6256 39.6615C25.309 40.3449 26.4171 40.3449 27.1005 39.6615L38.2374 28.5245ZM13 29.0371H37V25.5371H13V29.0371Z" fill="white" />
            <circle cx="27" cy="27.2871" r="25" stroke="white" strokeWidth="3.5" />
          </svg>
        </Link>
      </button>
    </div>
    <img
      src={imageUrl}
      className="md:h-380px w-full 0bject-cover"
      alt="bg"
    />
  </div>
);

export default ArticleCard;

ArticleCard.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
