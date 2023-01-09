import React, {useCallback, useEffect, useState} from 'react';
import FoundFilm from "../FoundFilm/FoundFilm";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchContent} from "../../features/SearchSlice";
import {removeContent} from "../../features/SearchSlice"

const Modal = ({visible,setVisible}) => {
    let classRoot = ['Header__Modal']
    if (visible){
        classRoot.push('active')
    }
    let timer


    const mediaTypes = ['movie','tv','person'];
    const [value,setValue] = useState('')
    const [mediaType, setMediaType] = useState(mediaTypes[0])

    const dispatch = useDispatch()
    const {searchContent} = useSelector(state => state.searchContent)

    const search = useCallback(() => {
        dispatch(fetchSearchContent({value, mediaType}))
    },[mediaType,value])


    const onQueryChange = (e) => {
        const newQuery = e.target.value;
        clearTimeout(timer);
        setValue(newQuery);
    };
    useEffect(()=>{
        setValue('')
        dispatch(removeContent())
    },[mediaType])
    useEffect(()=>{
        if(value){
            timer =  setTimeout(() => {
                search()
            },1000)

        }
    },[value])


    const onCategoryChange = (setChangeCategory) => setMediaType(setChangeCategory)

    console.log(searchContent)
    return (
        <div className={classRoot.join(' ')}>
            <div className="Modal_Overlay">
                <div className="wrapper_overlay">
                    <div className="wrapper-content">
                        <div className="Modal-content">
                            <div className="wrapper__modal-title">
                                <div className="title__container">
                                    <div className="title__container-header">
                                        <h2>Поиск...</h2>
                                        <div className="MediaTypes">
                                            {
                                                mediaTypes.map((item,index) =>
                                                    <button
                                                        onClick={() => onCategoryChange(item)}
                                                        key={index}
                                                        className={mediaType === item ? 'MediaTypes__Type Modal__Btn activeMediaType' : 'MediaTypes__Type Modal__Btn'}>
                                                        {item.toUpperCase()}
                                                    </button>
                                                )
                                            }
                                        </div>
                                        <button onClick={() => setVisible(false)} className="Close_Modal Modal__Btn">Закрыть</button>
                                    </div>
                                    <div className="Modal-input">
                                        <input
                                            type="text"
                                            placeholder='Фильмы, персоны, жанры'
                                            value={value}
                                            onChange={onQueryChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper__hints">
                                <div className="wrapper__hints-container">
                                    <div className="Hint__Flex">
                                        {
                                            searchContent.map(arr =>
                                                <FoundFilm key={arr.id} {...arr}/>)
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