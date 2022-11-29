import React from 'react';
import {HintMovie} from "../../assets/img";

const Modal = ({children,visible,setVisible}) => {
    let classRoot = ['Header__Modal']
    if (visible){
        classRoot.push('active')
    }
    return (
        <div className={classRoot.join(' ')}>
            <div className="Modal_Overlay">
                <div className="wrapper_overlay">
                    <div className="wrapper-content">
                        <div className="Modal-content">
                            <div className="wrapper__modal-title">
                                <div className="title__container">
                                    <h2>Поиск</h2>
                                    <div className="Modal-input">
                                        <input type="text" placeholder='Фильмы, персоны, жанры' className=""/>
                                        <button onClick={() => setVisible(false)} className="Close_Modal">Закрыть</button>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper__hints">
                                <div className="wrapper__hints-container">
                                    <div className="Hint__Flex">
                                        <div className="Modal__Hint">
                                            <a href="">
                                                <div className="Wrapper__Found">
                                                    <div className="Found-Img">
                                                        <img src={HintMovie} alt="movie" className="Hint__img"/>
                                                    </div>
                                                    <div className="Hint-About">
                                                        <h6 className="Hint__Title">fgfgdgdfgdfgdf</h6>
                                                        <p className="Hint__Year">2020</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="Modal__Hint">
                                            <a href="">
                                                <div className="Wrapper__Found">
                                                    <div className="Found-Img">
                                                        <img src={HintMovie} alt="movie" className="Hint__img"/>
                                                    </div>
                                                    <div className="Hint-About">
                                                        <h6 className="Hint__Title">adsgfdasfa</h6>
                                                        <p className="Hint__Year">2020</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="Modal__Hint">
                                            <a href="">
                                                <div className="Wrapper__Found">
                                                    <div className="Found-Img">
                                                        <img src={HintMovie} alt="movie" className="Hint__img"/>
                                                    </div>
                                                    <div className="Hint-About">
                                                        <h6 className="Hint__Title">Hint</h6>
                                                        <p className="Hint__Year">2020</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="Modal__Hint">
                                            <a href="">
                                                <div className="Wrapper__Found">
                                                    <div className="Found-Img">
                                                        <img src={HintMovie} alt="movie" className="Hint__img"/>
                                                    </div>
                                                    <div className="Hint-About">
                                                        <h6 className="Hint__Title">Hint</h6>
                                                        <p className="Hint__Year">2020</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="Modal__Hint">
                                            <a href="">
                                                <div className="Wrapper__Found">
                                                    <div className="Found-Img">
                                                        <img src={HintMovie} alt="movie" className="Hint__img"/>
                                                    </div>
                                                    <div className="Hint-About">
                                                        <h6 className="Hint__Title">Hint</h6>
                                                        <p className="Hint__Year">2020</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;