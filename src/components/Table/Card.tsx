'use client'

import { User } from '@/types/userData';
import { shortId } from '@/utils/utils';
import { useRouter } from 'next/navigation';

const Card = ({ data }:{data:User}) => {
    const router = useRouter();

    return (
        <tr   key={data.login.uuid} className={`border-2 border-bgLight rounded-2xl cursor-pointer font-thin md:px-5 w-full hover:bg-bgLight`} onClick={() => router.push(`/user-details/${data.id.value}`)}>
           
            <td className='flex items-center lg:gap-6 gap-4 lg:px-6 md:px-4 pr-14 pl-4 lg:py-5 py-3 font-normal whitespace-normal'>
                <span className="lg:text-sm text-xs text-[#666]">
                    {shortId(data.id.name ? data.id.name : "BBC")}
                </span>
                <img className="w-full h-auto max-w-[48px] rounded-lg" src={data.picture.thumbnail} alt={data.name.first} />
              
            </td> 
        
            <td className="lg:px-6 px-4 lg:py-5 py-3 md:text-base text-sm text-white">
                {data.name.first} {data.name.last}   
            </td>  
            
            <td className="lg:px-6 px-4 lg:py-5 py-3 md:text-base text-sm text-[#DBFD51]">
                {data.email}
            </td>
            
            <td className="flex items-center gap-2 lg:px-6 px-4 lg:py-5 py-3 md:text-base text-sm text-white">
                <span>{data.location.city}</span>
            </td>
           
        </tr>
    )
}

export default Card