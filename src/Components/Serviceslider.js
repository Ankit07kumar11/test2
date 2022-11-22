import React from 'react'
// import {Link} from react
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Serviceslider = () => {

    const servicedata3 = [
        {
            id: 1,
            image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/11/22/2555799-2528227-income-tax.jpg",
            desc: "TDS Filing"
        },
        {
            id: 2,
            image: "https://www.riskpro.in/sites/default/files/styles/large/public/Picture5.jpg?itok=0rE0_Lg9",
            desc: "Concurrent Audit"
        },
        {
            id: 3,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Tax Audit"
        },

        {
            id: 4,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "FASSAI Registration"
        },
        {
            id: 5,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "PSARA License"
        },
        {
            id: 6,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Compliance Audit"
        },
        {
            id: 7,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Incorporation Of Public Company"
        },
        {
            id: 8,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Incorporation of Private"
        },
        {
            id: 9,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Incorporation of Nidhi Company"
        },
        {
            id: 10,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Incorporation of Producer"
        },
        {
            id: 11,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "FASSAI Incorporation of Producer"
        },
        {
            id: 12,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "APERA Registration"
        },
        {
            id: 13,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Startup India Registration"
        },

        {
            id: 14,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "MSME Registration"
        },

        {
            id: 15,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "GST Registration"
        },
        {
            id: 16,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "GST Return Filing"
        },
        {
            id: 17,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "NGO's Registration"
        },
        {
            id: 18,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Sec 80G & Sec 12AA"
        },
        {
            id: 19,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "Import Export Code"
        },
        {
            id: 20,
            image: "https://taxguru.in/wp-content/uploads/2020/06/Tax-Audit.jpg",
            desc: "ISO Certificate"
        },

    ]
    return (
        <>

            <div className="service2 flex flex-col">
                <span className=' text-slate-600 text-xl flex  justify-center'>Consultancy</span>
                <hr className='mx-20 bg-black h-0.5' />
            </div>

            <div className='my-2 border-2'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {servicedata3.map((sd3) => (
                        <SwiperSlide key={sd3.id}>
                            <div className="flex flex-col gap-5 justify-around md:flex-row  sm:mx-14 lg:mx-20 xl:mx-24 bg-gray-200 ">

                                <div className="flex">


                                    <div key={sd3.id} className=" mx-2 my-3 services h-46 w-36 flex flex-col border-2 bg-white">
                                        <img className='w-32 h-32 py-2 px-2' src={sd3.image} alt="" />
                                        <span className='whitespace-pre-wrap px-2 py-2 h-12'>{sd3.desc}</span>
                                    </div>


                                </div>

                            </div>


                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

export default Serviceslider
