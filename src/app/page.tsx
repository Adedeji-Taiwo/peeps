'use client'

import {useContext} from 'react'
import { PeepContext, PeepContextType } from '@/context/peep.context'
import { Header, Table, UserSearch, UserFilter, Button, Overlay } from "@/components"
import FilterIcon from "../../public/assets/icons/FilterIcon"

export default function Home() {
    const {openFilter, setOpenFilter} = useContext(PeepContext) as PeepContextType;
  

  return (
    <>
      <Overlay openFilter={openFilter} setOpenFilter={setOpenFilter}/>
      <main className="w-full bg-bg font-inter flex flex-col justify-start items-start min-h-screen text-gray-700 lg:py-[-15px] lg:px-[102px] lg:gap-[112px] md:gap-[85px] gap-8 py-10 px-5">
      <Header />  
      <div className={`w-full flex md:flex-row md:items-center flex-col items-start md:justify-between md:gap-0 gap-6`}>
      <UserSearch />
      <span>OR</span>
      <Button type="button" onClick={() => setOpenFilter(true)} className='bg-primary'>
          <FilterIcon />
          <span className="lg:text-base text-sm text-primaryText font-extralight">Apply Filters</span>
      </Button>
      <UserFilter />
      </div>
      <Table />
    </main>
    </>
  )
}
