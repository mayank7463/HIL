import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./HeroSection/video.webm"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-15"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full text-right text-white p-4 ml-auto pr-12">
       <div className='flex flex-col items-start'>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Enabling the Future</h1>
          <p className="text-xl md:text-2xl mb-6">HIL Limited Annual Report 2023-24</p>
          <a href="https://hil.in/wp-content/uploads/2024/07/HIL-Annual-Report-FY-2023-24.pdf">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download Full Report
          </button>
        </a>
       </div>
      </div>
    </div>
  );
};

export default HeroSection;
