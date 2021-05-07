import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// custom styles
import '../../App.css';
import ArticleCard from '../../components/ArticleCard';

const ArticleThree = () => {
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
            <h1 className="md:text-4xl text-3xl font-medium uppercase font-trirong dark:text-white">
              IMPACT OF WOMEN ON
              NIGERIA’S ECONOMY
            </h1>
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
                IMPACT OF WOMEN ON
                <br />
                NIGERIA’S ECONOMY
              </h1>
            </div>
            <img
              className="md:h-455px w-full object-cover"
              src="https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
              <p className="text-orange">4 Mins. Read</p>
              <span className="pt-5 flex uppercase space-x-6 text-coregray tracking-widest items-center">
                <span className="dark:text-gray-300">FREE.</span>
                <span className="dark:text-gray-300">3 PAGES</span>
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-trirong py-4 capitalize dark:text-white">IMPACT OF WOMEN ON NIGERIA’S ECONOMY</h1>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              Women in Nigeria account for 41% of the ownership of micro-businesses within
              the country with 23 million female entrepreneurs operating within this segment.
              Nigeria is placed amongst other sovereign states with high female entrepreneurs
              globally. The high-level participation of female entrepreneurs in the country is
              however often driven mainly by necessity, which is expected when there is a
              high rate of unemployment. Necessity-driven entrepreneurs are those who are
              pushed into starting businesses because they have no other source of income.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              Consequently, despite the high level of female entrepreneurs in Nigeria,
              there are challenges and barriers in the country that limit women from scaling up
              their businesses. Women are scaling up the formal sector, and important results
              are emerging. At the lower levels of the formal sector, women employment ratio has
              begun to even out at a 60–40 split in the workplace the genders with men still
              nudging ahead for now. However, as both genders climb up the corporate ladder,
              women begin to decline in representation on the senior leadership and at the
              board level.
            </p>
            <div className="md:pt-24 md:pb-32 pt-10 pb-10">
              <img
                src="https://images.pexels.com/photos/2045018/pexels-photo-2045018.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="w-full md:h-506px object-cover"
                alt="metrics"
              />
            </div>
            <h1 className="text-4xl font-trirong pt-4 pb-8 capitalize dark:text-altgrey">IMPACT OF WOMEN ON NIGERIA ECONOMY</h1>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              The informal sector contributes to 60% of Nigeria’s entire economy, women’s
              participation in SMEs accounts for the larger percentage. Firstly, many women
              are engaged in agriculture which is the mainstay of most of the economies
              in Africa and Nigeria is no exception as it is one of the largest contributors
              to its GDP. Secondly, women participate have become active participants in the
              organized sector. The last is their involvement in the informal sector.
              The informal sector in Nigeria denotes economic activities in all sectors of
              the economy that are operated outside the purview of government regulation.
              This sector may be invisible, irregular, parallel, non-structured, backyard,
              underground, unobserved or residual.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              In Nigeria, informal economic activities encompass a range of small-scale
              and largely self-employed activities. Measuring the activities in Nigeria’s
              informal sector is difficult. Nonetheless, they are dynamic, retail,
              and subsistence in nature but significantly contribute to the general
              growth of the society and contribute to both household and personal income.
              They entail the use of traditional methods of production, traditional
              occupations such as transport, retail trade, repair services,
              cloth dying (adire making), restaurant, buy and selling, etc. can be found
              in that sector. Due to family responsibility, cultural and social
              responsibilities, alongside lack of skills or formal education amongst
              other reasons, women engage in majorly in petty trading by setting up their
              enterprises to earn income in the informal sector.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              According to the Ministry of Industry, Trade, and Investment, Nigeria has over
              37.07 million micro, small and medium-scale enterprises, MSMEs, and they account
              for more than 84 percent of total jobs in the country. The ministry also stated
              that the MSME enterprises in Nigeria also account for about 48.5 percent of the
              gross domestic product, GDP, as well as about 7.27 percent of goods and services
              exported out of the country and which is majorly controlled by women. Based on
              the total numbers of MSMEs in Nigeria, Micro Enterprises account for the bulk
              with 36,994,578 enterprises (about 99.8 percent), while small enterprises took
              68,168, and medium enterprises 4,670. Lagos, Oyo, and Kano State are the top
              three states in Nigeria with the highest number of MSMEs in Nigeria.
              Its therefore easy to improvise from this figures and facts stated that women’s
              participation in businesses plays a key role in driving economic growth and
              social development.
            </p>
            <div className="md:pt-24 md:pb-32 pt-10 pb-10">
              <img
                src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                className="w-full md:h-506px object-cover"
                alt="metrics"
              />
            </div>
            <h1 className="md:text-4xl text-2xl font-trirong pt-4 pb-8 capitalize dark:text-altgrey">
              CHALLENGES FACING WOMEN IN SMES:
            </h1>
            <ul className="md:pl-5">
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Access to funding: Limited availability of funding from financial institutions and
                the government. This undoubtedly slows down the growth of SMEs and their
                participation in the economy.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                High interest rates on loan facilities inclusive of the short maintenance time
                range and costs as well as the demand for duly registered collateral obligations.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Inconsistency in Government policies and support facilities from all levels of
                government and economic institutions.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Multiple taxation as a result of levies and other tax expectations from both the
                State and Local Government Areas makes setting up businesses and its
                sustainability difficult.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Lack of infrastructures like power supply, good roads, transportation system
                to drive cost down.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Unavailability of raw material.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                High cost of procuring machinery for production.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Devaluation of Naira against Dollar.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Import Liberalization and cost.
              </li>
              <li className="md:text-lg list-decimal mt-5 dark:text-altgrey">
                Export constraints and difficulty in getting the right trade partner.
              </li>
            </ul>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              Notwithstanding the setbacks and challenges confronting Small and Medium
              Enterprises, if properly equipped, they can grow the economy and contribute
              more to Nigeria’s growth so that She can take its place on the world stage.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              An enabling platform to do this is BlackBox. Blackbox would create room for
              healthy and operational business creation as well as enable a seamless means
              of carrying out business activities thereby creating healthy competition among
              SMEs and will attract both local and foreign investors. It will also encourage
              the creation of employment opportunities in the country, contribute to the
              growth of the national income thereby increasing the nation’s Gross Domestic
              Product (GDP) and the contribution of women to this.
            </p>
            <h1 className="md:text-4xl text-2xl font-trirong pt-4 md:pt-12 capitalize dark:text-white">
              Conclusion
            </h1>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              As Nigeria remains one of the brightest economic spots in Africa, it should focus
              on ways to make women in the MSMEs/SMEs space, the most powerful driver of Her
              growth, Blackbox perfectly speaks to the Solution. Giving operational support at a
              low cost as well as empowering women with formal structure to access growth
              facilities.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey md:text-left text-justify">
              It is equally important that the MSME/SMEs segment develops in all areas of
              agriculture, manufacturing, and services sectors because each of these sectors will
              continue to be truly relevant to the overall GDP growth as well as employment
              generation. Women in MSME/SMEs sector act as a catalyst to bring about this expected
              socio-economic development in all ramifications. Blackbox gives an enabling platform
              for this.
            </p>
            <div className="bg-lightgrey dark:bg-kiwi mt-12 px-10 md:pb-20 pb-10 rounded-lg">
              <h1 className="md:text-4xl text-2xl font-trirong pt-4 md:pt-20 capitalize dark:text-white">
                References
              </h1>
              <div>
                <ul>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    World Bank: Women’s Leadership in Small and Medium Enterprises
                  </li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    PWC: MSME survey 2020
                  </li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    Bank of Industry: Economic Development through the Nigerian Informal Sector
                  </li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">Mondaq: Small and Medium Scale Enterprises In Nigeria</li>
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
                  src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620209860/blackboxlanding/ola_doscqx.svg"
                  className="w-118px h-118px rounded-full object-cover"
                  alt="author"
                />
                <div>
                  <h1 className="text-24px font-trirong dark:text-white capitalize">Gbolahan Olasupo</h1>
                  <h1 className="text-10px uppercase dark:text-altgrey">R&d Specialist LP&Co.</h1>
                  <a href="a" className="block pt-2 text-xs text-blue-600 dark:text-orange">mail@lawrencepriceltd.com</a>
                  <a href="#a" className="block text-xs text-textgrey pt-4">Visit Bio</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-118px w-118px rounded-full bg-orange" />
                <div>
                  <h1 className="text-24px font-trirong dark:text-white capitalize">LP Holdings</h1>
                  <h1 className="text-10px uppercase dark:text-altgrey">Nigeria, Zambia</h1>
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

export default ArticleThree;
