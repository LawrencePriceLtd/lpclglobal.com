import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// custom styles
import '../../App.css';
import ArticleCard from '../../components/ArticleCard';

const ArticleOne = () => {
  // eslint-disable-next-line no-unused-vars
  const a = 1;
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      // eslint-disable-next-line max-len
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll1 = `${totalScroll / windowHeight}`;

      setScroll(scroll1);
    };

    window.addEventListener('scroll', progressBarHandler);

    return () => window.removeEventListener('scroll', progressBarHandler);
  });

  return (
    <>
      <Navbar />
      <div className="md:px-28 px-5 md:py-16 py-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="md:text-4xl text-3xl font-medium uppercase font-trirong dark:text-white">WOMEN AND BUSINESS 2021</h1>
            <span className="block font-medium text-lpgreen text-sm capitalize pt-2">4 Mins. Read</span>
          </div>
          <button type="button">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="21.5" r="21.5" fill="#61686C" />
              <path d="M26.2946 24.3333C25.9204 24.3347 25.5504 24.4117 25.2067 24.5597C24.863 24.7077 24.5528 24.9236 24.2946 25.1944L17.5224 21.8055C17.689 21.3004 17.689 20.7551 17.5224 20.25L24.3057 16.8C24.7916 17.312 25.4505 17.6251 26.1543 17.6783C26.8582 17.7316 27.5567 17.5213 28.1141 17.0882C28.6715 16.6552 29.048 16.0304 29.1704 15.3352C29.2928 14.64 29.1523 13.9242 28.7763 13.3268C28.4003 12.7294 27.8156 12.2932 27.1359 12.1029C26.4562 11.9126 25.73 11.9818 25.0985 12.2971C24.467 12.6124 23.9752 13.1512 23.7188 13.8089C23.4625 14.4665 23.4598 15.196 23.7113 15.8555L16.9946 19.2722C16.6319 18.8286 16.1408 18.508 15.5887 18.3544C15.0366 18.2008 14.4505 18.2217 13.9107 18.4143C13.371 18.6069 12.904 18.9617 12.5738 19.43C12.2436 19.8984 12.0664 20.4575 12.0664 21.0305C12.0664 21.6036 12.2436 22.1626 12.5738 22.631C12.904 23.0994 13.371 23.4542 13.9107 23.6468C14.4505 23.8393 15.0366 23.8603 15.5887 23.7067C16.1408 23.5531 16.6319 23.2325 16.9946 22.7889L23.6946 26.1611C23.5814 26.4651 23.5231 26.7867 23.5224 27.1111C23.5224 27.6605 23.6853 28.1975 23.9905 28.6543C24.2957 29.1111 24.7296 29.4672 25.2372 29.6774C25.7447 29.8877 26.3032 29.9427 26.8421 29.8355C27.3809 29.7283 27.8759 29.4637 28.2643 29.0753C28.6528 28.6868 28.9174 28.1918 29.0246 27.653C29.1317 27.1142 29.0767 26.5556 28.8665 26.0481C28.6562 25.5405 28.3002 25.1067 27.8434 24.8014C27.3866 24.4962 26.8496 24.3333 26.3002 24.3333H26.2946Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div id="progressBarContainer">
        <div id="progressBar" style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }} />
      </div>
      <section className="dark:bg-kiwi">
        <div className="md:px-28 px-5 md:py-40 py-16 relative">
          <div className="relative">
            <div className="bg-white dark:bg-black md:absolute bottom-0 md:left-0 md:px-16 px-5 py-10 md:py-16">
              <div className="flex justify-between py-1">
                <h1 className="text-lg text-orange uppercase font-medium tracking-widest">Article</h1>
              </div>
              <h1 className="md:text-4xl text-2xl font-trirong font-semibold pt-3 dark:text-white uppercase hover:text-orange">
                DRIVING ECONOMIC INCLUSION IN
                <br />
                THE INFORMAL SECTOR IN AFRICA
              </h1>
            </div>
            <img
              className="md:h-455px w-full object-cover"
              src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="people"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="md:px-28 px-5 md:py-40">
          <div>
            <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="21" cy="20.5" rx="21" ry="20.5" fill="url(#paint0_angular)" />
              <defs>
                <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 20.5) rotate(90) scale(20.5 21)">
                  <stop stopColor="#FF8300" />
                  <stop offset="1" stopColor="#E6D308" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="md:flex justify-between md:space-y-0 space-y-8 items-center pt-4">
            <div>
              <svg width="279" height="1" viewBox="0 0 279 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.309082" x2="279" y2="0.309082" stroke="#545454" strokeWidth="0.5" />
              </svg>
            </div>
            <div>
              <button type="button" className="flex space-x-8 items-center text-orange">
                <span className="capitalize font-medium text-lg">Download Article</span>
                <span>
                  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13.0386L1.15898 13.2846C2.08007 14.7101 3.66137 15.571 5.35854 15.571H14.6415C16.3386 15.571 17.9199 14.7101 18.841 13.2846L19 13.0386" stroke="#FF8300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.7502 1.64258C10.7502 1.22836 10.4144 0.892578 10.0002 0.892578C9.58599 0.892578 9.2502 1.22836 9.2502 1.64258L10.7502 1.64258ZM9.2502 12.2659V13.0159H10.7502V12.2659H9.2502ZM7.28689 10.4699C6.93505 10.2513 6.47262 10.3594 6.25404 10.7112C6.03546 11.063 6.14349 11.5255 6.49534 11.744L7.28689 10.4699ZM10.0002 13.0385L9.60443 13.6756C9.8468 13.8261 10.1536 13.8261 10.396 13.6756L10.0002 13.0385ZM13.5051 11.744C13.8569 11.5255 13.9649 11.063 13.7464 10.7112C13.5278 10.3594 13.0654 10.2513 12.7135 10.4699L13.5051 11.744ZM9.2502 1.64258L9.2502 12.2659H10.7502L10.7502 1.64258L9.2502 1.64258ZM6.49534 11.744L9.60443 13.6756L10.396 12.4014L7.28689 10.4699L6.49534 11.744ZM10.396 13.6756L13.5051 11.744L12.7135 10.4699L9.60443 12.4014L10.396 13.6756Z" fill="#FF8300" />
                  </svg>
                </span>
              </button>
              <span className="pt-5 flex uppercase space-x-6 text-coregray tracking-widest items-center">
                <span className="dark:text-gray-300">FREE.</span>
                <span className="dark:text-gray-300">3 PAGES</span>
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-trirong py-4 capitalize dark:text-white">Introduction</h1>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              Africa is the world’s second largest and second most populous continent, after Asia,
              accounting for more than 12% of the world’s human population.
              The continent is also blessed with youthful population,
              Africa has the youngest population in the world,
              with 70% of sub-Saharan African under the age of 30,
              and more than half of this population being women (50.12%).
              Consequently, the continent is largely blessed with natural
              and mineral resources which if put into proper use with creative know-how,
              African nations should be at the forefront of the Global Economic Index.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              Despite the perceived potentials in Africa, the continent still remains the poorest
              and least developed continent in the world. Several factors including lack of basic
              amenities, poor education quality, lack of quality data and regressive government
              policy can be partly attributed to the perpetual position of Sub-Saharan Africa
              at the bottom of the Global Economy Index.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              This article seeks to examine women in the informal Africa economy,
              their potential and also driving economic inclusion. According to ILO,
              the informal economy refers to all economic activities by workers and
              economic units that are — in law or in practice — not covered or
              insufficiently covered by formal arrangements.
            </p>
            <div className="md:pt-24 md:pb-32 pt-10 pb-10">
              <img
                src="https://images.unsplash.com/photo-1614029896656-a094f640558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                className="w-full md:h-506px object-cover"
                alt="metrics"
              />
            </div>
            <h1 className="text-4xl font-trirong pt-4 pb-8 capitalize dark:text-altgrey">Potential of the Informal Sector</h1>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              The Africa Development Bank reported that the informal sector is the major source
              of employment across Africa, accounting for 80.8% of employment in Sub-Saharan Africa
              and 62 per cent in North Africa. The dynamism of the informal
              sector in creating employment
              and value addition is particularly strong, representing about
              80 per cent of the total labour
              force, and contributing about 55 per cent of sub-Saharan Africa’s GDP. The vibrancy of
              the informal sector is difficult to miss in African cities, street vendors are key in
              ensuring food security. Those who work in transport keep the city and the economy
              moving. And those operating in services are critical to the overall incomes and
              functioning of African cities.
              Furthermore, about 90% of the informal workers are women and youth,
              but the lack of social protection, skills’ upgrading and productive income often
              trap these groups into poverty and exclusion from economic growth and development,
              with only about 10 percent of operators benefiting from social protection schemes.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              The urban informal economy is particularly common among youth (95.8% ages 15–24)
              and women (92.1%) and is an important contributor to poverty alleviation.
              Social protection like access to credit facilities, skills and digitization
              plays a key role for business owners and workers to build human capital,
              prevent the sale of productive assets in case of shocks, and promote savings
              to build resilience. Female informal cross-border retail trade,
              which is generally small and self-employed, amounted to 64 per cent of
              the added value of national trade in Benin, 46 per cent in Mali and 41
              per cent in Chad in 2012. In addition,
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              the diversity of informal employment across countries is captured by a set of
              characteristics related to the type and location of activities, access and use
              of technology, access to credit, productivity levels, and contribution
              to social security.
            </p>
            <div className="md:pt-24 md:pb-32 pt-10 pb-10">
              <img
                src="https://images.pexels.com/photos/3873177/pexels-photo-3873177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="w-full md:h-506px object-cover"
                alt="metrics"
              />
            </div>
            <h1 className="md:text-4xl text-2xl font-trirong pt-4 pb-8 capitalize dark:text-altgrey">
              Informal Economy during the Covid-19 Pandemic
            </h1>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              Covid-19 lockdown adversely affected the informal sectors,
              with no access to social protection and inadequate savings
              to fall back on, the COVID-19 (coronavirus) pandemic lockdown
              made a lot of casual workers, hawkers and transport workers unable to work.
              This posed great threat to lives and properties of businesses and corporate
              entities as well as the vandalization of public infrastructures and facilities.
              A recent World Bank survey concluded that jobs in urban areas are particularly
              affected; during April-June 2020, 56.3% and 29.4% of urban respondents
              respectively in Nigeria and Uganda indicated that they stopped working
              because of COVID-19, against 39.2% and 11.1% in rural areas. Without assistance,
              many risk slipping into poverty. Also, living in informal settlements exposes
              them to increased health and social risks, further hindering their productivity.
            </p>
            <h1 className="md:text-4xl text-2xl font-trirong pt-4 md:pt-12 capitalize dark:text-white">
              Conclusion
            </h1>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              The sub-Saharan Africa youthful population has a great potential
              in driving creative and innovative solutions that will improve
              lives of Africans and also speed up economic development in the region.
              Government in these countries need to formulate relevant policies that
              will promote innovations and empower small businesses. Such empowerment
              should see innovations like Blackbox thrive and promoted.
            </p>
            <div className="bg-lightgrey dark:bg-kiwi mt-12 px-10 md:pb-20 pb-10 rounded-lg">
              <h1 className="md:text-4xl text-2xl font-trirong pt-4 md:pt-20 capitalize dark:text-white">
                References
              </h1>
              <div>
                <ul>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    UNITED NATIONS ECONOMIC COMMISSION FOR AFRICA (ECA), Contribution
                    <br />
                    to the 2015 United Nations Economic
                    and Social Council (ECOSOC) Integration Segment, 2015.
                  </li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    MELIS GUVEN &RAPHAELA KARLEN, Supporting Africa’s urban informal sector:
                    <br />
                    Coordinated policies with social protection at the core, DECEMBER 03, 2020.
                  </li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">PwC 2020 MSME Survey</li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">FATE Foundation and Budgit MSME Survey 2021</li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    Augustin AO, 2018: The Crisis of Underdevelopment in Sub-Saharan Africa:
                    <br />
                    Multi-dimensional Perspectives; Journal of Political Sciences & Public Affairs
                  </li>
                </ul>
              </div>
            </div>
            <h1 className="text-4xl font-trirong pt-24 capitalize dark:text-white">
              The Author(s)
            </h1>
            <div className="pt-10 md:pb-0 pb-6">
              <svg width="59" height="1" viewBox="0 0 59 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.187109" x2="59" y2="0.187109" stroke="#61686C" strokeWidth="0.2" />
              </svg>
            </div>
            <div className="md:flex md:space-x-24 md:space-y-0 space-y-8 md:pb-0 pb-10 items-center md:pt-12">
              <div className="flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618305464/blackboxlanding/IMG_3066_pusvlv.jpg"
                  className="w-118px h-118px rounded-full object-cover"
                  alt="author"
                />
                <div>
                  <h1 className="text-24px font-trirong dark:text-white capitalize">Tobi Michael</h1>
                  <h1 className="text-10px uppercase dark:text-altgrey">Global Head of Legals LP&Co.</h1>
                  <a href="a" className="block pt-2 text-xs text-blue-600 dark:text-orange">mail@lawrencepriceltd.com</a>
                  <a href="#a" className="block text-xs text-textgrey pt-4">Visit Bio</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620308452/blackboxlanding/Rectangle_02_okngo9.png"
                  className="w-118px h-118px rounded-full object-cover"
                  alt="author"
                />
                <div>
                  <h1 className="text-24px font-trirong dark:text-white capitalize">Oluwafemi  o.</h1>
                  <h1 className="text-10px uppercase dark:text-altgrey">chief operation officer lp&Co.</h1>
                  <a href="a" className="block pt-2 text-xs text-blue-600 dark:text-orange">mail@lawrencepriceltd.com</a>
                  <a href="#a" className="block text-xs text-textgrey pt-4">Visit Bio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <ArticleCard
              tag="Article"
              title="System Thinking..."
              link="/blog/article/2"
              imageUrl="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
          <div className="md:w-1/2">
            <ArticleCard
              tag="Article"
              title=" Impact of Women"
              link="/"
              imageUrl="https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ArticleOne;
