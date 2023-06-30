"use client"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import img from '@/assets/austin-distel-wD1LRb9OeEo-unsplash.jpg'
import Image from "next/image";
const Works = () => {
    return (
        <div id="works">
           
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image src="@/assets/annie-spratt-QckxruozjRg-unsplash.jpg" alt="Description of the image" width={500} height={300} />
             </SwiperSlide>
        <SwiperSlide> <Image src={img} alt="slide"> </Image></SwiperSlide>
        <SwiperSlide> <Image src={img} alt="slide"> </Image></SwiperSlide>
        <SwiperSlide> <Image src={img} alt="slide"> </Image></SwiperSlide>
        <SwiperSlide> <Image src={img} alt="slide"> </Image></SwiperSlide>
        <SwiperSlide> <Image src={img} alt="slide"> </Image></SwiperSlide>
        <SwiperSlide><Image src={img} alt="slide"> </Image></SwiperSlide>
        
      </Swiper>
   
        </div>
    );
};

export default Works;