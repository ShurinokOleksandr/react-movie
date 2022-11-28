// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import {sw1, sw2, sw3, sw4} from "../../assets/img";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
    const [per,setPer] = useState([])
    const api_key ='8ef3978391d5bf962188c41a2ab0b6d6'
    const urlImg = 'https://image.tmdb.org/t/p/w1280'
    useEffect(  () => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=1`)
            .then(res => setPer(res.data.results))
    },[])

    return (

        <div className='Swiper__Container'>
            <Swiper
                slidesPerView={1.25}
                spaceBetween={30}
                initialSlide={1}
                centeredSlides={true}
                observeParents={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    per.map(i =>
                    <SwiperSlide key={i.id} className='swiper_slide'>
                        <a href="#">
                        <img src={`${urlImg}${i.backdrop_path}`} alt="img"/>
                    </a>
                    </SwiperSlide>
                    )
                }


                {/*<SwiperSlide className='swiper_slide'>*/}
                {/*    <img src={sw1} alt="img"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide className='swiper_slide'>*/}
                {/*    <img src={sw2} alt="img"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide className='swiper_slide'>*/}
                {/*    <img src={sw3} alt="img"/>*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide className='swiper_slide'>*/}
                {/*    <img src={sw4} alt="img"/>*/}
                {/*</SwiperSlide>*/}
            </Swiper>
        </div>
    );
}
