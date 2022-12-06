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
                </div>
            </div>
        </div>
    );
};

export default HeaderPageWithSearch;