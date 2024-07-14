import React from 'react';
import { motion } from 'framer-motion';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { Link } from 'react-router-dom';

const AwardsSection = () => {
  const awards = [
    { id: 1, imageUrl: './Awards/award-2.jpg', alt: 'Award 2' },
    { id: 2, imageUrl: './Awards/award-3.jpg', alt: 'Award 3' },
    { id: 3, imageUrl: './Awards/award-4.jpg', alt: 'Award 4' },
    { id: 4, imageUrl: './Awards/award-5.jpg', alt: 'Award 5' },
  ];

  return (
   <div className='mt-12'>
        <section className="py-12 px-4 md:px-8 bg-gray-100 my-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#58595b] text-center mb-8">Our Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={award.imageUrl}
                alt={award.alt}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <div className='flex justify-center pt-2'>
       <Link to={'/awards'}><ReadMoreButton/></Link>
    </div>
   </div>
  );
};

export default AwardsSection;
