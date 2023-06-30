'use client'

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import data from '@/assets/fakedata.json'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    
        console.log(data?.testimonials);
    return (
        <section className="bg-purple-100">
          <p className="text-5xl font-bold text-center font-mono p-5 text-black mb-5  mt-10">
       What Our Client Says
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimPurple text-black mb-10"></h1>

   
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    
  {
   data?.testimonials?.map(r=><SwiperSlide key={r._id} r={r}>

        <div className="m-24 text-center">
        <Rating className=" mx-auto my-10"
  style={{ maxWidth: 180 }}
  value={r.rating}
  readOnly
/>
            <p className="text-black font-serif">{r?.testimonial}</p>
            <p className="text-center text-2xl text-black font-mono">{r?.name}</p>
            <p className="text-center text-2xl dimBlack font-sans">{r?.occupation}</p>
        </div>
    </SwiperSlide>)
  }
  </Swiper>
    </section>
    );
};

export default Testimonials;