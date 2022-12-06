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
        <>
            <p className="Title-Genres">Выбирите жанр</p>
            <Swiper
                spaceBetween={35}
                slidesPerGroup={1}
                className={"GenresSwiper"}
                navigation={true}
                modules={[Navigation]}
                breakpoints={ {
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    800:{
                        slidesPerView: 3,
                    },
                    1200:{
                        slidesPerView: 5,
                    }
                }}
            >
                {
                    genres.map(genre =>

                        <SwiperSlide key={genre.id} >
                            <a className="GenresSwiper-Slide" href='#'>
                                <p>{genre.name.charAt(0).toUpperCase()+genre.name.slice(1)}</p>
                            </a>
                        </SwiperSlide>

                    )
                }
            </Swiper>
        </>
    );
};

export default GenresFilms;