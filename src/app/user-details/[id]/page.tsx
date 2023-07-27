'use client'

import React, {useContext} from 'react'
import { PeepContext, PeepContextType } from '@/context/peep.context'
import {Profile} from '@/components/index'



const UserProfile = ({params}: {params: {id:string}}):JSX.Element => {
    const {userData} = useContext(PeepContext) as PeepContextType;
    const userDetail = userData?.filter(user => user.id.value === params.id)

  return (
    <><Profile userDetail={userDetail![0]} /></>
  )
}

export default UserProfile