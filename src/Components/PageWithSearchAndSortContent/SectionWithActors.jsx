import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import axios from "axios";

const Actors = () => {
    const [actors, setActors] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=8ef3978391d5bf962188c41a2ab0b6d6&language=en-US&page=1`)
            .then(response => setActors(response.data.results))
    },[])
    return (
        <Swiper
            spaceBetween={35}
            slidesPerGroup={2}
            className={"Actors"}
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
                actors.map(actor =>
                    <SwiperSlide key={actor.id} className="Actors__Slide">
                        <div className="Actors__Slide-Item">

                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Actors;