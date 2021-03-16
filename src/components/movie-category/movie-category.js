import React, { useState, useEffect } from 'react';
import { baseURL } from '../../service/serviceTMDB';
import './movie-category.scss';

const MovieCategory = ({title, request}) => {

    const [movies, setMovies] = useState(null);
    const [movieId, setMoviesId] = useState(null);

    useEffect(() => {
        const fetchMovies = () => {
            fetch(`${baseURL}${request}`)
            .then(data => data.json())
            .then(movies => {
                setMovies(movies.results);
            });
        } 
        
        fetchMovies();
    },[request]);
    
    const createMovieResault = (movieResalts) => {
        return movieResalts.map(movie => {
            return (
                 <img key={movie.id} 
                        className="movie-category__img" 
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        alt="movie-posters" 
                        onClick={ () => setMoviesId(movie.id) }
                        /> 
            );
        });
    }

    const createMoviePopUp = (movies, movieId) => {
        const index = movies.findIndex(movie => movie.id === movieId);
        const movie = movies[index];
        return (
            <div className="movie-category__popup">
                <div className="movie-category__popup-overview">
                    <h2 className="movie-category__popup-header">
                        { movie.name || movie.original_name || movie.original_title }
                    </h2>
                    <p className="movie-category__popup-descr">
                        {movie.overview}
                    </p>
                    <button className="movie-category__popup-btn">
                        Play
                    </button>
                    <i className="fas fa-times" 
                        onClick={ () => { 
                            setMoviesId(null);
                        }}>
                    </i>
                </div>
                <div className="movie-category__popup-wrapper">
                    <img key={movie.id} 
                            className="movie-category__popup-img" 
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                            alt="movie-posters" 
                            /> 
                </div>
            </div>
        );
    }


    return (
        <div className="movie-category__row">
            <h2 className="movie-category__title">{title}</h2>
            <div className="movie-category__posters">
                { movies ? createMovieResault(movies) : null }
            </div>
            { movieId ? createMoviePopUp(movies, movieId) : null}
        </div>
    );
}


export default MovieCategory;