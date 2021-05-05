import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// custom styles
import '../../App.css';
import ArticleCard from '../../components/ArticleCard';

const ArticleTwo = () => {
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
            <h1 className="md:text-4xl text-3xl font-medium uppercase font-trirong dark:text-white">SYSTEMS THINKING IN THE WORKPLACE.</h1>
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
                SYSTEMS THINKING IN
                <br />
                THE WORKPLACE.
              </h1>
            </div>
            <img
              className="md:h-455px w-full object-cover"
              src="https://res.cloudinary.com/https-www-lawrencepriceltd-com/image/upload/v1619445308/blackboxlanding/dg_phnyll.svg"
              alt="Drone"
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
            <h1 className="text-4xl font-trirong py-4 capitalize dark:text-white">Systems</h1>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              A system is a complete entity that consists of two or more parts that are
              related to each other and an environment. The human body is a system.
              The human body is made up of different parts – the head, the hands, the legs, etc.
              Without the head, the rest of the body cannot function effectively.
              The same thing goes for the hands and the legs too.
            </p>
            <h1 className="capitalize font-trirong text-24px md:pt-16 dark:text-white">Systems have three parts.</h1>
            <ul className="md:pl-5">
              <li className="text-lg list-disc mt-5 dark:text-altgrey capitalize">
                Elements
              </li>
              <li className="text-lg list-disc mt-5 dark:text-altgrey capitalize">
                Interconnection
              </li>
              <li className="text-lg list-disc mt-5 dark:text-altgrey">A Purpose</li>
            </ul>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              A workplace is a system. The elements of the workplace include
              the members of staff and the office equipment.
              The various units in the workplace are interrelated and they work
              together to achieve the goals of the company.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              There are systems all around us. The family unit is a system. The community,
              which is made up of various families, is also a system.
              The thing with systems is whatever happens to one component
              affects the other components. Let us use the body as an example.
              If you have a headache, it makes the rest of your body feel weak
              and you might be unable to do certain routine tasks.
              We can also use our ecosystem as an example.
              The depletion of the Ozone layer due to nitrogenous compounds, Chlorofluorocarbons,
              and unregulated rocket launches, has led to serious unintended consequences.
              It has affected humans, animals, the environment, and marine life.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              When we learn to view the world as a series of systems and understand our part
              within them, we can begin to make better decisions, be better teammates,
              and find various ways to be more productive in all areas of our lives.
            </p>
            <h1 className="text-4xl font-trirong pt-4 md:pt-12 pb-8 capitalize dark:text-altgrey">What then is systems thinking?</h1>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Systems thinking is a way of exploring and developing effective action by looking
              at connected wholes rather than separate parts. Simply put, it is a comprehensive
              approach to investigate factors and interactions that could contribute to a
              possible outcome. Systems thinking is a powerful approach to support
              evidence-based decision making and is essential to the successful delivery
              of complex projects where there are many stakeholders and many possible solutions.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Within the workplace, it helps teams to become more aware of how they are
              interacting with each other and within the team, it helps them understand
              the outcomes they are producing.
            </p>
            <h1 className="md:text-4xl text-2xl font-trirong pt-4 md:pt-12 pb-8 capitalize dark:text-altgrey">
              Systems thinking within the workplace.
            </h1>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Systems thinking can serve as a useful tool in the management of an organization.
              It helps explain how the different entities within an organization interact
              and make up the system. The various units within an organization work together
              toward a goal(s).
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Aside from understanding how various components work with and affect
              each other, employees who are systems thinkers also consider how their
              actions in any component can affect the system.
              In the area of supply and demand, system thinkers know when their input
              will be needed and the factors that affect demand. They also know the
              capacity of their organization to meet demand.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Feedback is a core part of systems thinking in the workplace.
              Acting on relevant feedback allows the leaders in an organization to
              come up with solutions to problems.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Business leaders, who are also system thinkers, find a way of tying the personal
              goals of the various employees to the overall goals of the company.
              That way, when an employee achieves a personal goal, it means that the company
              goal is a step closer to being achieved. System thinkers employ a management
              style that emphasizes rewarding employees’ accomplishments.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              They regularly update employees about the company’s main objectives and how
              their contributions are each individually important in the achievement of
              those objectives.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Systems thinking make it easier to spot patterns and feedback loops in the way
              employees, project teams or departments interact. A feedback loop is when you use
              customer or employee feedback to improve on your product or service offering.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              With a systems approach, you realize everything is interrelated. Each person needs
              their co-workers to achieve success. The systems style of thinking gives you the
              tools to integrate interconnectivity, creativity, and productivity
              into your workplace.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              More importantly, systems thinking turns employees into lovers of problems as they
              will now see it as an exciting opportunity. Rather than run away from problems,
              they will see these problems as potential ways to innovate
              and develop their creativity.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              No matter how large or small your organization is, it is ultimately made up of
              different parts. To address problems, you must look at the interconnected dynamics
              of the system. It helps you to come up with long-term solutions to the problems.
              Systems thinking helps your business become a more efficient one.
              Give it a shot today.
            </p>
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
                  src="https://images.unsplash.com/photo-1534520269876-e35bf9cb9d02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
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
                  src="https://images.unsplash.com/photo-1602201424573-b62fa78cebbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
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

export default ArticleTwo;
