import React from 'react';
import {HintMovie} from "../../assets/img";
import {Link} from "react-router-dom";

const FoundFilm = ({name,title,release_date,first_air_date}) => {
    return (
        <div className="Modal__Hint">
            <Link className="Modal__Hint-Link" to="#">
                <span className="Wrapper__Found">
                    <span className="Found-Img">
                        <img src={HintMovie} alt="movie" className="Hint__img"/>
                    </span>
                    <span className="Hint-About">
                        <h6 className="Hint__Title">{title || name}</h6>
                        <p className="Hint__Year">{release_date || first_air_date}</p>
                    </span>
                </span>
            </Link>
        </div>
    );
};

export default FoundFilm;