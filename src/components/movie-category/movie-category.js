import React, { useState, useEffect } from 'react';
import { baseURL } from '../../service/serviceTMDB';
import './movie-category.scss';

const MovieCategory = ({title, request}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const fetchMovies = () => {
            fetch(`${baseURL}${request}`)
            .then(data => data.json())
            .then(movies => {
                setMovies(createMovieList(movies.results));
            });
        } 

        fetchMovies();
    },[request]);

    return (
        <div className="movie-category__row">
            <h2 className="movie-category__title">{title}</h2>
            <div className="movie-category__posters">
                { movies }
            </div>
        </div>
    );
}

const createMovieList = (movieList) => {
    return movieList.map(movie => {
        return (
            movie.poster_path ? <img  key={movie.id} className="movie-category__img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie-posters"/> : null
        );
    });
}

export default MovieCategory;