import React, {FC} from 'react'

type OverlayProp = {
    openFilter: boolean,
   setOpenFilter: (value: React.SetStateAction<boolean>) => void,
}


const Overlay:FC<OverlayProp> = ({openFilter, setOpenFilter}) => {

  return (
    <> 
        {openFilter && <div className={`bg-black opacity-50 fixed inset-0 w-full h-full z-60`} onClick={() => setOpenFilter(false)}></div>}
    </>
  )
}

export default Overlay;
