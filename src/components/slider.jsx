import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    return (
        <div className="w-full flex items-center justify-center py-10 px-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper w-full h-80"
            >
                <SwiperSlide className="flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Slide 1
                    </h1>

                    <video autoPlay loop playsInline muted  src="https://data.openasset.com/3f741c2e/021dbbaf3cbf13fc044f82416ffa7da9/F_250519_gensler_city_pulse_2025_hero_mp4/F_250519_gensler_city_pulse_2025_hero_videolarge.mp4">

                    </video>

              
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Slide 2
                    </h1>

                    
                     <video autoPlay loop playsInline muted  src="https://data.openasset.com/3f741c2e/021dbbaf3cbf13fc044f82416ffa7da9/F_250519_gensler_city_pulse_2025_hero_mp4/F_250519_gensler_city_pulse_2025_hero_videolarge.mp4">

                    </video>
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Slide 3
                    </h1>

                     <video autoPlay loop playsInline muted  src="https://data.openasset.com/3f741c2e/021dbbaf3cbf13fc044f82416ffa7da9/F_250519_gensler_city_pulse_2025_hero_mp4/F_250519_gensler_city_pulse_2025_hero_videolarge.mp4">

                    </video>
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Slide 4
                    </h1>
 
                     <video autoPlay loop playsInline muted  src="https://data.openasset.com/3f741c2e/016157d05d7b0b938f172c4f269611a0/F_250401_Gensler_San_Francisco_Reel_2025_mp4/F_250401_Gensler_San_Francisco_Reel_2025_videolarge.mp4">

                    </video>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Slide 5
                    </h1>

                     <video autoPlay loop playsInline muted  src="https://data.openasset.com/3f741c2e/a63227216801fe631b141458e12ee6a9/F_250305_GPS_GenslerSF_Materials_Library_mp4/F_250305_GPS_GenslerSF_Materials_Library_videomedium.mp4">

                    </video>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}