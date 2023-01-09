import React from 'react';
import {like, sameMovie, unlike, watchLater} from "../../assets/img";
import {Rating} from "@mui/material";
import {urlImg} from "./index";
import {Link} from "react-router-dom";
const CardFilm = ({poster_path,vote_average,id}) => {

    return (
        <Link to={`/watch/${id}`}>
            <img className='img'
                 src={`${urlImg}${poster_path}`}
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
                        <Link to="#">
                            <img title='Похожие' src={sameMovie} alt="sameMovie"/>
                        </Link>
                    </div>
                    <div className="action-img">
                        <img title='Посмотреть позже' src={watchLater} alt="watchLater"/>
                    </div>
                </div>
                <div className="HoverSlide__info">
                    <div className="HoverSlide__info-release">
                        <div className="Wrap-Rate">
                            <span className="rate">
                                {vote_average}
                            </span>
                            <Rating className={"stars"} name="half-rating-read" defaultValue={vote_average/2.3} precision={0.5} readOnly />
                        </div>
                        <div className="properties">
                            2020,США,Боевик
                        </div>
                        <div className="duration">110мин</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardFilm;