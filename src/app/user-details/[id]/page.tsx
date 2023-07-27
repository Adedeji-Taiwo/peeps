'use client'

import React, {useContext} from 'react'
import { PeepContext, PeepContextType } from '@/context/peep.context'
//import { useRouter } from 'next/router'
import {Profile} from '@/components/index'



const UserProfile = ():JSX.Element => {
    const {userData} = useContext(PeepContext) as PeepContextType;
    //const router = useRouter();

    const userDetail = userData?.filter(user => user.id.value === "1101776T")

  return (
    <><Profile userDetail={userDetail![0]} /></>
  )
}

export default UserProfile