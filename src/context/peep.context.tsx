'use client'

import { createContext, useState, useEffect, useMemo } from "react";
import { UsersData, User } from "@/types/userData";




export interface PeepContextType {
    pageNum: number,
    setPageNum: React.Dispatch<React.SetStateAction<number>>,
    data: UsersData | undefined,
    setData: React.Dispatch<React.SetStateAction<UsersData | undefined>>,
    filteredUsers: User[] | undefined,
    setFilteredUsers: React.Dispatch<React.SetStateAction<User[] | undefined>>,
    userData: User[] | undefined,
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    openFilter: boolean,
    setOpenFilter: (value: React.SetStateAction<boolean>) => void,
}

export const PeepContext = createContext<PeepContextType | null>(null);


const PeepProvider = ({ children }: {children: React.ReactNode}) => {
    const [data, setData] = useState<UsersData | undefined>();
    const [pageNum, setPageNum] = useState<number>(1);
    const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    

  
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


    //search functionality
    useEffect(() => {
      // Function to filter users based on search query
      const filterUsers = () => {
        if (data) {
          const filteredUsers = data.results.filter((user) => {
            const { first, last } = user.name;
            const fullName = `${first} ${last}`.toLowerCase();
            return fullName.includes(searchQuery.toLowerCase());
          });
          setFilteredUsers(filteredUsers);
        }
      };
  
      filterUsers();
    }, [searchQuery, data]);


    
    //return all data if no search
    const userData = !filteredUsers ? data?.results : filteredUsers



    const values = useMemo(
        () => ({ 
            pageNum,
            setPageNum,
            data,
            setData,
            filteredUsers,
            setFilteredUsers,
            searchQuery,
            setSearchQuery,
            userData,
            openFilter, 
            setOpenFilter
        }),
        [
            pageNum,
            setPageNum,
            data,
            setData,
            filteredUsers,
            setFilteredUsers,
            searchQuery,
            setSearchQuery,
            userData,
            openFilter, 
            setOpenFilter
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