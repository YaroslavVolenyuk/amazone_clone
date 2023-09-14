import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import sliderImg_1 from '../images/slider/sliderImg_1.jpg';
import sliderImg_2 from '../images/slider/sliderImg_2.jpg';
import sliderImg_3 from '../images/slider/sliderImg_3.jpg';
import sliderImg_4 from '../images/slider/sliderImg_4.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          {' '}
          <Image src={sliderImg_1} alt="slider1" />
        </div>
        <div>
          {' '}
          <Image src={sliderImg_2} alt="slider2" />
        </div>
        <div>
          {' '}
          <Image src={sliderImg_3} alt="slider3" />
        </div>
        <div>
          {' '}
          <Image src={sliderImg_4} alt="slider3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
