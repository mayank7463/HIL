import React from 'react';
import './CapSlider.css';
// import { a } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
const Capslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
   <div className='mt-16'>
         <motion.div initial={{ x:"30%", opacity: 0 }}
    whileInView={{x:0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}  className="marginal my-10">
      <p className='text-center text-3xl font-extrabold text-[#58595b] my-10'>Portfolio of Consumer Offerings</p>
      <div className="row">
        <Slider {...settings}>
          <div className="col-lg-4">
              <figure className='newsCard news-Slide-up fin-up'>
                <img src="./Capslider/caps-2.png"  alt="Roofing Solutions"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white font-extrabold m-0'>Roofing Solutions</h4>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
          </div>
          <div className="col-lg-4">
              <figure className='newsCard news-Slide-up fin-up'>
                <img src="./Capslider/caps-1.jpg"  alt="Building Solutions"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Building Solutions</h4>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
          </div>
          <div className="col-lg-4">
              <figure className='newsCard news-Slide-up fin-up'>
                <img src="./Capslider/caps-3.png"  alt="Pipes & Fittings"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Pipes & Fittings</h4>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
          </div>
          <div className="col-lg-4">
              <figure className='newsCard news-Slide-up fin-up'>
                <img src="./Capslider/caps-4.png"  alt="Construction Chemicals and Putty"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Construction Chemicals and Putty</h4>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
          </div>
          <div className="col-lg-4">
              <figure className='newsCard news-Slide-up fin-up'>
                <img src="./Capslider/caps-5.png"  alt="Flooring Solutions"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Flooring Solutions</h4>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
          </div>

          {/* Add more cards as needed */}
        </Slider>
      </div>
    </motion.div>
    <div className='flex justify-center pt-10'>
         <Link to={'/portfolio'}> <ReadMoreButton/></Link>
      </div>
   </div>
  );
};

export default Capslider;
