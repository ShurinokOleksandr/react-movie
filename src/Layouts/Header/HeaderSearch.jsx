import React, {useState} from 'react';
import {search} from "../../assets/img";
import ModalSearch from "../../Components/ModalSearch/Modal";

const HeaderSearch = () => {
    const [visible,setVisible] = useState(false);

    return (
        <div className="Header__Search Search">
            <img
                className="ImgSearch"
                src={search}
                alt="Search"
            />
            <div onClick={() => setVisible(true)} className="Header__Input">Поиск...</div>
            <ModalSearch visible={visible} setVisible={setVisible}/>
        </div>
    );
};

export default HeaderSearch;