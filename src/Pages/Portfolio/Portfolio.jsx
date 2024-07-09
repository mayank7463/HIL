import React from 'react'

function Portfolio() {
  return (
    <div className='marginal'>
         <div>
             <p className='text-2xl font-bold py-4'>Portfolio of Consumer Offerings</p>
             <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div>
                        <p>Dedicated to being a
                        comprehensive provider of
                        home and building solutions,
                        we have a portfolio of trusted
                        brands that have built a strong
                        consumer connect. Our
                        commitment to design thinking
                        and product excellence meets
                        the evolving needs of our
                        consumers with an assurance
                        of superior quality and value.</p>
                </div>
                <div className='w-[90%]'>
                       <img src="./portfolio/port-1.jpg" alt="" />
                </div>
             </div>
             <div>
                  <img src="./portfolio/port-2.jpg" alt="" />
             </div>
             <div>
                  <img src="./portfolio/port-3.jpg" alt="" />
             </div>
             <div>
                  <img src="./portfolio/port-4.jpg" alt="" />
             </div>
             <div>
                  <img src="./portfolio/port-5.jpg" alt="" />
             </div>
             <div>
                  <img src="./portfolio/port-6.jpg" alt="" />
             </div>
         </div>
    </div>
  )
}

export default Portfolio
