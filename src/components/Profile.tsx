'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { User } from '@/types/userData'
import Image from 'next/image'


const Profile = ({userDetail}: {userDetail: User | undefined}) => {
  const router = useRouter();

  return (
    <div className="bg-bg min-h-screen md:overflow-y-auto text-white">
  <div className="w-full text-white bg-bgLight">
        <div
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        </div>
    </div>

    <div className="container mx-auto my-5 p-5">
        <div className='flex justify-start items-center'>
            <span className='flex justify-center items-center text-white cursor-pointer' onClick={() => router.back()}>Back</span>
        </div>
        <div className="md:flex no-wrap md:-mx-2 mt-5">
            <div className="w-full md:w-3/12 md:mx-2">
                <div className="rounded-xl shadow-xl bg-bgLight p-3 border-t-4 border border-primary">
                    <div className="image overflow-hidden">
                        <Image 
                            width={100}
                            height={100}
                             src={userDetail!.picture.large}
                             alt="profile" 
                             className="h-auto w-full mx-auto"
                        />
                    </div>
                    <h1 className=" text-white font-bold text-xl leading-8 my-2">{`${userDetail?.name.first} ${userDetail?.name.last}`}</h1>
                    <h3 className="font-lg text-semibold leading-6 py-1">Age: {userDetail?.dob.age}</h3>
                    <ul
                        className=" bg-bgLight text-white hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                className=" bg-primary py-1 px-2 rounded text-bg text-sm">user</span></span>
                        </li>
                        <li className="flex items-center py-3">
                            <span>Member since</span>
                            <span className="ml-auto font-normal">{new Date(userDetail?.registered.date!).getFullYear()}</span>
                        </li>
                    </ul>
                </div>
                <div className="my-4"></div>
            </div>



            <div className="w-full md:w-9/12 lg:mx-2 h-64">
                <div className="rounded-lg shadow-xl bg-bgLight p-3">
                    <div className="flex items-center space-x-2 pl-3 font-semibold text-white leading-8">
                        <span className=" text-primary">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className=" tracking-wide  text-primary">About</span>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2 font-normal">{userDetail?.name.first}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2 font-normal">{userDetail?.name.last}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2 font-normal">{userDetail?.gender}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2 font-normal">{userDetail?.phone}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Current Address</div>
                                <div className="px-4 py-2 font-normal">{userDetail?.location.city}, {userDetail?.location.country}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className=" text-white font-normal">{userDetail?.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="my-4">
                    
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default Profile