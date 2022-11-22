import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";
import {Navigation, Pagination} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Index = () => {

    const [items,setItems] = useState([])
    const api_key ='8ef3978391d5bf962188c41a2ab0b6d6'
    const urlImgCoursel = ``
    const urlImg = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

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
                                <div  className="blockHeader__text">
                                    <p>Рекомендуемо к просмотру</p>
                                </div>
                            </a>
                        </div>
                        <div className="gallery__carousel">
                            <Swiper
                                slidesPerView={4.5}
                                spaceBetween={30}
                                slidesPerGroup={2}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: true,
                                    disableOnInteraction: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="gallery__swiper"
                            >
                                {items.map(i =>
                                    <SwiperSlide className="Gallery__slide" key={i.id} >
                                        <a href="#"><img src={`${urlImg}${i.poster_path}`} alt="img"/></a>
                                    </SwiperSlide>)}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;