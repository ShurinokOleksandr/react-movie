import React from 'react';

const FooterColumn = ({links}) => {
    return (
        <div className="Footer__column">
            <div className="Footer__Title">О нас</div>
            <ul className="LinkList">
                {
                    links.map(l => <li className='LinkItem'><a href="#">{l}</a></li>)
                }
                {/*<li className="LinkItem">О нас</li>*/}
                {/*<li className="LinkItem">О компании</li>*/}
                {/*<li className="LinkItem">Вакансии</li>*/}
                {/*<li className="LinkItem">Информация для партнёров</li>*/}
                {/*<li className="LinkItem">Размещение рекламы</li>*/}
                {/*<li className="LinkItem">Пользовательское соглашение</li>*/}
                {/*<li className="LinkItem">Политика конфиденциальности</li>*/}
            </ul>
        </div>
    );
};

export default FooterColumn;