'use client'

import { tableHeader } from '../../utils/utils'
import { ArrowDown } from '../../utils/ArraowDown';
import PaginationButtons from './PaginationButtons';
import { SkeletonLoader } from '..';
import Card from './Card';
import { useContext } from 'react';
import Link from 'next/link';
import { PeepContext, PeepContextType } from '@/context/peep.context';


const TableContent = () => {
  const {data, pageNum, setPageNum, userData, searchQuery} = useContext(PeepContext) as PeepContextType;
    

    //next button
    const handleNext = () => {
        setPageNum(pageNum + 1);
      };
    
      //prev button
      const handlePrev = () => {
        setPageNum(pageNum - 1);
      };



  return (
    <>
    {data ? (
      <div className="relative overflow-auto whitespace-nowrap scrollbar-hide rounded-[10px] w-full">

      <table className="font-inter min-w-full text-left">
     <thead className="lg:text-base text-sm xl:px-2 pt-1 px-1 capitalize  text-[#696969] ">
         <tr>  
             {tableHeader.map((item, index) => (
                 <th scope="col" className={`lg:pl-4 lg:pr-14 pl-3 md:pr-20 pr-14 py-4 font-light`} key={item}>
                    {index === 3 ? <span className='flex items-center ml-2'>{item} <ArrowDown /></span> : item}
                 </th>
             ))}
         </tr>
     </thead>
     <tbody className='w-full'>
   
       {userData?.map((data) => (
         <Card data={data} key={data.id.value} />     
         ))}
     </tbody>
     </table>
   
 </div>
    ) : (
      <div className='flex flex-col w-full'>{SkeletonLoader.map((item) => item)}</div>
    )}
   
     {data && !searchQuery && (
      <PaginationButtons
      page={data?.info.page}
      numPages={20}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
    )}
    </>
  )
}

export default TableContent