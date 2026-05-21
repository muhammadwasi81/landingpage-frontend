import React, { useMemo, useState } from 'react';
import Cards from './Cards';
import health from '../assets/CGI/health.png'; 
import robotics from '../assets/CGI/robotics.png'; 
import casino from '../assets/CGI/casino.png'; 
import contruction from '../assets/CGI/contruction.png'; 
import influencer from '../assets/CGI/influencer.png'; 
import NFT from '../assets/CGI/NFT.png'; 
import survey from '../assets/CGI/survey.png'; 
import sports from '../assets/CGI/sports.png'; 
import shoes from '../assets/CGI/shoes.png'; 
import portfolio from '../assets/CGI/portfolio.png'; 

const explorecards = [
  {
    heading: 'Health Care',
    img: health,
    category: 'AI',
  },
  {
    heading: 'Robotics',
    img: robotics,
    category: 'AI',
  },
  {
    heading: 'Casino Game',
    img: casino,
    category: 'Web',
  },
  {
    heading: 'Construction',
    img: contruction,
    category: 'Mobile',
  },
  {
    heading: 'Influencer',
    img: influencer,
    category: 'Mobile',
  },
  {
    heading: 'NFT Platform',
    img: NFT,
    category: 'Blockchain',
  },
  {
    heading: 'Survey',
    img: survey,
    category: 'Web',
  },
  {
    heading: 'Sports',
    img: sports,
    category: 'Mobile',
  },
  {
    heading: 'Shoes',
    img: shoes,
    category: 'Web',
  },
  {
    heading: 'Portfolio',
    img: portfolio,
    category: 'Web',
  }
];

const filters = ['All', 'Web', 'Mobile', 'AI', 'Blockchain'];

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCards = useMemo(() => {
    if (activeFilter === 'All') {
      return explorecards;
    }

    return explorecards.filter((card) => card.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id='case-study' className='container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='flex flex-col items-center gap-8 text-white lg:flex-row lg:justify-between'>
        <h1 className='text-center text-3xl font-semibold text-white sm:text-4xl lg:text-left'>Case Studies</h1>

        <div className='flex max-w-full overflow-x-auto no-scrollbar'>
          <div className='flex min-w-max items-center justify-center gap-2 rounded-full border border-white/10 bg-[#110D2E]/70 p-2'>
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type='button'
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 sm:text-base ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white shadow-[0_0_24px_rgba(99,24,241,0.45)]'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <a
            href='#contact'
            className='inline-flex rounded-full bg-[#6318F1] px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:shadow-lg'
          >
            Apply Now
          </a>
        </div>
      </div>

      <div className='absolute inset-0 top-32 -z-10 h-96 w-80 translate-x-[10px] rounded-full bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400 opacity-30 blur-3xl'></div>

      {filteredCards.length > 0 ? (
        <div
          key={activeFilter}
          className='mt-12 grid animate-filterIn grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        >
          {filteredCards.map((explore) => (
            <Cards
              key={explore.heading}
              img={explore.img}
              heading={explore.heading}
              category={explore.category}
            />
          ))}
        </div>
      ) : (
        <div className='mt-12 rounded-3xl border border-white/10 bg-[#110D2E]/70 px-6 py-14 text-center text-white'>
          <h2 className='text-2xl font-semibold'>No case studies found</h2>
          <p className='mt-3 text-gray-300'>Try another category to explore more work.</p>
        </div>
      )}
    </section>

  )
}

export default Explore
