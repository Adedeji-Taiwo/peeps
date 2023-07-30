'use client'

import React, { useState, useContext, useEffect } from 'react';
import { PeepContext, PeepContextType } from "@/context/peep.context"
import { Button } from '.';


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
        <svg onClick={() => setOpenFilter(false)} className='lg:w-[18px] lg:h-[18px] w-3 h-3 self-end cursor-pointer' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41285 17.0471L11.4464 13.0136L15.4799 17.0471L17.0484 15.4785L13.0149 11.445L17.0484 7.41151L15.4799 5.84293L11.4464 9.87643L7.41285 5.84293L5.84427 7.41151L9.87777 11.445L5.84427 15.4785L7.41285 17.0471ZM11.4464 22.6492C9.89644 22.6492 8.4399 22.3549 7.07673 21.7663C5.71356 21.1777 4.52778 20.3796 3.51941 19.372C2.51103 18.3636 1.71292 17.1778 1.12508 15.8146C0.537231 14.4515 0.242934 12.9949 0.242188 11.445C0.242188 9.8951 0.536484 8.43856 1.12508 7.07539C1.71367 5.71221 2.51178 4.52644 3.51941 3.51806C4.52778 2.50969 5.71356 1.71158 7.07673 1.12373C8.4399 0.535888 9.89644 0.241592 11.4464 0.240845C12.9963 0.240845 14.4528 0.535141 15.816 1.12373C17.1792 1.71233 18.3649 2.51044 19.3733 3.51806C20.3817 4.52644 21.1802 5.71221 21.7688 7.07539C22.3573 8.43856 22.6513 9.8951 22.6505 11.445C22.6505 12.9949 22.3562 14.4515 21.7676 15.8146C21.179 17.1778 20.3809 18.3636 19.3733 19.372C18.3649 20.3803 17.1792 21.1788 15.816 21.7674C14.4528 22.356 12.9963 22.6499 11.4464 22.6492ZM11.4464 20.4083C13.9486 20.4083 16.0681 19.54 17.8047 17.8034C19.5414 16.0667 20.4097 13.9473 20.4097 11.445C20.4097 8.94275 19.5414 6.82329 17.8047 5.08665C16.0681 3.35 13.9486 2.48168 11.4464 2.48168C8.94409 2.48168 6.82464 3.35 5.08799 5.08665C3.35134 6.82329 2.48302 8.94275 2.48302 11.445C2.48302 13.9473 3.35134 16.0667 5.08799 17.8034C6.82464 19.54 8.94409 20.4083 11.4464 20.4083Z" fill="#000"/>
        </svg>
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
