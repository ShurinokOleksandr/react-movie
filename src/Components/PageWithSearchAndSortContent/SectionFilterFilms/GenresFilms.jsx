import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import axios from "axios";

const GenresFilms = () => {
    const [genres, setGen] = useState([])
    useEffect(() => {
         axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=8ef3978391d5bf962188c41a2ab0b6d6&language=ru-RU`)
            .then(response => setGen(response.data.genres))
    },[])
    return (
            <Swiper
                spaceBetween={35}
                slidesPerGroup={2}
                className={"GenresSwiper"}
                navigation={true}
                modules={[Navigation]}
                breakpoints={ {
                    // when window width is >= 320px
                    320: {
                    slidesPerView: 2,
                },
                    // when window width is >= 480px
                    480: {
                    slidesPerView: 3,
                },
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 6,
                }
                }}
            >
                {
                    genres.map(genre =>
                        <SwiperSlide key={genre.id} className="GenresSwiper-Slide">
                            <p>{genre.name.charAt(0).toUpperCase()+genre.name.slice(1)}</p>
                        </SwiperSlide>
                        )
                }
            </Swiper>
    );
};

export default GenresFilms;