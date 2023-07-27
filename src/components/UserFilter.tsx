'use client'

import React, { useState, useContext, useEffect } from 'react';
import { PeepContext, PeepContextType } from "@/context/peep.context"



const UserFilter = () => {
  const {data, userData, setFilteredUsers} = useContext(PeepContext) as PeepContextType;
  
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




  const handleFilterChange = () => {
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

    //reset
    setAgeRange({ min: 0, max: 100 });
    setNationality(null)
    setGender(null)
  };

  return (
    <div className='flex flex-col items-start flex-wrap gap-6'>
      {/* Age Range Filter */}
      <div className='flex items-center gap-4'>
        <label className='text-white font-thin lg:text-base text-xs'>Age Range:</label>
        <input
          type="number"
          inputMode='numeric'
          value={ageRange.min}
          onChange={(e) => setAgeRange({ ...ageRange, min: parseInt(e.target.value) })}
          className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm lg:max-w-[100px] max-w-[80px] placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-[#333] bg-bgLight text-white transition duration-300 focus:ring-1 focus:ring-primary"
        />
        <span className='text-white font-thin lg:text-base text-xs'>to</span>
        <input
          type="number"
          value={ageRange.max}
          inputMode='numeric'
          onChange={(e) => setAgeRange({ ...ageRange, max: parseInt(e.target.value) })}
          className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm lg:max-w-[100px] max-w-[80px] placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-[#333] bg-bgLight text-white transition duration-300 focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className='flex items-center gap-4'>
         {/* Nationality Filter */}
      <div>
        <label className='text-white font-thin lg:text-base text-xs mb-4'>Nationality:</label>
        <select
          value={nationality || ''}
          onChange={(e) => setNationality(e.target.value || null)}
          className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm lg:max-w-[100px] max-w-[80px] placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-[#333] bg-bgLight text-white transition duration-300 focus:ring-1 focus:ring-primary"
        >
          <option value="">All</option>
          {allNationalities?.map(nat => (
            <option key={nat} value={nat}>{nat}</option>
          ))}
        </select>
      </div>

      {/* Gender Filter */}
      <div>
        <label  className='text-white font-thin lg:text-base text-xs mb-4'>Gender:</label>
        <select value={gender || ''} onChange={(e) => setGender(e.target.value || null)}   className="lg:px-6 lg:py-4 px-[18px] py-3 text-sm placeholder:font-thin placeholder:text-white focus:outline-none block w-full rounded-2xl border border-[#333] bg-bgLight text-white transition duration-300 focus:ring-1 focus:ring-primary">
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
     </div>

      <button className="flex items-center lg:gap-[10px] gap-[7.5px] lg:py-3 lg:px-6 py-2 px-[18px] bg-primary rounded-[40px] lg:text-base text-sm text-primaryText font-extralight hover:bg-opacity-80 " onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default UserFilter;
