/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import {
  AttentionSeeker, Flip, Fade,
} from 'react-awesome-reveal';
import 'react-multi-carousel/lib/styles.css';
import { ThemeContext } from '../../context/themeContext';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// images
import Partners from '../../components/Partners';
import CustomButtonGroupAsArrows from '../../components/CustomButtonGroupAsArrows';
import BusinessCategory from '../../components/BusinessCategory';
import Banner from '../../components/Banner';
import Sphere from '../../assets/sphere.svg';

const articles = [
  {
    category: 'Lawrence Price Wealth',
    title: 'SYSTEMS THINKING IN THE WORKPLACE',
    description: 'Systems thinking is a powerful approach to support ....',
    image_url: 'https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1619445308/blackboxlanding/dg_phnyll.svg',
    link: '/blog/article/2',
  },
  {
    category: 'Lawrence Price business solution',
    title: 'WOMEN AND BUSINESS 2021',
    description: 'Africa is the world’s second largest and second most populous continent, ....',
    image_url: 'https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618307835/blackboxlanding/smiley-african-woman-working-market_o84h63.jpg',
    link: '/blog/article/1',
  },
  {
    category: 'Lawrence Price Capital',
    title: 'IMPACT OF WOMEN ON NIGERIA’S ECONOMY',
    description: 'As Nigeria remains one of the brightest economic spots in Africa...',
    image_url: 'https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620309377/blackboxlanding/Rectangle_001_pyug2n.png',
    link: '/blog/article/1',
  },
  {
    category: 'Lets create the Future',
    title: 'THE EMERGING GIG ECONOMY IN NIGERIA',
    description: 'The Gig Economy also referred to as the platform economy is ...',
    image_url: 'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    link: '/blog/article/4',
  },
];

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="md:overflow-x-hidden">
      <Navbar />
      <section>
        <Banner image={Sphere} />
      </section>
      <section>
        <div className="md:px-16 px-5 md:py-20 py-20">
          <Flip direction="horizontal">
            <h1 className="font-trirong md:text-4rem text-5xl font-medium dark:text-white">The Future is Now.</h1>
          </Flip>
          <AttentionSeeker effect="pulse">
            <h1 className="md:text-4xl text-2xl font-medium text-coregray dark:text-gray-400 pt-4">
              Creating and building Solutions
              <br />
              to Africa’s Business Problems.
            </h1>
          </AttentionSeeker>
          <div className="md:flex items-baseline md:pt-0 pt-12 md:h-400px">
            <img
              className="block pt-12 md:w-810px object-cover"
              src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620318312/blackboxlanding/Rectangle_19999_vi0yfp.png"
              alt="mechanism"
            />
            <div className="bg-altgrey relative h-full w-full">
              <Link to="/blog" type="button" className="dark:bg-orange w-full absolute bottom-2 flex items-center space-x-6 text-lg font-medium md:pl-20 pl-10 pr-10 text-coregray  dark:text-white pb-6 md:pt-36 pt-6 flex-grow-0">
                <span>Visit Blog</span>
                <span>
                  <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill={theme === 'light' ? '#545454' : '#fff'} />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:px-16 px-5 py-40">
          <h1 className="md:text-4xl text-3xl font-trirong capitalize text-center font-medium dark:text-white">Industries</h1>
          <div className="flex justify-center items-center md:space-x-20 space-x-2 md:pt-20 pt-10">
            <a href="#a" className="flex md:space-x-4 space-x-2 items-center">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.42731 32.7307C3.91151 32.0658 3.6536 31.3404 3.6536 30.5547C3.6536 30.0107 3.76823 29.4667 3.99747 28.9227C4.28403 28.3787 4.59924 27.9253 4.94311 27.5627L13.9697 19.584L2.19216 16.5013C1.3898 16.2596 0.788032 15.7458 0.386852 14.96C0.0429838 14.1742 -0.0716392 13.2978 0.0429834 12.3307C0.157606 11.5449 0.530132 10.9102 1.16056 10.4267C1.84829 9.88267 2.59334 9.61067 3.3957 9.61067C3.85419 9.61067 4.37 9.76178 4.94311 10.064L15.4311 16.32L13.5398 4.17067L13.4539 3.44533C13.4539 2.47822 13.7404 1.66222 14.3135 0.997331C14.944 0.332444 15.8323 0 16.9785 0C18.1247 0 18.9844 0.332444 19.5575 0.997331C20.188 1.66222 20.5032 2.47822 20.5032 3.44533L20.4172 4.17067L18.5259 16.32L29.0139 10.064C29.587 9.76178 30.1028 9.61067 30.5613 9.61067C31.5356 9.61067 32.338 9.94311 32.9684 10.608C33.6561 11.2729 34 12.0889 34 13.056C34 13.9022 33.7994 14.6578 33.3982 15.3227C32.9971 15.9271 32.4526 16.32 31.7649 16.5013L19.9874 19.584L29.0139 27.5627C29.3578 27.9253 29.6443 28.3787 29.8736 28.9227C30.1601 29.4667 30.3034 30.0107 30.3034 30.5547C30.3034 31.3404 30.0455 32.0658 29.5297 32.7307C28.842 33.5769 27.8963 34 26.6928 34C26.1197 34 25.5466 33.8791 24.9735 33.6373C24.4577 33.3351 24.0565 32.9422 23.7699 32.4587L16.9785 21.3067L10.1871 32.4587C9.90055 32.9422 9.47071 33.3351 8.8976 33.6373C8.3818 33.8791 7.83734 34 7.26422 34C6.06068 34 5.11505 33.5769 4.42731 32.7307Z" fill={theme === 'light' ? '#000' : '#fff'} />
              </svg>
              <span className="md:text-3xl font-trirong font-medium capitalize dark:text-white">Wealth</span>
            </a>
            <a href="#a" className="flex md:space-x-4 space-x-2 items-center">
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="16.5" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <circle cx="17.5" cy="17.5" r="4.5" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M5.98047 6.42358L14.5004 14.4998" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M20.5 20.5L29.5 28" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M0.999908 17.6386L12.9999 17.6386" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M5.49978 28L14.4998 20.5" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M19.8536 13.7505L27.2502 4.74963" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M21.9158 17.5L33.2499 17.5" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M17.5001 12.9996L17.5002 1.74963" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M17.5 34L17.5 22" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
              </svg>
              <span className="md:text-3xl font-trirong font-medium capitalize dark:text-white">Capital</span>
            </a>
            <a href="#a" className="flex md:space-x-4 space-x-2 items-center">
              <svg width="68" height="51" viewBox="0 0 68 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16.5" cy="30.5" r="9.5" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <circle cx="48.5" cy="30.5" r="9.5" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" />
                <path d="M24.5 25.5C27.2302 28.5185 34.5 31 40.5 25.5" stroke={theme === 'light' ? '#000' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="58.5" cy="17.5" r="1.5" fill={theme === 'light' ? '#000' : '#fff'} />
                <path d="M31 35C31.2564 35 32.0154 35 33 35" stroke={theme === 'light' ? '#000' : '#fff'} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="md:text-3xl font-trirong font-medium capitalize dark:text-white">Business Solutions</span>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-altgrey dark:bg-kiwi">
        <div className="md:flex items-center md:px-16 md:space-y-0 md:space-x-10 space-x-0 space-y-20 px-5 md:py-40 py-20">
          <div className="md:w-1/2">
            <AttentionSeeker>
              <h1 className="text-lg text-orange font-medium uppercase">Lawrence Price Business Solution</h1>
            </AttentionSeeker>
            <Fade direction="down">
              <h1 className="md:text-4rem text-3xl md:pt-16 pt-6 capitalize font-trirong dark:text-white">
                Business
                Strategic Alliance
              </h1>
            </Fade>
            <AttentionSeeker effect="pulse">
              <p className="font-medium text-coregray md:text-4xl text-2xl md:pt-10 pt-4 dark:text-gray-400">
                From business process automation to
                business consulting we guide you all
                the way till you achieve that core
                business goal.
              </p>
            </AttentionSeeker>
            <div className="md:pt-16 pt-10">
              <AttentionSeeker effect="pulse">
                <button type="button" className="hover:text-yellow-600 text-orange flex items-center space-x-2 text-24px font-bold">
                  <span>Learn More</span>
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
            <img src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1619445308/blackboxlanding/dg_phnyll.svg" alt="Razor" />
          </div>
        </div>
      </section>
      <section>
        <BusinessCategory businessType="Lawrence Price Wealth & investments" />
      </section>
      <section className="bg-white dark:bg-kiwi md:py-20">
        <div className="md:flex md:items-end">
          <div className="md:w-1/2">
            <div className="py-12 md:pl-16 pl-5">
              <Fade direction="down">
                <h1 className="md:text-4rem text-5xl font-medium font-trirong dark:text-white">SDG</h1>
              </Fade>
              <Fade direction="up">
                <h1 className="md:text-5xl text-3xl text-coregray pt-5 dark:text-gray-300">Sustainable Goals</h1>
              </Fade>
            </div>
            <div className="md:flex">
              <div className="relative">
                <div className="absolute bottom-24 left-6">
                  <h1 className="text-5xl text-white font-trirong font-medium capitalize">
                    Reduced
                    Inequality
                  </h1>
                  <h1 className="text-4xl text-white font-medium capitalize pt-2">For good.</h1>
                </div>
                <img
                  className="md:h-700px h-96 w-full object-cover"
                  src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620308544/blackboxlanding/Rectangle_10_oxrekb.png"
                  alt="Person"
                />
              </div>
              <div className="relative">
                <div className="absolute bottom-24 left-6">
                  <h1 className="text-5xl text-white font-trirong font-medium capitalize">Agriculture</h1>
                  <h1 className="text-4xl text-white font-medium capitalize pt-2">For good.</h1>
                </div>
                <img
                  className="md:h-700px h-96 w-full object-cover"
                  src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620308558/blackboxlanding/Rectangle_13_ytqsjy.png"
                  alt="Person"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="md:flex">
              <div className="relative">
                <div className="absolute bottom-24 left-6">
                  <h1 className="text-5xl text-white font-trirong font-medium capitalize">Education</h1>
                  <h1 className="text-4xl text-white font-medium capitalize pt-2">For good.</h1>
                </div>
                <img
                  className="md:h-950px h-96 w-full object-cover"
                  src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620308572/blackboxlanding/Rectangle_14_gvlgiv.png"
                  alt="education"
                />
              </div>
              <div className="relative">
                <div className="absolute bottom-24 left-6">
                  <h1 className="text-5xl text-white font-trirong font-medium capitalize">Technology</h1>
                  <h1 className="text-4xl text-white font-medium capitalize pt-2">For good.</h1>
                </div>
                <img
                  className="md:h-950px h-96 w-full object-cover"
                  src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620308591/blackboxlanding/Rectangle_15_lnobgi.png"
                  alt="Person"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-kiwi">
        <div className="md:px-16 px-5 md:py-40 py-32">
          <div className="relative">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className="md:mb-0 mb-6"
              containerClass="container-padding-bottom"
              customButtonGroup={<CustomButtonGroupAsArrows />}
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass="md:ml-8"
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 30,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {articles?.map((article) => (
                <div className="md:w-386px">
                  <div className="bg-white md:w-300px dark:bg-black absolute bottom-0 left-0 md:px-10 px-5 py-6">
                    <div className="flex space-x-3">
                      <h1 className="text-6px text-coregray uppercase font-bold">Article</h1>
                      <h1 className="text-textgrey text-6px font-medium uppercase">{article.category}</h1>
                    </div>
                    <Link to={article.link} className="block text-24px font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                      {article.title}
                    </Link>
                    <div className="">
                      <p className="text-coregray text-sm pt-2 dark:text-gray-300">
                        {article.description}
                      </p>
                      <Link to={article.link} className="mt-4" type="button">
                        <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7.125C0.447715 7.125 0 7.57272 0 8.125C0 8.67728 0.447715 9.125 1 9.125V7.125ZM26.7071 8.83211C27.0976 8.44158 27.0976 7.80842 26.7071 7.41789L20.3431 1.05393C19.9526 0.663408 19.3195 0.663408 18.9289 1.05393C18.5384 1.44446 18.5384 2.07762 18.9289 2.46815L24.5858 8.125L18.9289 13.7819C18.5384 14.1724 18.5384 14.8055 18.9289 15.1961C19.3195 15.5866 19.9526 15.5866 20.3431 15.1961L26.7071 8.83211ZM1 9.125H26V7.125H1V9.125Z" fill="#FF8300" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    className="md:h-450px w-full object-cover"
                    src={article.image_url}
                    alt="people"
                  />
                </div>
              ))}
            </Carousel>
            <div className="relative -top-10 flex items-start justify-end">
              <Link to="/blog" className="flex uppercase items-center space-x-2 hover:text-orange text-lg dark:text-orange font-medium">
                <span>Visit our blog</span>
                <span>
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L7.5 8.5L2 15" stroke="black" strokeWidth="2.5" strokeLinecap="square" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <div className="absolute md:px-16 px-5 py-16 md:py-40">
            <Link to="/blog/article/3" className="block font-trirong hover:text-orange font-semibold md:text-4rem text-4xl text-white md:pt-96 pt-5">
              DRIVING ECONOMIC INCLUSION IN
              THE INFORMAL SECTOR IN AFRICA.
            </Link>
            <h1 className="font-medium md:text-5xl text-3xl text-white capitalize md:pt-6">women in business 2021</h1>
            <div>
              <Link to="/blog/article/3" className="flex text-white text-lg font-medium space-x-2 items-center mt-6">
                <span>Learn How</span>
                <span>
                  <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill="white" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <img className="md:h-900px h-96 w-full md:w-full" src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620308499/blackboxlanding/Rectangle_25_nwkkuj.png" alt="leaf" />
        </div>
      </section>
      <section>
        <Partners />
      </section>
      <section className="bg-white dark:bg-kiwi">
        <div className="md:flex items-center md:pl-16 md:pr-0 pr-5 md:space-y-0 space-y-20 px-5 md:py-32 py-20">
          <div className="md:w-1/2">
            <AttentionSeeker>
              <h1 className="text-lg text-orange font-medium uppercase">Lawrence price Capital</h1>
            </AttentionSeeker>
            <Fade direction="down">
              <h1 className="md:text-7xl text-3xl md:pt-16 pt-10 capitalize font-trirong dark:text-white">
                True Investments
                Quality Invest
              </h1>
            </Fade>
            <AttentionSeeker effect="pulse">
              <p className="font-medium text-coregray md:text-4xl text-2xl md:pt-10 pt-4 dark:text-gray-400">
                We engage in early-stage seed to help
                entrepreneurs launch their businesses
                and guide these businesses through
                their growth phase.
              </p>
            </AttentionSeeker>
          </div>
          <div className="md:w-1/2">
            <div className="w-full">
              <svg className="w" width="976" height="614" viewBox="0 0 976 614" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M811.514 101.185C812.835 100.784 813.58 99.3872 813.178 98.0662L806.631 76.5397C806.23 75.2187 804.833 74.4735 803.512 74.8752C802.191 75.277 801.446 76.6735 801.848 77.9944L807.667 97.1291L788.532 102.948C787.211 103.35 786.466 104.746 786.868 106.067C787.27 107.388 788.666 108.133 789.987 107.732L811.514 101.185ZM473.652 299.11C474.25 300.354 475.743 300.879 476.988 300.281L497.271 290.542C498.515 289.944 499.04 288.451 498.442 287.206C497.845 285.962 496.351 285.437 495.106 286.035L477.077 294.692L468.42 276.662C467.822 275.418 466.329 274.893 465.084 275.491C463.839 276.088 463.315 277.582 463.912 278.827L473.652 299.11ZM82.7042 492.99C81.4211 493.499 80.7941 494.953 81.3039 496.236L89.6112 517.146C90.121 518.429 91.5745 519.056 92.8576 518.547C94.1408 518.037 94.7677 516.583 94.258 515.3L86.8737 496.713L105.461 489.329C106.744 488.82 107.371 487.366 106.861 486.083C106.351 484.8 104.898 484.173 103.615 484.683L82.7042 492.99ZM467.278 325.524C466.756 324.245 465.297 323.632 464.019 324.153L443.185 332.65C441.906 333.172 441.293 334.631 441.814 335.909C442.335 337.188 443.795 337.801 445.073 337.28L463.592 329.727L471.145 348.246C471.667 349.524 473.126 350.138 474.404 349.617C475.683 349.095 476.297 347.636 475.775 346.358L467.278 325.524ZM811.963 96.5879C774.284 76.4822 712.179 62.4663 648.14 85.6947C584.003 108.958 518.433 169.388 473.547 297.199L478.264 298.856C522.801 172.041 587.488 113.013 649.845 90.395C712.298 67.7421 772.921 81.4222 809.609 100.999L811.963 96.5879ZM462.658 325.499C415.664 437.234 343.392 488.575 271.902 507.321C200.27 526.104 129.153 512.228 84.6175 493.017L82.6371 497.608C127.972 517.164 200.242 531.28 273.17 512.157C346.24 492.997 419.701 440.531 467.267 327.437L462.658 325.499Z" fill="#B1BAC0" />
                <path d="M898.269 101.718C899.59 101.316 900.335 99.9199 899.934 98.5989L893.387 77.0724C892.985 75.7514 891.589 75.0062 890.268 75.408C888.947 75.8097 888.201 77.2062 888.603 78.5272L894.422 97.6618L875.288 103.481C873.967 103.883 873.222 105.279 873.623 106.6C874.025 107.921 875.422 108.666 876.743 108.264L898.269 101.718ZM169.46 493.522C168.177 494.032 167.55 495.486 168.059 496.769L176.367 517.679C176.877 518.962 178.33 519.589 179.613 519.079C180.896 518.57 181.523 517.116 181.014 515.833L173.629 497.246L192.216 489.862C193.499 489.352 194.126 487.899 193.617 486.616C193.107 485.333 191.653 484.706 190.37 485.215L169.46 493.522ZM898.719 97.1207C861.04 77.0149 798.935 62.9991 734.895 86.2274C670.759 109.491 605.189 169.921 560.302 297.732L565.02 299.389C609.557 172.574 674.244 113.545 736.6 90.9277C799.053 68.2748 859.677 81.9549 896.365 101.532L898.719 97.1207ZM560.302 297.732C515.828 424.37 441.693 483.135 367.333 505.417C292.814 527.747 217.713 513.539 171.373 493.55L169.393 498.141C216.553 518.484 292.879 532.947 368.768 510.207C444.816 487.419 520.071 427.376 565.02 299.389L560.302 297.732Z" fill="#B1BAC0" />
                <path d="M985.18 103.793C986.501 103.391 987.246 101.995 986.845 100.674L980.298 79.1471C979.896 77.8261 978.5 77.0809 977.179 77.4827C975.858 77.8844 975.113 79.2809 975.514 80.6019L981.334 99.7365L962.199 105.555C960.878 105.957 960.133 107.354 960.534 108.675C960.936 109.996 962.333 110.741 963.654 110.339L985.18 103.793ZM649.572 300.635L647.213 299.806L649.572 300.635ZM256.371 495.597C255.088 496.107 254.461 497.56 254.97 498.843L263.278 519.754C263.788 521.037 265.241 521.664 266.524 521.154C267.807 520.644 268.434 519.191 267.924 517.908L260.54 499.321L279.127 491.937C280.41 491.427 281.037 489.974 280.528 488.69C280.018 487.407 278.564 486.78 277.281 487.29L256.371 495.597ZM726.247 162.579C726.123 161.203 724.908 160.189 723.533 160.313L701.123 162.329C699.748 162.453 698.734 163.668 698.857 165.043C698.981 166.418 700.196 167.433 701.571 167.309L721.491 165.517L723.284 185.436C723.407 186.811 724.623 187.826 725.998 187.702C727.373 187.578 728.387 186.363 728.264 184.988L726.247 162.579ZM756.682 127.119C756.549 128.494 757.556 129.715 758.931 129.847L781.327 132.003C782.702 132.135 783.923 131.128 784.055 129.754C784.187 128.379 783.181 127.158 781.806 127.026L761.898 125.11L763.814 105.202C763.946 103.828 762.939 102.606 761.565 102.474C760.19 102.342 758.969 103.349 758.837 104.723L756.682 127.119ZM647.213 299.806C602.739 426.444 528.605 485.21 454.244 507.492C379.725 529.821 304.624 515.614 258.284 495.625L256.304 500.216C303.464 520.559 379.79 535.022 455.679 512.282C531.727 489.494 606.982 429.451 651.931 301.463L647.213 299.806ZM721.838 161.2C693.919 194.64 668.288 239.798 647.213 299.806L651.931 301.463C672.848 241.904 698.212 197.3 725.676 164.405L721.838 161.2ZM985.63 99.1954C935.322 72.3508 841.369 56.3525 757.58 125.43L760.76 129.288C842.59 61.8265 934.251 77.4468 983.276 103.607L985.63 99.1954Z" fill="#FF8300" />
                <path d="M1072.12 106.173C1073.44 105.771 1074.19 104.374 1073.79 103.053L1067.24 81.527C1066.84 80.206 1065.44 79.4608 1064.12 79.8625C1062.8 80.2643 1062.06 81.6608 1062.46 82.9817L1068.28 102.116L1049.14 107.935C1047.82 108.337 1047.08 109.734 1047.48 111.055C1047.88 112.376 1049.28 113.121 1050.6 112.719L1072.12 106.173ZM343.314 497.977C342.03 498.487 341.403 499.94 341.913 501.223L350.221 522.134C350.73 523.417 352.184 524.044 353.467 523.534C354.75 523.024 355.377 521.571 354.867 520.288L347.483 501.701L366.07 494.317C367.353 493.807 367.98 492.354 367.47 491.07C366.961 489.787 365.507 489.16 364.224 489.67L343.314 497.977ZM1072.57 101.575C1034.89 81.4695 972.789 67.4537 908.749 90.682C844.613 113.945 779.043 174.376 734.156 302.186L738.874 303.843C783.411 177.028 848.098 118 910.454 95.3823C972.907 72.7294 1033.53 86.4095 1070.22 105.986L1072.57 101.575ZM734.156 302.186C689.681 428.824 615.547 487.59 541.187 509.872C466.668 532.201 391.566 517.994 345.227 498.005L343.246 502.596C390.406 522.939 466.733 537.401 542.622 514.661C618.67 491.874 693.925 431.831 738.874 303.843L734.156 302.186Z" fill="#B1BAC0" />
                <path d="M1159.19 109.788C1160.51 109.387 1161.26 107.99 1160.85 106.669L1154.31 85.1427C1153.91 83.8217 1152.51 83.0765 1151.19 83.4783C1149.87 83.88 1149.12 85.2765 1149.52 86.5975L1155.34 105.732L1136.21 111.551C1134.89 111.953 1134.14 113.349 1134.54 114.67C1134.95 115.991 1136.34 116.736 1137.66 116.335L1159.19 109.788ZM430.381 501.593C429.098 502.102 428.471 503.556 428.981 504.839L437.288 525.749C437.798 527.032 439.251 527.659 440.534 527.15C441.818 526.64 442.444 525.186 441.935 523.903L434.55 505.316L453.137 497.932C454.421 497.423 455.048 495.969 454.538 494.686C454.028 493.403 452.575 492.776 451.291 493.286L430.381 501.593ZM1159.64 105.191C1121.96 85.0852 1059.86 71.0694 995.816 94.2977C931.68 117.561 866.11 177.991 821.224 305.802L825.941 307.459C870.478 180.644 935.165 121.616 997.521 98.998C1059.97 76.3451 1120.6 90.0252 1157.29 109.602L1159.64 105.191ZM821.224 305.802C776.749 432.44 702.615 491.206 628.254 513.488C553.735 535.817 478.634 521.61 432.294 501.62L430.314 506.212C477.474 526.555 553.8 541.017 629.689 518.277C705.737 495.49 780.992 435.447 825.941 307.459L821.224 305.802Z" fill="#B1BAC0" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
