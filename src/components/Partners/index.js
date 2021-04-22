import React from 'react';

// partner images/icons
import HM from '../../assets/hm.svg';
import Transcorp from '../../assets/transcorp.svg';
import Google from '../../assets/google.svg';
import GE from '../../assets/ge.svg';
import TB from '../../assets/tb.svg';

const Partners = () => (
  <div className="md:px-16 px-5 py-32 md:py-40">
    <h1 className="md:text-4rem text-6xl font-medium font-trirong dark:text-white">Our Partners</h1>
    <h1 className="md:text-5xl text-4xl text-coregray pt-10 font-medium dark:text-gray-300">We Trusted By and in partnership with</h1>
    <div className="md:flex items-center md:space-x-16 md:space-y-o space-y-12 md:pt-24 pt-10">
      <img src={HM} alt="H & M Logo" />
      <img src={Transcorp} alt="Transcorp Logo" />
      <img src={GE} alt="General Electric Logo" />
      <img src={Google} alt="Google Logo" />
    </div>
    <div className="md:flex items-center md:space-x-16 md:pt-24 pt-10">
      <img src={TB} alt="Ted Baker Logo" />
    </div>
  </div>
);

export default Partners;
