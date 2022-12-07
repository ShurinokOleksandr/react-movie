import React, {useEffect, useState} from 'react';
import {api_key, urlImg} from "../SectionWithFilm";
import axios from "axios";
import {like, sameMovie, unlike, watchLater} from "../../assets/img";
import {Rating} from "@mui/material";

const ListOfFilms = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=1`)
            .then(res => setItems(res.data.results))

    },[])
    return (
        <>
        <section className="List">
            <div className="List__Container">
                <div className="List__Container-Block">
                    {items.map(item =>
                            <a key={item.id} href="#" className="Block__Item">
                                <div className="Block__Item-container">
                                    <div className="Img">
                                        <img src={`${urlImg}${item.poster_path}`} alt="img"/>
                                    </div>
                                    <div className="TitleFilm">
                                        <p className="title">{item.title}</p>
                                    </div>
                                </div>
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
                                            <div className="Wrap-Rate">
                            <span className="rate">
                                {item.vote_average}
                            </span>
                                                <Rating className={"stars"} name="half-rating-read" defaultValue={item.vote_average/2.3} precision={0.5} readOnly />
                                            </div>
                                            <div className="properties">
                                                {item.release_date}                                            </div>
                                            <div className="duration">110мин</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                </div>
                <div className="Download">
                    <div className="Download__Text">
                        Загрузить ещё
                    </div>
                </div>
            </div>
        </section>

        </>);
};

export default ListOfFilms;