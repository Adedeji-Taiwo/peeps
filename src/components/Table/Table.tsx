import React from 'react'
import {TableHeader, TableContent} from '../index';


const Table = () => {
  return (
    <div className='flex flex-col items-start justify-start lg:gap-8 gap-[18px] w-full'>
        <TableHeader />
        <TableContent />
    </div>
  )
}

export default Table