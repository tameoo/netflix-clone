import React from 'react';
import './card.scss';

const Card = () => {
    return (
        <section className="card">
            <div className="card__wrapper">
                <div className="card__item">
                    <div className="card__text">
                            <h1 className="card__title">Enjoy on your TV.</h1>
                            <h2 className="card__subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                    </div>
                    <div className="card__img">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="card-img"/>
                        <div className="card__video">
                            <video autoPlay loop muted playsInline>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__wrapper">
                <div className="card__item">
                    <div className="card__img">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="card-img"/>
                        <div className="card__animation">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="filmimg"/>
                            <div className="card__animation-text">
                                <h4>Stranger things</h4>
                                <span>Downloading...</span>
                            </div>
                        </div>
                    </div>
                    <div className="card__text">
                            <h1 className="card__title">Download your shows to watch offline.</h1>
                            <h2 className="card__subtitle">Save your favorites easily and always have something to watch.</h2>
                    </div>
                </div>
            </div>
            <div className="card__wrapper">
                <div className="card__item">
                    <div className="card__text">
                            <h1 className="card__title">Watch everywhere.</h1>
                            <h2 className="card__subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                    </div>
                    <div className="card__img">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="card-img"/>
                        <div className="card__video card__video_exclusive">
                            <video autoPlay loop muted playsInline width="400">
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
