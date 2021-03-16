import React, { useState, useEffect } from 'react';
import Header from '../header';
import { baseURL, requests } from '../../service/serviceTMDB';
import './showcase.scss';

const Showcase = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovies = () => {
            fetch(`${baseURL}${requests.fetchNetflixOriginals}`)
            .then(data => data.json())
            .then(movie => {
                setMovie(movie.results[
                    Math.floor(Math.random() * movie.results.length - 1)
                ])
            });
        } 
        
        fetchMovies();
    },[]);
    
    
    return (
        <section className="showcase">
            <div className="showcase__inner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
                <div className="showcase__header">
                    <Header singOut={true}/>
                </div>
                <div className="showcase__wrapper">
                    <div className="showcase__text"> 
                        <h1 className="showcase__title">{ movie?.name || movie?.original_name}</h1>
                        <div className="showcase__group-btn">
                            <button className="showcase__btn">Play</button>
                            <button className="showcase__btn">My List</button>
                        </div>
                        <p className="showcase__descr">
                            { movie?.overview }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;