'use client'

import React, { useState, useContext, useEffect } from 'react';
import { PeepContext, PeepContextType } from "@/context/peep.context"
import { Button } from '.';
import CancelIcon from '../../public/assets/icons/CancelIcon';

const UserFilter = () => {
  const {data, userData, setFilteredUsers, openFilter, setOpenFilter} = useContext(PeepContext) as PeepContextType;
  
  const [ageRange, setAgeRange] = useState<{ min: number; max: number }>({ min: 0, max: 100 });
  const [nationality, setNationality] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [allNationalities, setAllNationalities] = useState<string[] | null>(null); // get all nationalities to be rendered in dropdown


  //get all unique countries from data fetched
  useEffect(() => {
    // Function to extract unique values from an array
    const getUniqueValues = (arr: string[]) => {
      return Array.from(new Set(arr));
    };

    if (userData) {
      // Extracting unique nationalities
      const nationalitiesArr = userData.map((user) => user.location.country);
      setAllNationalities(getUniqueValues(nationalitiesArr));
    }
  }, [userData]);




  const handleFilterChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let filteredUsers = data?.results;
 

    // Filter by age range
    filteredUsers = filteredUsers?.filter(
      (user) => user.dob.age >= ageRange.min && user.dob.age <= ageRange.max
    );

    // Filter by nationality
    if (nationality) {
      filteredUsers = filteredUsers?.filter((user) => user.location.country === nationality);
    }

    // Filter by gender
    if (gender) {
      filteredUsers = filteredUsers?.filter((user) => user.gender === gender);
    }


    setFilteredUsers(filteredUsers);
    setOpenFilter(false);

    //reset
    setAgeRange({ min: 0, max: 100 });
    setNationality(null)
    setGender(null)
  };

  return (
    <form className={`flex flex-col items-center justify-start xl:gap-[30px] lg:gap-5 gap-4 rounded-[40px] bg-primary xl:px-12 lg:px-8 px-6 xl:py-9 lg:py-7 py-5 lg:w-2/5 md:w-3/5 w-[90%] z-[150] fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 transform transition-all ease-in-out duration-700  ${openFilter ? 'scale-[1]' : 'scale-0'}`} onSubmit={handleFilterChange}>
      <div className='flex flex-col items-center justify-center gap-0 w-full'>
        <CancelIcon onClick={() => setOpenFilter(false)}  />
        <h2 className='font-bold lg:text-xl md:text-lg text-base text-bg'>User Filter</h2>
       </div>

      <div className='flex flex-col items-start flex-wrap gap-6'>
      {/* Age Range Filter */}
      <div className='flex items-center gap-4'>
        <label className='text-bg normal lg:text-base text-xs'>Age Range:</label>
        <input
          type="number"
          inputMode='numeric'
          value={ageRange.min}
          onChange={(e) => setAgeRange({ ...ageRange, min: parseInt(e.target.value) })}
          className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm lg:max-w-[100px] max-w-[80px] placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-bg bg-transparent text-bg transition duration-300 focus:ring-1 focus:ring-primary"
        />
        <span className='text-bg font-normal lg:text-base text-xs'>to</span>
        <input
          type="number"
          value={ageRange.max}
          inputMode='numeric'
          onChange={(e) => setAgeRange({ ...ageRange, max: parseInt(e.target.value) })}
          className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm lg:max-w-[100px] max-w-[80px] placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-bg bg-transparent text-bg transition duration-300 focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className='flex md:flex-row flex-col md:items-center items-start md:gap-4 gap-6 w-full'>
         {/* Nationality Filter */}
         <div className='flex items-center gap-4 w-full'>
        <label className='text-bg font-normal lg:text-base text-xs'>Nationality:</label>
        <select
          value={nationality || ''}
          onChange={(e) => setNationality(e.target.value || null)}
          className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm lg:max-w-[100px] max-w-full placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-bg bg-transparent text-bg transition duration-300 focus:ring-1 focus:ring-primary"
        >
          <option value="">All</option>
          {allNationalities?.map(nat => (
            <option key={nat} value={nat}>{nat}</option>
          ))}
        </select>
      </div>

      {/* Gender Filter */}
      <div className='flex items-center gap-4 w-full'>
        <label  className='text-bg font-normal lg:text-base text-xs'>Gender:</label>
        <select value={gender || ''} onChange={(e) => setGender(e.target.value || null)}   className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-bg bg-transparent text-bg transition duration-300 focus:ring-1 focus:ring-primary">
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
     </div>

      <Button type="submit" className="mt-12 bg-bg">
          <span className="lg:text-base text-sm text-white font-medium">Apply Filters</span>
        </Button>
    </div>
    </form>
    
  );
};

export default UserFilter;
