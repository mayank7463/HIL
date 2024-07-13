import React from 'react'

function Polytech() {
  return (
    <div className='marginal my-4'>
          <p className='text-2xl font-bold py-4'>Crestia Polytech (Topline)
          Acquisition</p>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-8 bg-[#ecede8]  p-8'>
            <div>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                        <div>
                          <p>In April 2024, we successfully acquired Crestia Polytech Private
                                Limited (Crestia) and its four group companies under the brand
                                ‘Topline’. Acquiring this renowned brand of Pipes and Fittings
                                in Eastern India has enhanced our product portfolio in the PVC
                                polymer sector. The acquisition brings under our umbrella three
                                flagship brands: Topline, Rockwell, and Soniplast. The total deal
                                consideration was on a debt-free, cash-free basis. </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <p className='text-2xl font-bold'>265</p>
                                <p><span className='bg-[#c4c5c5]'>Cost of acquisition</span> <br/>
                                    (₹ in Crore)</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src="./Polytech/polytech-1.jpg" alt="" />
                    </div>
            </div>
            <div className='my-8 p-4'>
                <p className='text-3xl font-bold py-4'>Why this Acquisition?</p>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                    <div className='w-[80%]'>
                        <img src="./Polytech/polytech-2.jpg" alt="" />
                    </div>
                    <div className='w-[80%]'>
                        <img src="./Polytech/polytech-6.jpg" alt="" />
                    </div>
                    <div className='w-[80%]'>
                        <img src="./Polytech/polytech-4.jpg" alt="" />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-4'>
                    <div>
                        <img src="./Polytech/polytech-5.jpg" alt="" />
                    </div>
                    <div>
                        <img src="./Polytech/polytech-3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="./Polytech/polytech-7.jpg" alt="" />
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Polytech
