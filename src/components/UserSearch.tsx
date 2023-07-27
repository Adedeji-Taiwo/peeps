'use client'

import { useContext } from "react"
import { PeepContext, PeepContextType } from "@/context/peep.context"
import SearchIcon from '@/utils/SearchIcon'

const UserSearch = ():JSX.Element => {
    const {searchQuery, setSearchQuery} = useContext(PeepContext) as PeepContextType;
  
  return (
    <div className="relative flex items-center justify-start">
      <div className="absolute inset-y-0 right-0 flex items-center xl:pr-7 lg:rp-4 pr-3 pointer-events-none">
      <SearchIcon />
    </div>
    <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-[#333] bg-bgLight text-white transition duration-300 focus:ring-1 focus:ring-primary"
      />
  </div>
  );
};

export default UserSearch;
