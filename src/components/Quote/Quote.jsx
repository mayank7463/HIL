import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { Link } from 'react-router-dom';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-prev`}
      style={{
        ...style,
        display: 'block',
        background: '#f47732',
        borderRadius: '50%',
        width: '30px', // Adjust width as needed
        height: '30px', // Adjust height as needed
      }}
      onClick={onClick}
    >
      Prev
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-next`}
      style={{
        ...style,
        display: 'block',
        background: '#f47732',
        borderRadius: '50%',
        width: '30px', // Adjust width as needed
        height: '30px', // Adjust height as needed
      }}
      onClick={onClick}
    >
      Next
    </button>
  );
};


const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto px-12'>
      <div className='quote-section pt-2'>
        <div className="carousel-container">
          <Slider {...settings}>
            <div className='p-4'>
              <h1 className='text-center lg:text-5xl mb-4 font-bold text-[#f47732]'>Chairman’s Message</h1>
              <div className="slide">
                <img src="./Ceo/ceo-1.webp" className='object-contain mx-auto' alt="Quote 1" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                <Link to={"/chairman-msg"}> <ReadMoreButton/></Link>
              </div>
            </div>
            <div className=' p-4'>
              <h1 className='text-center lg:text-5xl mb-4 font-bold text-[#f47732]'>CEO’s Message</h1>
              <div className="slide">
                <img src="./Chairman/chair-1.webp" className='object-contain mx-auto' alt="Quote 2" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                <Link to={"/ceo-msg"}> <ReadMoreButton/></Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <img src="./Home/home_img-2.png" alt="Home" className='w-full ' />
      </div>
    </div>
  );
};

export default Quote;
