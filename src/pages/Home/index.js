/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// images
import Sphere from '../../assets/sphere.svg';
import Razor from '../../assets/razor.svg';

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
  const ButtonOne = ({ onClick }) => (
    <button type="button" className="md:ml-20" onClick={() => onClick()}>
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.3 17.5C28.8523 17.5 29.3 17.9477 29.3 18.5C29.3 19.0523 28.8523 19.5 28.3 19.5V17.5ZM10.7929 19.2071C10.4024 18.8166 10.4024 18.1834 10.7929 17.7929L17.1568 11.4289C17.5474 11.0384 18.1805 11.0384 18.5711 11.4289C18.9616 11.8195 18.9616 12.4526 18.5711 12.8431L12.9142 18.5L18.5711 24.1569C18.9616 24.5474 18.9616 25.1805 18.5711 25.5711C18.1805 25.9616 17.5474 25.9616 17.1568 25.5711L10.7929 19.2071ZM28.3 19.5H11.5V17.5H28.3V19.5Z" fill="#545454" />
        <circle r="17.5" transform="matrix(-1 0 0 1 18.5 18.5)" stroke="#545454" strokeWidth="2" />
      </svg>
    </button>
  );

  const ButtonTwo = ({ onClick }) => (
    <button type="button" className="ml-2 md:mt-20" onClick={() => onClick()}>
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.70001 17.5C8.14773 17.5 7.70001 17.9477 7.70001 18.5C7.70001 19.0523 8.14773 19.5 8.70001 19.5V17.5ZM26.2071 19.2071C26.5976 18.8166 26.5976 18.1834 26.2071 17.7929L19.8432 11.4289C19.4526 11.0384 18.8195 11.0384 18.4289 11.4289C18.0384 11.8195 18.0384 12.4526 18.4289 12.8431L24.0858 18.5L18.4289 24.1569C18.0384 24.5474 18.0384 25.1805 18.4289 25.5711C18.8195 25.9616 19.4526 25.9616 19.8432 25.5711L26.2071 19.2071ZM8.70001 19.5H25.5V17.5H8.70001V19.5Z" fill="#545454" />
        <circle cx="18.5" cy="18.5" r="17.5" stroke="#545454" strokeWidth="2" />
      </svg>
    </button>
  );
  const CustomButtonGroupAsArrows = ({
    next, previous, goToSlide, ...rest
  }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <ButtonTwo onClick={() => next()} />
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <section>
        <div className="md:flex md:space-x-10 md:px-16 md:pt-40 md:pb-20">
          <div className="md:w-1/2">
            <h1 className="text-4rem font-trirong font-medium dark:text-white">
              We are here for those
              who are bold enough
              to face
              <span className="text-lawrenceprice"> Change.</span>
            </h1>
            <h1 className="text-4xl md:pt-10 pt-4 dark:text-gray-400">
              Driving business Innovation across Africa
              and beyond
            </h1>
          </div>
          <div className="md:w-1/2">
            <img className="block pt-10" src={Sphere} alt="sphere" />
          </div>
        </div>
      </section>
      <section>
        <div className="md:px-16 md:py-20">
          <h1 className="font-trirong text-4rem font-medium dark:text-white">The Future is Now.</h1>
          <h1 className="text-4xl font-medium text-coregray dark:text-gray-400 pt-4">
            Creating and building Solutions
            <br />
            to Africa’s Business Problems.
          </h1>
          <div className="md:flex justify-start items-end">
            <img className="block pt-12" src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618925885/blackboxlanding/F110-exhaust-half-hero_Sloved_whj4fr.png" alt="mechanism" />
            <button type="button" className="bg-orange hover:bg-yellow-600 flex items-center space-x-6 text-lg font-medium md:pl-20 md:pr-10 text-white md:pb-6 md:pt-36 flex-grow-0">
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
        <div className="md:flex items-center md:px-16 md:py-20">
          <div className="md:w-1/2">
            <h1 className="text-lg text-orange font-medium">Lawrence Price Wealth</h1>
            <p className="text-5xl font-trirong font-medium pt-10 dark:text-white">
              leveraging innovation and
              advanced analytics to create
              bespoke investment products
            </p>
            <p className="font-medium text-coregray text-4xl md:pt-10 pt-4 dark:text-gray-400">
              Then, who taught you? who attended
              to you? Without a governess, you must
              have been neglected.
            </p>
            <div className="md:pt-16">
              <button type="button" className="hover:text-yellow-600 text-orange flex items-center space-x-2 text-24px font-bold">
                <span>Read more</span>
                <span>
                  <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM36.8839 10.8839C37.372 10.3957 37.372 9.60427 36.8839 9.11612L28.9289 1.16117C28.4408 0.67301 27.6493 0.67301 27.1612 1.16117C26.673 1.64932 26.673 2.44078 27.1612 2.92893L34.2322 10L27.1612 17.0711C26.673 17.5592 26.673 18.3507 27.1612 18.8388C27.6493 19.327 28.4408 19.327 28.9289 18.8388L36.8839 10.8839ZM1.5 11.25H36V8.75H1.5V11.25Z" fill="#FF8300" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={Razor} alt="Razor" />
          </div>
        </div>
      </section>
      <section className="bg-lightgrey dark:bg-kiwi">
        <div className="md:px-16 md:py-40 relative">
          <div className="relative">
            <div className="bg-white dark:bg-black absolute bottom-0 left-0 md:px-20 md:py-12">
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
                <button className="" type="button">
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
            <div className="py-12 md:pl-16">
              <h1 className="text-4rem font-medium font-trirong">SDG</h1>
              <h1 className="text-5xl text-coregray pt-5">Sustainable Goals</h1>
            </div>
            <div className="md:flex">
              <div>
                <img
                  className="md:h-700px object-cover"
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
                  className="md:h-700px object-cover"
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
                  className="md:h-950px object-cover"
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
                  className="md:h-950px object-cover"
                  src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Person"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightgrey dark:bg-kiwi">
        <div className="md:px-16 md:py-40">
          <div className="relative">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
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
                  <div className="bg-white md:w-300px md:h-210px dark:bg-black absolute bottom-0 left-0 md:px-10 md:py-6">
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
        <Footer />
      </section>
    </div>
  );
};

export default Home;
