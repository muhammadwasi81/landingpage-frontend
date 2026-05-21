import React from 'react';
import { TiEyeOutline } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';

const Cards = ({ img, heading, category }) => {
  return (
    <article className="w-full max-w-[280px] rounded-xl bg-[#110D2E] bg-gradient-to-l from-[#110D2E] via-[#110D2E] to-[#fc466a4a] p-3 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(99,24,241,0.25)]">
      <div className="relative mb-3 h-44 w-full">
        <div className="absolute right-2 top-3 z-10 flex w-20 flex-col rounded-3xl border bg-white px-1 py-[2px]">
          <div className='flex items-center justify-center gap-x-2 text-black'>
            <span>1.2k</span>
            <FaHeart className='text-red-600' />
          </div>
        </div>
        <img src={img} alt={`${heading} case study`} className="h-full w-full rounded-2xl object-cover" />
        <div className="absolute -bottom-3 left-4 flex h-6 w-32 items-center justify-start rounded-full bg-white text-xs text-black">
          <div className='flex h-full items-center justify-center rounded-full bg-red-400'>
            <img 
              src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
              alt="" 
              className='h-full w-8 rounded-full object-cover'
            />
          </div>
          <div className='px-4 text-sm text-nowrap'>keep code</div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex min-w-0 items-center justify-between">
          <h2 className="mr-auto truncate text-lg text-gray-200 transition hover:text-purple-500">
            {heading}
          </h2>
        </div>

        <div className="mt-2 flex min-w-0 items-center justify-between">
          <h3 className="mr-auto truncate text-sm text-gray-200 transition hover:text-purple-500">
            {category || 'Customized'}
          </h3>
          <div className="flex items-center rounded-lg text-sm font-semibold text-white">
            33 days
          </div>
        </div>

        <hr className="my-5 h-px border-0 bg-gradient-to-r from-gray-500 to-gray-800" />

        <div className="flex justify-between space-x-2 text-sm font-medium">
          <span className='flex items-center justify-center gap-x-1 text-gray-400'>
            <TiEyeOutline className='h-6 w-6' />
            <span>View Project</span>
          </span>
          <button className="mb-2 inline-flex items-center rounded-full bg-[#6318F1] px-5 py-2 text-sm font-medium tracking-wider text-white transition duration-300 ease-in hover:scale-105 hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:shadow-lg md:mb-0">
            <span>View</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Cards;
