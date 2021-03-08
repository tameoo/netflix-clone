import React from 'react';
import MovieCategory from '../movie-category';
import './movie-row.scss';
import { requests } from '../../service/serviceTMDB';

const MovieRow = () => {
    return (
        <section className="movie-row">
            <div className="movie-row__wrapper">
                <MovieCategory title={"Netflix Originals"} request={requests.fetchNetflixOriginals}/>
                <MovieCategory title={"Trending Now"} request={requests.fetchTrending}/>
                <MovieCategory title={"Top Rated"} request={requests.fetchTopRated}/>
                <MovieCategory title={"Action Movies"} request={requests.fetchActionMovies}/>
                <MovieCategory title={"Commedy Movies"} request={requests.fetchComedyMovies}/>
                <MovieCategory title={"Horror Movies"} request={requests.fetchHorrorMovies}/>
                <MovieCategory title={"Romance Movies"} request={requests.fetchRomanceMovies}/>
                <MovieCategory title={"Documentaries"} request={requests.fetchDocumentaries}/>
            </div>
        </section>
    );
}

export default MovieRow;