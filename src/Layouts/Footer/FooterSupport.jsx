import React from 'react';

const FooterSupport = () => {

    return (
        <div className='Footer__column Support'>
            <div className="Footer__Title">Служба поддержки</div>
            <p className="Support__About">
                Мы всегда готовы вам помочь.Наши операторы онлайн 24/7
            </p>
            <a className='Support__Button' variant="contained" color="color">
                <span>Написать в чате</span>
            </a>
            <div className="Support__Mail">
                <a href="#">ask.react.movie</a>
                <p>Ответы на вопросы</p>
            </div>
        </div>
    );
};

export default FooterSupport;