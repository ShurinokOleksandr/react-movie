import React from 'react';
import FooterColumn from "./FooterColumn";
import FooterSupport from "./FooterSupport";
import {all, tv} from "../../assets/img";
import HeaderLinks from "../Header/HeaderLinks";
import {NavLink} from "react-router-dom";

const Index = () => {
    const links = [' О компании','Вакансии',
        'Информация для партнёров',
        'Размещение рекламы',
        'Пользовательское соглашение',
        'Политика конфиденциальности']

    return (
        <footer className='Footer'>
            {/* footer screen > 1200px*/}
            <div className="Footer__container container">
                <div className="Footer__container-content">
                    <FooterColumn  links={links}/>
                    <FooterColumn  links={links}/>
                    <FooterSupport/>
                </div>
                <div className="Footer__container-content">
                    <div className="content-wrapper">
                        <div className="Download">
                            <a className='Download_Button' href="">
                                <img src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg" alt="img"/>
                                <div className='Download-text'>
                                    <div className='prevSpan'>
                                        Загрузить в
                                    </div>
                                    <div className='span'>
                                        APP STORE
                                    </div>
                                </div>
                            </a>
                            <a className='Download_Button' href="">
                                <img src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg" alt="img"/>
                                <div className='Download-text'>
                                    <div className='prevSpan'>
                                        Загрузить в
                                    </div>
                                    <div className='span'>
                                        GOOGLE PLAY
                                    </div>
                                </div>
                            </a>
                            <a className='Download_Button' href="">
                                <img  src={tv} alt="img"/>
                                <div className='Download-text'>
                                    <div className='prevSpan'>
                                        Загрузить в
                                    </div>
                                    <div className='span'>
                                        SMART TV
                                    </div>
                                </div>
                            </a>
                            <a className='Download_Button' href="">
                                <img src={all} alt="img"/>
                                <div className='Download-text'>
                                    <div className='span'>
                                        ВСЕ УСТРОЙСТВА
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="SocialMedia">
                            <a href="#" className="MediaLink">
                                <div className="MediaImg">
                                    <img src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg" alt="vk"/>
                                </div>
                            </a>
                            <a href="#" className="MediaLink">
                                <div className="MediaImg">
                                    <img src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg" alt="twitter"/>
                                </div>
                            </a>
                            <a href="#" className="MediaLink">
                                <div className="MediaImg">
                                    <img src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg" alt="viber"/>
                                </div>
                            </a>
                            <a href="#" className="MediaLink">
                                <div className="MediaImg">
                                    <img src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg" alt="linkedin"/>
                                </div>
                            </a>
                            <a href="#" className="MediaLink">
                                <div className="MediaImg">
                                    <img src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg" alt="telegram"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* footer screen < 1200px*/}
                <div className="Footer__Fixed">
                    <ul className="Fixed-links">
                        <li><NavLink to={"/react-movie"} className={({ isActive }) => isActive ? 'Fixed-link activeLink' : 'Fixed-link'}>Главная</NavLink></li>
                        <li><NavLink to={"films"} className={({ isActive }) => isActive ? 'Fixed-link activeLink' : 'Fixed-link'}>Фильмы</NavLink></li>
                        <li><NavLink to={"tv"} className={({ isActive }) => isActive ? 'Fixed-link activeLink' : 'Fixed-link'}>TV</NavLink></li>
                        <li><NavLink to={"anime"} className={({ isActive }) => isActive ? 'Fixed-link activeLink' : 'Fixed-link'}>Аниме</NavLink></li>
                        <li><NavLink to={"home"} className={({ isActive }) => isActive ? 'Fixed-link activeLink' : 'Fixed-link'}>Домашняя</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Index;