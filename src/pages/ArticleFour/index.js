import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

// custom styles
import '../../App.css';
import ArticleCard from '../../components/ArticleCard';

const ArticleFour = () => {
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
              The Emerging Gig
              Economy in Nigeria
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
                The Emerging Gig
                <br />
                Economy in Nigeria
              </h1>
            </div>
            <img
              className="md:h-455px w-full object-cover"
              src="https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="calculator"
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
            <p className="md:text-lg pt-6 dark:text-altgrey">
              The Gig Economy also referred to as the platform economy is a type of work
              arrangement where professionals are hired as an independent contractor as
              against the traditional full-time employments. Gigs as a formal employment
              option is still relatively new in Nigeria. In Nigeria, they are seen as
              “side hustles” or “runs” which individuals engage in to supplement the
              income from their main jobs
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              The Information and Communications Technology (ICT) sector seems to be the
              early mover in the emergence of gigs in the country. It is not unusual to
              see ICT professionals working independently for multiple companies at the
              same time. The relationship can be seen moving from employer — employee to
              contractor/consultant — client. Ride-hailing companies like Uber,
              Bolt have also provided an avenue for more Nigerians to be a part of the
              gig economy. It is a known fact that some car owners especially in Lagos
              and Abuja double as drivers in their spare time or even after close of
              business.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              A study done by McKinsey in 2016 showed that between 20% and 30% of the
              working-age population in the United States and the European Union were
              engaged in one form of independent work or the other. “Free agents”,
              who deliberately engage in independent work and earn their primary income
              from it were said to have constituted 30% of the survey population.
              40% of the surveyed population were classified as “casual earners”,
              who engage in independent work as a supplement to their primary source
              of income. It is not unlikely that this is the category where most
              gig workers in Nigeria currently fall into.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              A report by Staffing Industry Analysts (SIA), estimated that the global gig
              was worth $4.5 trillion in 2018, with the US unsurprisingly being the largest
              market with 53 million gig workers and total gig spending of $1.3 trillion.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Given the value of gig economy across Africa, Nigeria inclusive, the gig economy
              platforms take different forms, for example, there are platforms who connect
              professionals to third party and get jobs done and common platforms are Up-work,
              Fiverr, and Paydesk.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Africa platforms like Kobo360 (Nigeria) and Lori Systems (Kenya), two companies
              that have each raised at least $37 million to connect people with third-party
              truck drivers base on-demand. Lori Systems estimates that the African haulage
              market is worth $180 billion annually.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Mark Zuckerberg funded Andela platform for professional services like accounting,
              graphics design, programming, content writing, among others and it is valued at
              $700 million in 2019. Andela connects experienced African developer talent to
              international companies with salary opportunities above the local market rates.
              There is also SweepSouth, which has raised $6 million from investors,
              and Eden Life, which provide on-demand home cleaning services, among many
              other things, in South Africa and Nigeria, respectively.
            </p>
            <div className="md:pt-24 md:pb-32 pt-10 pb-10">
              <img
                src="https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                className="w-full md:h-506px object-cover"
                alt="metrics"
              />
            </div>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              As the Nigerian economy and IT evolves, gigs will no doubt become an increasingly
              popular option for outsourcing talents. Some of the opportunities gig provide for
              small businesses include
            </p>
            <ul className="md:pl-6">
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">Cost Savings:</span>
                  The compensation of gig workers is negotiated based
                  on the man-hours
                  required from them. Since most gig workers work for more than one client,
                  gig worker
                  schedule becomes the major consideration in any form of engagement.
                  The fees payable
                  to a gig worker who will work for a limited time should typically be less than the
                  wages of a full-time employee possessing the same level of skills and experience.
                  Factoring in pensions and other statutory benefits provided for full-time
                  employees,
                  the cost savings on gig workers becomes more significant.
                </p>
              </li>
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">Better access to talents:</span>
                  Gig arrangements will also allow small businesses owners to compete better in the
                  marketplace for talents, as they will be able to utilize the skill set of some
                  professionals, they may not have been able to attract if they were to hire them
                  full-time. The gig arrangement allows them to pay for only the allotted hours of
                  these professional’s time at rates they can more easily afford.
                </p>
              </li>
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">More efficient delivery:</span>
                  The competition for their time ideally makes gig workers
                  more efficient in their delivery. With multiple client commitments, a gig worker
                  understands the phrase “time is money” and would therefore be better motivated
                  to deliver within agreed timelines. This is clearly an advantage for business
                  owners as there is a better opportunity to earn value for money.
                </p>
              </li>
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">Mutually agreed terms of disengagement:</span>
                  The terms of disengagement of gig workers
                  are most often limited to the termination clauses in their contracts.
                  Where fairly negotiated, such termination clauses would provide adequate
                  protection for both the gig worker and the client, with shorter notice
                  periods and liabilities.
                </p>
              </li>
            </ul>
            <div className="md:pt-24 md:pb-32 pt-10 pb-10">
              <img
                src="https://images.pexels.com/photos/6347705/pexels-photo-6347705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                className="w-full md:h-506px object-cover"
                alt="metrics"
              />
            </div>
            <h1 className="md:text-4xl text-2xl font-trirong pt-4 font-medium pb-8 capitalize dark:text-altgrey">
              What’s At Stake
            </h1>
            <ul className="md:pl-6">
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">Job Insecurity: </span>
                  The concept of job security is based on a steady income,
                  a sense of permanence, and retirement benefits. Gig workers are usually
                  hit when a company faces challenges like acquisition, bankruptcy, or financial
                  scandals unlike full-time employee who have job security. Understandably, all
                  sectors of the economy were affected by the pandemic and most organizations
                  had to relieve people of their job, but it appears that contract employees
                  were mostly affected because, barring those offering exceptional value,
                  they were not the priority when companies drew up their adaptation plans.
                </p>
              </li>
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1"> Uncertain Incentives:</span>
                  Gig workers have lower levels of protection when it comes
                  to termination of their employment. This is having in mind that not all temporary
                  jobs have clearly defined termination date. Usually, no reasons are given by the
                  client to justify the end of the employment relationship other than the end date
                  of the contract being reached and the client unwillingness to renew. Also, because
                  of the ease with which workers in the gig economy can be replaced, most companies
                  do not bother giving them benefits once they are let go.
                </p>
              </li>
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">More efficient delivery:</span>
                  The competition for their time ideally makes gig workers
                  more efficient in their delivery. With multiple client commitments, a gig worker
                  understands the phrase “time is money” and would therefore be better motivated
                  to deliver within agreed timelines. This is clearly an advantage for business
                  owners as there is a better opportunity to earn value for money.
                </p>
              </li>
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">Legal Protection: </span>
                  There are very few countries with defined regulatory provisions
                  protecting the interests of gig workers. As a result, these casual jobs are taken
                  up without any contractual agreements. And the absence of regulations makes
                  it easy for employers to treat employees unfairly, without the latter having
                  litigation options to redress the wrongs done to them.
                </p>
              </li>
              <li className="list-disc">
                <p className="md:text-lg pt-6 dark:text-altgrey">
                  <span className="font-semibold mr-1">Access to Fund/Credit: </span>
                  Another challenge that gig workers face is the lack of salary slips which can
                  prevent gig workers from accessing certain financial services such as loans
                  when they are in dear need.
                </p>
              </li>
            </ul>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Notwithstanding the setbacks and challenges confronting Small and Medium
              Enterprises, if properly equipped, they can grow the economy and contribute
              more to Nigeria’s growth so that She can take its place on the world stage.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
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
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Despite its challenges, a pronounced gig economy plays a crucial role in
              people’s entry into the labour market, it helps the young population gain relevant
              work experience. Whether you are an Nigerian freelance writer remotely running a
              publication for a company Oklahoma, an Uber driver, a software engineer, or a web
              designer building a website for a corporate agency, you’re a part of the gig
              economy. Taking up gigs is an opportunity for professionals to upskill without
              being held back by their stable job.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              In essence, the gig economy provides a kind of testing ground which helps young
              people try out different roles, compare work ethics across sectors, develop other
              skills, as well as build a network with other professionals. Meanwhile, an employer
              can objectively judge whether an employee is a best fit for the company after a
              series of short-term services before deciding to offer permanent employment.
            </p>
            <p className="md:text-lg pt-6 dark:text-altgrey">
              Ultimately, If Nigeria will benefit from the gig economy, we need to adopt an
              inclusive regulatory model for every form of employment. Eventually, it would
              be less complicated belonging to either side of the labour phase. Perhaps,
              it will also serve as a panacea to the unemployment challenges faced in the
              Nigeria and Africa at large.
            </p>
            <div className="bg-lightgrey dark:bg-kiwi mt-12 px-10 md:pb-20 pb-10 rounded-lg">
              <h1 className="md:text-4xl text-2xl font-trirong pt-4 md:pt-20 capitalize dark:text-white">
                References
              </h1>
              <div>
                <ul>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    MSME Hub: GIG Economy
                  </li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    Techpoint Africa: Africa Gig Economy
                  </li>
                  <li className="text-sm list-disc mt-5 dark:text-altgrey">
                    Financial Nigeria: Emerging Gig Economy
                  </li>
                </ul>
              </div>
            </div>
            <h1 className="text-4xl font-trirong pt-24 capitalize dark:text-white">The Author(s)</h1>
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

export default ArticleFour;
