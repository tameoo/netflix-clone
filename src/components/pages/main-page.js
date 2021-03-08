import React from 'react';
import Header from '../header';
import Story from '../story';
import Card from '../card';
import Questions from '../questions';
import Footer from '../footer';
import { StoryForm } from '../form';

const MainPage = () => {
    return (
        <>
            <Story header={ <Header signIn={true} /> } form={ <StoryForm /> } />
            <Card />
            <Questions />
            <Footer />
        </>
    );
}

export default MainPage;