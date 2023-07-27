'use client'

import React, {useContext} from 'react'
import { PeepContext, PeepContextType } from '@/context/peep.context'
import { useRouter } from 'next/router'
import {Profile} from '@/components/index'



const UserProfile = ():JSX.Element => {
    const {userData} = useContext(PeepContext) as PeepContextType;
    const router = useRouter();
    let id = router.pathname
    console.log(id)
    const userDetail = userData?.filter(user => user.id.value === id)

  return (
    <><Profile userDetail={userDetail} /></>
  )
}

export default UserProfile