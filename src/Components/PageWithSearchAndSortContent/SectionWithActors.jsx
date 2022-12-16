import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";
import {Autoplay} from "swiper";

const Actors = () => {
    const [actors, setActors] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=8ef3978391d5bf962188c41a2ab0b6d6&language=en-US&page=1`)
            .then(response => setActors(response.data.results))
    },[])
    return (
        <>
            <h1 className="Title-Genres">
                Актёры
            </h1>
            <Swiper
                spaceBetween={35}
                slidesPerGroup={1}
                className={"Actors"}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={ {

                    320: {
                        slidesPerView: 2,
                    },

                    480: {
                        slidesPerView: 3,
                    },

                    800: {
                        slidesPerView: 4,
                    },

                }}
            >
                {
                    actors.map(actor =>
                        actor.profile_path
                            ?
                            <SwiperSlide key={actor.id} className="Actors__Slide">
                                <a href="">
                                    <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt="img"/>
                                <p>{actor.name}</p>
                                </a>
                            </SwiperSlide>
                            :
                            <></>
                    )
                }
            </Swiper>
        </>
    );
};

export default Actors;