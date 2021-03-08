import React from 'react';
import Header from '../header'
import Story from '../story';
import Footer from '../footer';
import { SignInForm } from '../form';
import { SignUpForm } from '../form';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../private-route';
import { MainPage, MoviesPage} from '../pages';
import './app.scss';

const App = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={ MainPage } exact />
                <Route path="/sign-in" render={ () => <Story header={ <Header /> } form={ <SignInForm /> } /> } />
                <Route path="/sign-up" render={ () => <Story header={ <Header /> } form={ <SignUpForm /> } /> } />
                <PrivateRoute path="/movies" component={ MoviesPage } />
            </Switch>
            <Footer />
        </>
    );
}

export default App;