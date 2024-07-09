import React from 'react'

function Awards() {
  return (
    <div className='marginal'>
        <p className='text-2xl font-bold py-4'>Awards and Achievements</p>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
            <div>
                <img src="./Awards/award-1.jpg" alt="" />
            </div>
            <div>
                 <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                     <div className='w-[65%]'>
                        <img src="./Awards/award-2.jpg" alt="" />
                     </div>
                     <div className='w-[65%]'>
                        <img src="./Awards/award-3.jpg" alt="" />
                     </div>
                 </div>
                 <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                     <div className='w-[65%]'>
                        <img src="./Awards/award-4.jpg" alt="" />
                     </div>
                     <div className='w-[65%]'>
                        <img src="./Awards/award-5.jpg" alt="" />
                     </div>
                 </div> 
            </div>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Awards
