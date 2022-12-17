import React, {useState} from 'react';
import Actors from "../Components/PageWithSearchAndSortContent/SectionWithActors";
import Reviews from "../Components/Reviews/ReviewsSwiper";





const Watch = () => {
    const urlImgPost = `https://image.tmdb.org/t/p/w300/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg`
    const urlback =`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg`
    const [text,setText] = useState(false)
    return (
        <section className={"AboutFilm"}>
            <div style={{backgroundImage:`url(${urlback})`}}  className="BackImage">
                <div className="WrapHead">
                    <div className="AboutFilm__Container">
                        <div className="Header__Containerr">
                            <div className="Header__Containerr-Content">
                                <div className="Wrapp__content">
                                    <div className="Poster">
                                        <img src={urlImgPost} alt="poster"/>
                                    </div>
                                    <div className="Info">
                                        <div className="Info__Content">
                                            <h1>Name Film</h1>
                                            <div className="Info__Content-Header">
                                        <span className="Info__Header-Item">
                                            12+
                                        </span>
                                                <span className="Info__Header-Item">
                                            Фентази
                                        </span>
                                                <span className="Info__Header-Item">
                                             12/17/2009 (UA)
                                        </span>
                                                <span className="Info__Header-Item">
                                            2h 42m
                                        </span>
                                            </div>
                                            <div className="Info__Content-Actions">
                                                <div className="Mark">
                                                    <div>Оценка <br/>пользователей:</div>
                                                    <div className={'SpanMark'}>85</div>
                                                </div>
                                                <div className="Action">
                                                    <ul className="Action__List">
                                                        <li className="Action__List-Item">a</li>
                                                        <li className="Action__List-Item">a</li>
                                                        <li className="Action__List-Item">a</li>
                                                        <li className="Action__List-Item">a</li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="Info__Content-Text">
                                                <div className={'Btn-Trailer'}>
                                                    <button className="Trailer">Cмотреть трейлер</button>
                                                </div>
                                                <h2 className="Tagline">слоган</h2>
                                                <h2 className="Overview">
                                                    Содержимое
                                                </h2>
                                                <p className={text  ? "About" : "About spec"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti deserunt error explicabo, ipsa, laudantium minima neque nobis nostrum optio porro praesentium, recusandae sapiente sunt tempore voluptates voluptatibus. Aliquid, commodi consectetur corporis doloremque ea laborum laudantium magni, modi nostrum perspiciatis quisquam quod repellendus tempore ullam voluptatem. Ex neque sunt voluptatem!</p>
                                                <p className={"Show"} onClick={() => setText(!text)}>{text ? "Закрыть" : "Развернуть"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Container_Watch">
                <Actors/>
            </div>
            <div className="Container_Watch">
                <Reviews/>
            </div>
        </section>
    );
};

export default Watch;