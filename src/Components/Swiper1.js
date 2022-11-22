import React from 'react'
// import {Link} from react
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const  Swiper1=()=> {
  const data=[
    {
      id:1,
      image:"http://www.dealnloot.com/wp-content/uploads/2017/11/PayTM-Mall-Get-35-Cashback-on-Rs-999-or-more-on-Daily-Essentials-products-.jpg"
    },
    {
      id:2,
      image:"https://www.super99.in/pub/media/slidebanner/f/l/flash_sale_mobile_banner_1.jpg"
    },
    {
      id:3,
      image:"https://pbs.twimg.com/media/E55yJ5LXoAAJI2Q.jpg"
    },
    {
      id:4,
      image:"https://www.dsgroup.com/front/img/dairy-img.png"
    },
  ]
  return (
    <div className='my-2 border-2'>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((d) => (
          <SwiperSlide key={d.id}>
            <div className="flex flex-col gap-5 justify-around md:flex-row  sm:mx-14 lg:mx-20 xl:mx-24 bg-gray-200 ">
              
                <img
                  className="object-cover w-full h-48 lg:h-96 "
                  src={d.image}
                  alt=""
                />

                
              </div>
              
        
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  )
}

export default Swiper1
