import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const SkeletonLoader = Array.from({ length: 10 }, (_, index) => {
    return <SkeletonTheme key={index} baseColor="#093029" highlightColor="#232939" height={70} width="100%">
      <p className='grid w-full'>
        <Skeleton count={1} />
      </p>
    </SkeletonTheme>;
  });


export default SkeletonLoader