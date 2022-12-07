import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import axios from "axios";
import {Navigation, Pagination} from "swiper";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardFilm from "./CardFilm";
    export const api_key ='8ef3978391d5bf962188c41a2ab0b6d6'
export const urlImg = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

const Index = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=1`)
            .then(res => setItems(res.data.results))

    },[])

    return (
        <section className="Section Section_styles">
            <div className="Section__container">
                <div className="Section__container-inner">
                    <div className="gallery home__gallery">
                        <div className="gallery__blockHeader">
                            <a href="#" className="blockHeader">
                                <h1  className="blockHeader__text">
                                    Рекомендуемо к просмотру
                                </h1>
                            </a>
                        </div>
                        <div className="gallery__carousel">
                            <Swiper
                                breakpoints = {{
                                    320: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    480: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 35
                                    },
                                    640: {
                                        slidesPerView: 3,
                                    },
                                    850:{
                                        slidesPerView:3.5
                                    },
                                    1067:{
                                        slidesPerView:4
                                    }
                                }}
                                slidesPerGroup={2}
                                navigation
                                modules={[Pagination, Navigation]}
                                className="gallery__swiper"
                            >
                                {items.map(i =>
                                    <SwiperSlide className="gallery__slide" key={i.id} >
                                        <CardFilm {...i}/>
                                    </SwiperSlide>
                                )
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;