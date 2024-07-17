import React from 'react'

function FinancialHigh() {
  return (
    <div className='marginal'>
        <div className=''>
            <p className='text-2xl  font-bold py-4'>Financial Highlights</p>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8'>
                <div>
                    <p className='text-xl  font-bold py-4'>Consolidated</p>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div>
                            <img src="./Financial/financial-1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="./Financial/financial-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-xl  font-bold py-4'>Standalone</p>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div>
                            <img src="./Financial/financial-3.jpg" alt="" />
                        </div>
                        <div>
                            <img src="./Financial/financial-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinancialHigh
