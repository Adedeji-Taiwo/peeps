'use client'

import React from 'react'
import ArrowLeft from '@/utils/ArrowLeft'
import { useRouter } from 'next/router'
import { User } from '@/types/userData'


const Profile = ({userDetail}: {userDetail: User[] | undefined}) => {
  const router = useRouter();

  return (
    <div className="bg-bg h-full md:overflow-y-auto text-white">
  <div className="w-full text-white bg-bgLight">
        <div
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        </div>
    </div>

    <div className="container mx-auto my-5 p-5">
        <div className='flex justify-start items-center'>
            <span className='flex justify-center items-center' onClick={() => router.back()}><ArrowLeft /></span>
        </div>
        <div className="md:flex no-wrap md:-mx-2 mt-5">
            <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white rounded-xl shadow-xl dark:bg-gray-800 p-3 border-t-4 border-orange-600 dark:border-orange-500">
                    <div className="image overflow-hidden">
                        <img className="h-auto w-full mx-auto"
                            src=""
                            alt="profile" />
                    </div>
                    <h1 className=" text-gray-700 dark:text-gray-200 font-bold text-xl leading-8 my-2">RICHARD FAMOJURO</h1>
                    <h3 className="font-lg text-semibold leading-6 py-1">Owner at LIVINGSTONE IT CONSULTANCY</h3>
                    <p className="text-sm  text-gray-500 dark:text-gray-400 leading-6 pb-3">Expert in Finance/Banking platforms, Defi, Smart contracts (Solidity), Cross-blockchain protocols, Yielding/Farming, Staking protocols, NFT’s, Digital wallet, token creation, Decentralised Applications (DAPPS) and end-to-end frontend/backend integration.</p>
                    <ul
                        className=" bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-500 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                className=" bg-orange-500 py-1 px-2 rounded text-white text-sm">Admin</span></span>
                        </li>
                        <li className="flex items-center py-3">
                            <span>Member since</span>
                            <span className="ml-auto">Nov 07, 2021</span>
                        </li>
                    </ul>
                </div>
                <div className="my-4"></div>
            </div>



            <div className="w-full md:w-9/12 lg:mx-2 h-64">
                <div className="bg-white rounded-lg shadow-xl dark:bg-gray-800 p-3">
                    <div className="flex items-center space-x-2 pl-3 font-semibold text-gray-900 leading-8">
                        <span className=" text-orange-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className=" tracking-wide  text-orange-500">About</span>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2">Richard</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2">Famojuro</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2">Male</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">+44 7904 805276</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Current Address</div>
                                <div className="px-4 py-2">4 Blakesley Avenue, Ealing, London</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Permanent Address</div>
                                <div className="px-4 py-2">Ealing, London, United Kingdom</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className=" text-gray-500 dark:text-gray-400" href="mailto:engagewithme007@gmail.com">engagewithme007@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              

                <div className="my-4">
                    
                </div>

                <div className="bg-white rounded-lg shadow-xl dark:bg-gray-800 p-5">

                    <div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center text-orange-500 space-x-2 font-semibold leading-8 mb-3">
                                <span>
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Experience</span>
                            </div>
                            <ul className="list-inside space-y-3">
                                <li>
                                    <div>Blockchain Consultant at Livingstone IT</div>
                                    <div className="text-sm  text-gray-500 dark:text-gray-400">Nov 2021 - Present</div>
                                </li>
                                <li>
                                    <div>Lead Developer at Great Light Consultant</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400" >Jan 2020 - Oct 2021</div>
                                </li>
                                <li>
                                    <div>Full Stack Developer at M & J Consultancy Ltd</div>
                                    <div className="text-sm  text-gray-500 dark:text-gray-400">Aug 2018 - Dec 2019</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex text-orange-500 items-center space-x-2 font-semibold leading-8 mb-3">
                                <span>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className='text-orange-500' fill='#ff5a1f'><path d="M22 9.74l-2 1.02v7.24c-1.007 2.041-5.606 3-8.5 3-3.175 0-7.389-.994-8.5-3v-7.796l-3-1.896 12-5.308 11 6.231v8.769l1 3h-3l1-3v-8.26zm-18 1.095v6.873c.958 1.28 4.217 2.292 7.5 2.292 2.894 0 6.589-.959 7.5-2.269v-6.462l-7.923 4.039-7.077-4.473zm-1.881-2.371l9.011 5.694 9.759-4.974-8.944-5.066-9.826 4.346z"/></svg>
                                </span>
                                <span className="tracking-wide">Education</span>
                            </div>
                            <ul className="list-inside space-y-3">
                                <li>
                                    <div className="text-orange500">Postgraduate in Mathematics, Bangor University</div>
                                    <div className="text-xs">Sept 2011 - Jul 2012</div>
                                </li>
                                <li>
                                    <div className="text-orange500">Bachelors Degree, Bangor University</div>
                                    <div className="text-xs">March 2008 - Jan 2011</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default Profile