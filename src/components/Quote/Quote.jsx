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
        background: '#58595b',
        borderRadius: '50%',
        width: '40px', // Adjust width as needed
        height: '40px', // Adjust height as needed
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
        background: '#58595b',
        borderRadius: '50%',
        width: '40px', // Adjust width as needed
        height: '40px', // Adjust height as needed
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
    autoplaySpeed: 3000,
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
    <div className='px-4 mt-8'>
      <div className='quote-section pt-2 '>
        <div className='carousel-container w-full lg:w-[70%] mx-auto'>
          <Slider {...settings}>
            <div className='p-4'>
              <h1 className='text-center text-3xl font-extrabold text-[#58595b]'>Chairman’s Message</h1>
              <div className='slide'>
                <img src="./Quote/quote-1.webp" className='object-contain mx-auto' alt="Quote 1" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                <Link to={"/chairman-msg"}><ReadMoreButton /></Link>
              </div>
            </div>
            <div className='p-4'>
              <h1 className='text-center text-3xl font-extrabold text-[#58595b]'>MD & CEO’s Message</h1>
              <div className='slide'>
                <img src="./Quote/quote-2.webp" className='object-contain mx-auto' alt="Quote 2" />
              </div>
              <div className='flex justify-center mt-8 pb-4'>
                <Link to={"/ceo-msg"}><ReadMoreButton /></Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Quote;
