import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { Link } from 'react-router-dom';

function AboutHil() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className='mt-16'>
      <div className='py-12 px-6 bg-gray-50'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <p className='text-center text-3xl font-extrabold text-[#58595b] mb-8'>
            About HIL
          </p>
        </motion.div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 items-center'>
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }} 
            animate={imageInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
            className='w-full max-w-lg mx-auto'
          >
            <img 
              src="./AboutHil/hil-1.jpg" 
              alt="HIL" 
              className='rounded-lg shadow-lg'
            />
          </motion.div>
          <motion.div 
            ref={textRef}
            initial={{ opacity: 0, x: 50 }} 
            animate={textInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
            className='max-w-lg mx-auto'
          >
            <p className='text-gray-700 text-xl font-medium'>
              HIL, for over seven decades, has been a trusted leader in the Home and Building solutions industry. We offer sustainable products and innovative solutions to meet the evolving needs of consumers worldwide. At HIL, our consumer obsession and sharp market insights power our innovation funnel, enabling us to deliver differentiated products.
            </p>
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
          <Link to={'/about'}><ReadMoreButton /></Link>
      </div>
    </div>
  );
}

export default AboutHil;
