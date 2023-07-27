'use client'

import { createContext, useState, useEffect, useMemo } from "react";
import { UsersData, User } from "@/types/userData";




export interface PeepContextType {
    pageNum: number,
    setPageNum: React.Dispatch<React.SetStateAction<number>>,
    data: UsersData | undefined,
    setData: React.Dispatch<React.SetStateAction<UsersData | undefined>>,
    filteredUsers: User[] | undefined,
    userData: User[] | undefined,
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
}

export const PeepContext = createContext<PeepContextType | null>(null);


const PeepProvider = ({ children }: {children: React.ReactNode}) => {
    const [data, setData] = useState<UsersData | undefined>();
    const [pageNum, setPageNum] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    
  
    //filter list based on user search query
    const filteredUsers = data?.results.filter((user) => {
      const { first, last } = user.name;
      const fullName = `${first} ${last}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });
  
    //fetch user data
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://randomuser.me/api/?page=${pageNum}&results=10&seed=abc`);
          const json = await response.json();
  
          // Update the state with the fetched data
          setData(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [pageNum]); 


    
    //return all data if no search
    const userData = !filteredUsers ? data?.results : filteredUsers



    const values = useMemo(
        () => ({ 
            pageNum,
            setPageNum,
            data,
            setData,
            filteredUsers,
            searchQuery,
            setSearchQuery,
            userData
        }),
        [
            pageNum,
            setPageNum,
            data,
            setData,
            filteredUsers,
            searchQuery,
            setSearchQuery,
            userData,
        ])

    return (
        <PeepContext.Provider 
            value={values }
        >
            {children}
        </PeepContext.Provider>
    )
}

export default PeepProvider;