import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import axios from "axios";
import {Navigation, Pagination} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {like, sameMovie, unlike, watchLater} from "../../assets/img";
import {RateReview} from "@mui/icons-material";
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
                                breakpoints = {{
                                    320: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    480: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 30
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
                                        <a href="#">
                                            <img className='img'
                                                 src={`${urlImg}${i.poster_path}`}
                                                 alt="img"
                                            />
                                            <div className="HoverSlide">
                                                <div className="HoverSlide__action">
                                                    <div className="action-img">
                                                        <img title='Нравиться' src={like} alt="like"/>
                                                    </div>
                                                    <div className="action-img">
                                                        <img title='Не нравиться' src={unlike} alt="unlike"/>
                                                    </div>
                                                    <div className="action-img">
                                                        <a href="/#">
                                                            <img title='Похожие' src={sameMovie} alt="sameMovie"/>
                                                        </a>
                                                    </div>
                                                    <div className="action-img">
                                                        <img title='Посмотреть позже' src={watchLater} alt="watchLater"/>
                                                    </div>
                                                </div>
                                                <div className="HoverSlide__info">
                                                    <div className="HoverSlide__info-release">
                                                        <span className="rate">8</span>
                                                        <div className="properties">
                                                            2020,США,Боевик
                                                        </div>
                                                        <div className="duration">110мин</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
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