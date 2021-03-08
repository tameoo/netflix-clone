import React from 'react';
import Showcase from '../showcase';
import MovieRow from '../movie-row';
import Footer from '../footer';

const MoviesPage = () => {
    return (
        <>
            <Showcase />
            <MovieRow />
            <Footer />
        </>
    );
}

export default MoviesPage;