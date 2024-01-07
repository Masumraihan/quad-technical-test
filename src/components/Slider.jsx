/* eslint-disable react/prop-types */


import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ items, title, slideDelay, handleOpenForm }) => {
    const [swiperRef, setSwiperRef] = useState(null);
    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold my-3">
                    {title}
                </h2>
                <div className="flex items-center">
                    <button title="click for add product" onClick={handleOpenForm} className="text-primary inline-flex items-center mr-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        Add More</button>
                    <button title="click for see previous products" onClick={prevHandler}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>

                    <button title="click for see next products" onClick={nextHandler}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                breakpoints={{
                    340: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: slideDelay,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop
                onSwiper={(swiper) => setSwiperRef(swiper)}
                className="mySwiper"
            >

                <>
                    {
                        !items?.length ?
                            <>
                                {
                                    [1, 2, 3, 4, 5].map(cr => <SwiperSlide key={cr}>
                                        <Skeleton baseColor="#f99f1c4d" className="w-[108px] h-[71px] md:w-[165px] lg:w-[247px] md:h-[109px] lg:h-[168px]" />
                                        <Skeleton baseColor="#f99f1c4d" className="mt-2" />
                                    </SwiperSlide>)
                                }
                            </> :
                            items?.map(item => <SwiperSlide key={item.Id}>
                                <>
                                    <div className="max-w-[108px] max-h-[71px] md:max-w-[165px] lg:max-w-[247px] md:max-h-[109px] lg:max-h-[168px] rounded-lg overflow-hidden">
                                        <img src={item?.ImageUrl} alt={`${item?.Name} image `} loading="lazy" className="rounded-lg custom-shadow inset-1" />
                                    </div>
                                    <h3 className="text-xl text-center mt-2">{item?.Name}</h3>
                                </>
                            </SwiperSlide>)
                    }
                </>

            </Swiper>

        </>
    );
};

export default Slider;