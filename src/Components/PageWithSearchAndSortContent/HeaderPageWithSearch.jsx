import React, {useState} from 'react';
import {arrow} from "../../assets/img";

const HeaderPageWithSearch = ({title,page}) => {
    const [text,setText] = useState(false)

    const sideLeft= () => {
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 200
    }
    const sideRight= () => {
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 200
    }
    return (
        <div className="Films__Header">
            <div className="Films__Header-container">
                <div className="Wrapper__Content">
                    {/*Title*/}
                    <div className="Content__Info">
                        <div className="Content__Info-Container">
                            <div className="Title">
                                <h1>{title}</h1>
                            </div>
                            <div className="About">
                                <div className="About-container">
                                    <p className={text ? 'text' : 'text spec'}>{page}</p>
                                    {text && (
                                        <>
                                            <p className='text'>{page}</p>
                                            <p className='text'>{page}</p>
                                            <p className='text'>{page}</p>
                                        </>
                                    )
                                    }
                                </div>
                                <span className="Show-text" onClick={() => setText(!text)}>{text ? "Закрыть" :"Развернуть" }</span>
                            </div>
                        </div>
                    </div>
                    {/*<div   className="Wrapper__suggestion suggestion">*/}
                    {/*    <div className="Wrapper__suggestion-container">*/}
                    {/*        <ul id={'slider'} className="Suggestion__List">*/}
                    {/*            <div className='LeftArrow'  onClick={sideLeft}><img src={arrow} alt="arrow"/></div>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">423dsfsdfsdfdsfdsf24</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">42324</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="Suggestion__List-Item">*/}
                    {/*                <a  href="">423dsfsdfsdfdsfdsf24</a>*/}
                    {/*            </li>*/}
                    {/*            <div onClick={sideRight}><img className="RightArrow" src={arrow} alt="arrow"/></div>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* sort   */}
                </div>
            </div>
        </div>
    );
};

export default HeaderPageWithSearch;