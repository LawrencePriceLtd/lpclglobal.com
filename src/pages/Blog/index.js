import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const articles = [
  {
    category: 'Lawrence Price Wealth',
    title: 'SYSTEMS THINKING IN THE WORKPLACE',
    description: 'Systems thinking is a powerful approach to support ....',
    image_url: 'https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1619445308/blackboxlanding/dg_phnyll.svg',
    link: '/blog/article/2',
  },
  {
    category: 'Lawrence Price Capital',
    title: 'WOMEN AND BUSINESS 2021',
    description: 'Africa is the world’s second largest and second most populous continent, ...',
    image_url: 'https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1618307835/blackboxlanding/smiley-african-woman-working-market_o84h63.jpg',
    link: '/blog/article/1',
  },
  {
    category: 'Lets create the Future',
    title: 'IMPACT OF WOMEN ON  NIGERIA’S ECONOMY',
    description: 'As Nigeria remains one of the brightest economic spots in Africa...',
    image_url: 'https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1620309377/blackboxlanding/Rectangle_001_pyug2n.png',
    link: '/blog/article/3',
  },
];
const Blog = () => {
  // eslint-disable-next-line no-unused-vars
  const a = 1;

  return (
    <>
      <Navbar />
      <section className="md:py-40 py-20 md:px-20 px-5">
        <div>
          <h1 className="text-4rem font-trirong text-center dark:text-white font-medium">Blog & Articles</h1>
          <p className="text-24px text-center dark:text-gray-300 text-gray1 md:py-16 py-6">
            Our blog and Articles , insight into our processes Industry
            <br />
            knowledge and Thinking
          </p>
          <div className="flex justify-center">
            <button type="button">
              <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.5 15C33.5 14.7239 33.2761 14.5 33 14.5C32.7239 14.5 32.5 14.7239 32.5 15L33.5 15ZM32.6464 46.3536C32.8417 46.5488 33.1583 46.5488 33.3536 46.3536L36.5355 43.1716C36.7308 42.9763 36.7308 42.6597 36.5355 42.4645C36.3403 42.2692 36.0237 42.2692 35.8284 42.4645L33 45.2929L30.1716 42.4645C29.9763 42.2692 29.6597 42.2692 29.4645 42.4645C29.2692 42.6597 29.2692 42.9763 29.4645 43.1716L32.6464 46.3536ZM32.5 15L32.5 46L33.5 46L33.5 15L32.5 15Z" fill="#61686C" />
                <circle cx="33.5" cy="33.5" r="32.5" transform="rotate(90 33.5 33.5)" stroke="#61686C" />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex justify-start mt-16">
          <div className="bg-black flex items-center md:px-20 py-10 px-5">
            <div>
              <h1 className="uppercase text-white text-24px font-medium">todays pick</h1>
              <Link to="/blog/article/1" className="block text-white md:text-5xl text-3xl font-trirong font-medium py-6 hover:text-orange">
                Driving Business Growth
                Accross Africa and Beyond
              </Link>
              <h1 className="text-white md:text-24px capitalize font-medium">Driving the frontiers for business innovation.</h1>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2642389/pexels-photo-2642389.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="md:w-386px w-full md:h-376px h-250px object-cover"
              alt="Woman"
            />
          </div>
        </div>
      </section>
      <section className="md:py-20 py-6 md:px-16 px-5">
        <div>
          <h1 className="md:text-5xl text-3xl capitalize font-trirong font-medium dark:text-white">Tech</h1>
          <h2 className="capitalize text-coregray dark:text-gray-300 md:text-4xl text-2xl pt-1">Techable</h2>
        </div>
      </section>
      <section className="bg-lightgrey dark:bg-kiwi md:py-40 md:px-16 px-5 py-12">
        <div className="md:flex md:space-x-6 md:space-y-0 space-y-6">
          {

            articles?.map((article) => (
              <div className="md:w-1/3 relative">
                <div className="bg-white md:w-300px  dark:bg-black absolute bottom-0 left-0 md:px-10 px-5 py-6">
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
            ))
          }
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
