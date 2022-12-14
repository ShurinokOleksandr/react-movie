import React from 'react';



const Watch = () => {
    const urlImgPost = `https://image.tmdb.org/t/p/w300/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg`
    const urlback =`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg`

    return (
        <section style={{backgroundImage:`url(${urlback})`}}  className={"AboutFilm"}>
            <div  className="grad">
                <div className="AboutFilm__Container">
                    <div className="Header__Container">
                        <div className="Header__Container-Content">
                            <div className="Wrapp__content">
                                <div className="Poster">
                                    <img src={urlImgPost} alt="poster"/>
                                </div>
                                <div className="Info">
                                    <div className="Info__Content">
                                        <h1>Name Film</h1>
                                        <div className="Info__Content-Header">
                                        <span className="Info__Header-Item">
                                            12+ •
                                        </span>
                                            <span className="Info__Header-Item">
                                            Фентази
                                        </span>
                                            <span className="Info__Header-Item">
                                            • 12/17/2009 (UA) •
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
                                            <div >
                                                <button className="Trailer">Cмотреть трейлер</button>
                                            </div>
                                            <h2 className="Tagline">слоган</h2>
                                            <h2 className="Overview">
                                                Overview
                                            </h2>
                                            <p className="About">lorem100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Watch;