/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import { AttentionSeeker, Flip, Fade } from 'react-awesome-reveal';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// images
import Partners from '../../components/Partners';
import CustomButtonGroupAsArrows from '../../components/CustomButtonGroupAsArrows';
import BusinessCategory from '../../components/BusinessCategory';
import Banner from '../../components/Banner';

const articles = [
  {
    category: 'Lawrence Price Wealth',
    title: 'Future is Now. Take it',
    description: 'Do you not think it would be a proper compliment to the place?',
    image_url: 'https://images.pexels.com/photos/5427870/pexels-photo-5427870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    category: 'Lawrence Price business solution',
    title: 'Standing Out',
    description: 'Do you not think it would be a proper compliment to the place?',
    image_url: 'https://images.pexels.com/photos/3735580/pexels-photo-3735580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    category: 'Lets create the Future',
    title: 'Future is Now. Take it',
    description: 'Do you not think it would be a proper compliment to the place?',
    image_url: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    category: 'Lets create the Future',
    title: 'Future is Now. Take it',
    description: 'Do you not think it would be a proper compliment to the place?',
    image_url: 'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
];

const Home = () => {
  const a = 0;

  return (
    <div>
      <Navbar />
      <section>
        <Banner />
      </section>
      <section>
        <div className="md:px-16 px-5 md:py-20 py-20">
          <Flip direction="horizontal">
            <h1 className="font-trirong text-4rem font-medium dark:text-white">The Future is Now.</h1>
          </Flip>
          <AttentionSeeker effect="pulse">
            <h1 className="text-4xl font-medium text-coregray dark:text-gray-400 pt-4">
              Creating and building Solutions
              <br />
              to Africa’s Business Problems.
            </h1>
          </AttentionSeeker>
          <div className="md:flex justify-start items-end md:pt-0 pt-12">
            <img className="block pt-12" src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618925885/blackboxlanding/F110-exhaust-half-hero_Sloved_whj4fr.png" alt="mechanism" />
            <button type="button" className="bg-orange hover:bg-yellow-600 flex items-center space-x-6 text-lg font-medium md:pl-20 pl-10 pr-10  text-white pb-6 md:pt-36 pt-6 flex-grow-0">
              <span>Start Now</span>
              <span>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill="white" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section>
        <BusinessCategory businessType="Lawrence Price Wealth" />
      </section>
      <section className="bg-lightgrey dark:bg-kiwi">
        <div className="md:px-16 px-5 md:py-40 py-32 relative">
          <div className="relative">
            <div className="bg-white dark:bg-black md:absolute bottom-0 left-0 md:px-20 px-5 py-10 md:py-12">
              <div className="flex justify-between">
                <h1 className="text-xs text-orange uppercase font-bold">Report</h1>
                <h1 className="text-textgrey text-8px font-medium uppercase">Lawrence Price business solution</h1>
              </div>
              <a href="3a" className="text-4xl font-trirong font-medium pt-3 dark:text-white hover:text-orange">
                The First and Best Way, Business
                <br />
                Entry Innovation for 2021.
              </a>
              <div className="md:flex md:space-x-6 items-end">
                <p className="text-coregray text-lg pt-6 dark:text-gray-300">
                  Bless me, Poole, what brings you here?” he cried; and then taking
                  <br />
                  a second look at him, “What ails you?” he added; “is the doctor ill
                </p>
                <button className="md:mt-0 mt-8" type="button">
                  <svg width="76" height="16" viewBox="0 0 76 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM75.2822 8.70711C75.6728 8.31658 75.6728 7.68342 75.2822 7.29289L68.9183 0.928932C68.5278 0.538408 67.8946 0.538408 67.5041 0.928932C67.1135 1.31946 67.1135 1.95262 67.5041 2.34315L73.1609 8L67.5041 13.6569C67.1135 14.0474 67.1135 14.6805 67.5041 15.0711C67.8946 15.4616 68.5278 15.4616 68.9183 15.0711L75.2822 8.70711ZM1 9H74.5751V7H1V9Z" fill="#FF8300" />
                  </svg>
                </button>
              </div>
            </div>
            <img
              className="md:h-455px w-full object-cover"
              src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="people"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-kiwi">
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
              <div>
                <img
                  className="md:h-700px h-96 w-full object-cover"
                  src="https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Giraffes"
                />
              </div>
              <div className="relative">
                <div className="absolute bottom-24 left-6">
                  <h1 className="text-5xl text-white font-trirong font-medium capitalize">Agriculture</h1>
                  <h1 className="text-4xl text-white font-medium capitalize pt-2">For good.</h1>
                </div>
                <img
                  className="md:h-700px h-96 w-full object-cover"
                  src="https://images.pexels.com/photos/3735580/pexels-photo-3735580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
                  src="https://images.pexels.com/photos/5427870/pexels-photo-5427870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
                  src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Person"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightgrey dark:bg-kiwi">
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
                  <div className="bg-white md:w-300px md:h-210px dark:bg-black absolute bottom-0 left-0 md:px-10 px-5 py-6">
                    <div className="flex space-x-3">
                      <h1 className="text-6px text-coregray uppercase font-bold">Article</h1>
                      <h1 className="text-textgrey text-6px font-medium uppercase">{article.category}</h1>
                    </div>
                    <a href="3a" className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                      {article.title}
                    </a>
                    <div className="">
                      <p className="text-coregray text-sm pt-2 dark:text-gray-300">
                        {article.description}
                      </p>
                      <button className="mt-4" type="button">
                        <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7.125C0.447715 7.125 0 7.57272 0 8.125C0 8.67728 0.447715 9.125 1 9.125V7.125ZM26.7071 8.83211C27.0976 8.44158 27.0976 7.80842 26.7071 7.41789L20.3431 1.05393C19.9526 0.663408 19.3195 0.663408 18.9289 1.05393C18.5384 1.44446 18.5384 2.07762 18.9289 2.46815L24.5858 8.125L18.9289 13.7819C18.5384 14.1724 18.5384 14.8055 18.9289 15.1961C19.3195 15.5866 19.9526 15.5866 20.3431 15.1961L26.7071 8.83211ZM1 9.125H26V7.125H1V9.125Z" fill="#FF8300" />
                        </svg>
                      </button>
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
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <div className="absolute md:px-16 px-5 py-16 md:py-40">
            <h1 className="text-lg text-white font-bold uppercase">LP Business Solution</h1>
            <h1 className="font-trirong font-semibold md:text-4rem text-5xl text-white md:pt-96 pt-5">IoT in Agriculture</h1>
            <h1 className="font-medium text-5xl text-white capitalize md:pt-6">Sustainable Goals</h1>
            <div>
              <button type="button" className="flex text-white text-lg font-medium space-x-2 items-center mt-6">
                <span>Learn How</span>
                <span>
                  <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9H26V7H1V9Z" fill="white" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <img className="md:h-900px h-96 w-full md:w-full" src="https://images.pexels.com/photos/109391/pexels-photo-109391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="leaf" />
        </div>
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <BusinessCategory businessType="LP Capital" />
      </section>
      <section>
        <div className="md:px-16 px-5 py-20 bg-lightgrey dark:bg-kiwi md:flex md:space-x-8 md:space-y-0 space-y-10 md:py-40">
          <div className="flex-1">
            <Fade direction="down">
              <h1 className="capitalize text-4rem font-trirong pt-6 dark:text-white">New Way</h1>
            </Fade>
            <Fade direction="up">
              <h1 className="text-4xl text-coregray pt-3 dark:text-gray-400 md:pb-0 ">True Investment</h1>
            </Fade>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white md:w-300px md:h-210px dark:bg-black absolute bottom-0 left-0 md:px-10 px-5 py-6">
              <a href="3a" className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                The Future
                is Now. Take it
              </a>
              <div className="">
                <p className="text-coregray text-8px pt-2 dark:text-gray-300">
                  Lawrence Price capital
                </p>
                <button className="mt-4" type="button">
                  <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7.125C0.447715 7.125 0 7.57272 0 8.125C0 8.67728 0.447715 9.125 1 9.125V7.125ZM26.7071 8.83211C27.0976 8.44158 27.0976 7.80842 26.7071 7.41789L20.3431 1.05393C19.9526 0.663408 19.3195 0.663408 18.9289 1.05393C18.5384 1.44446 18.5384 2.07762 18.9289 2.46815L24.5858 8.125L18.9289 13.7819C18.5384 14.1724 18.5384 14.8055 18.9289 15.1961C19.3195 15.5866 19.9526 15.5866 20.3431 15.1961L26.7071 8.83211ZM1 9.125H26V7.125H1V9.125Z" fill="#FF8300" />
                  </svg>
                </button>
              </div>
            </div>
            <img
              className="md:h-450px h-96  w-full object-cover"
              src="https://images.pexels.com/photos/5427870/pexels-photo-5427870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="people"
            />
          </div>
          <div className="flex-1 relative">
            <div className="bg-white md:w-300px md:h-210px dark:bg-black absolute bottom-0 left-0 md:px-10 px-5 py-6">
              <a href="3a" className="block text-2xl font-trirong font-medium pt-2 dark:text-white hover:text-orange">
                Standing Out
              </a>
              <div className="">
                <p className="text-coregray text-8px pt-2 dark:text-gray-300">
                  Lawrence Price business solutions
                </p>
                <button className="mt-4" type="button">
                  <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7.125C0.447715 7.125 0 7.57272 0 8.125C0 8.67728 0.447715 9.125 1 9.125V7.125ZM26.7071 8.83211C27.0976 8.44158 27.0976 7.80842 26.7071 7.41789L20.3431 1.05393C19.9526 0.663408 19.3195 0.663408 18.9289 1.05393C18.5384 1.44446 18.5384 2.07762 18.9289 2.46815L24.5858 8.125L18.9289 13.7819C18.5384 14.1724 18.5384 14.8055 18.9289 15.1961C19.3195 15.5866 19.9526 15.5866 20.3431 15.1961L26.7071 8.83211ZM1 9.125H26V7.125H1V9.125Z" fill="#FF8300" />
                  </svg>
                </button>
              </div>
            </div>
            <img
              className="md:h-450px h-96  w-full object-cover"
              src="https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="people"
            />
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
