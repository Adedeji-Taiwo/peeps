import React from 'react'
import { todayDate, currentTime } from '../../utils/utils'


const TableHeader = () => {  
  
  return (
    <div className='flex items-center justify-between md:flex-row flex-col md:gap-0 gap-5 w-full'>
      <h2 className='font-thin text-white lg:text-[40px] text-[30px]'>Today's leaderboard</h2>
      <div className='bg-bgLight rounded-2xl lg:px-6 lg:py-4 px-[18px] py-3 flex items-center lg:gap-4 gap-3'>
        <p className='flex items-center lg:gap-2 gap-1 text-white lg:text-base text-sm font-thin'>
          <span>{todayDate()}</span>
        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2" fill="#696969"/>
        </svg>
        </p>
        <p className='font-thin lg:text-sm text-xs text-black lg:px-[10px] lg:py-1 px-[7.5px] py-[3px] bg-primary rounded-lg'>
          <span className='capitalize'>submissions</span>
          <span className='uppercase'>open</span>
        </p>
        <p className='flex items-center lg:gap-2 gap-1 text-white lg:text-base text-sm font-thin'>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#696969"/>
          </svg>
          <span>{currentTime()}</span>
          </p>
      </div>
    </div>
  )
}

export default TableHeader