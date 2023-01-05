import React, {useState} from 'react';
import FoundFilm from "../FoundFilm/FoundFilm";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchContent} from "../../features/SearchSlice";

const Modal = ({visible,setVisible}) => {
    const [value,setValue] = useState('')
    const dispatch = useDispatch()
    const {searchContent} = useSelector(state => state.searchContent)

    let classRoot = ['Header__Modal']
    if (visible){
        classRoot.push('active')
    }
    const onChangeInput = (e) =>{
        let newQuery = e.target.value
        setValue(newQuery)
        dispatch(fetchSearchContent(newQuery))
    }
    console.log(searchContent)
    return (
        <div className={classRoot.join(' ')}>
            <div className="Modal_Overlay">
                <div className="wrapper_overlay">
                    <div className="wrapper-content">
                        <div className="Modal-content">
                            <div className="wrapper__modal-title">
                                <div className="title__container">
                                    <div className="sd">
                                        <h2>Поиск...</h2>
                                        <button onClick={() => setVisible(false)} className="Close_Modal">Закрыть</button>
                                    </div>
                                    <div className="Modal-input">
                                        <input
                                            type="text"
                                            placeholder='Фильмы, персоны, жанры'
                                            value={value}
                                            onChange={onChangeInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper__hints">
                                <div className="wrapper__hints-container">
                                    <div className="Hint__Flex">
                                        {
                                            searchContent.map(arr =>
                                                <FoundFilm {...arr}/>
                                        )
                                        }
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