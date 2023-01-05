import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardFilm from "./CardFilm";
import {Skeleton} from "@mui/material";

export const urlImg = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

const Index = ({fetchURL,text}) => {
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
            setLoading(false)
        })
    },[fetchURL])
    return (
        <section className="Section Section_styles">
            <div className="Section__container">
                <div className="Section__container-inner">
                    <div className="gallery home__gallery">
                        <div className="gallery__blockHeader">
                            <a href="#" className="blockHeader">
                                <h1  className="blockHeader__text">
                                    {text}
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
                                {loading ?
                                    [...new Array(6)].map((_,i) =>
                                        <SwiperSlide className="gallery__slide" key={i} >
                                            <Skeleton variant="rectangular" style={{borderRadius:'16px'}} width={220} height={340} />
                                        </SwiperSlide>
                                        )
                                    :
                                    movies.map(i =>
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