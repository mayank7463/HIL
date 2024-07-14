import React from 'react'

function Awards() {
  return (
    <div className='marginal '>
        <p className='text-2xl font-bold py-4'>Awards and Achievements</p>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
            <div className='w-[80%]'>
                <img src="./Awards/award-9.jpg" alt="" />
            </div>
            <div className='bg-[#f9f6f6] w-[75%] flex flex-col justify-center items-center p-8'>
                 <div className='flex justify-center gap-4'>
                     <div className='w-[30%]'>
                        <img src="./Awards/award-10.jpg" alt="" />
                     </div>
                     <div className='w-[30%]'>
                        <img src="./Awards/award-11.jpg" alt="" />
                     </div>
                 </div>
                 <div className='flex justify-center gap-4 mt-4'>
                     <div className='w-[30%]'>
                        <img src="./Awards/award-12.jpg" alt="" />
                     </div>
                     <div className='w-[30%]'>
                        <img src="./Awards/award-13.jpg" alt="" />
                     </div>
                 </div> 
            </div>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-2'>
            <div className='w-[65%]'>
                <img src="./Awards/award-1.jpg" alt="" />
            </div>
            <div className='w-[65%]'>
                <img src="./Awards/award-2.jpg" alt="" />
            </div>
            <div className='w-[65%]'>
                <img src="./Awards/award-3.jpg" alt="" />
            </div>
            <div className='w-[65%]'>
                <img src="./Awards/award-4.jpg" alt="" />
            </div>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-2'>
            <div className='w-[65%]'>
                <img src="./Awards/award-5.jpg" alt="" />
            </div>
            <div className='w-[65%]'>
                <img src="./Awards/award-6.jpg" alt="" />
            </div>
            <div className='w-[65%]'>
                <img src="./Awards/award-7.jpg" alt="" />
            </div>
            <div className='w-[65%]'>
                <img src="./Awards/award-8.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Awards
