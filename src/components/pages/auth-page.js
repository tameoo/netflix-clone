import React from 'react';
import Header from '../header'
import Story from '../story';
import { SignInForm } from '../form';
import { SignUpForm } from '../form';
import { Route, Switch } from 'react-router-dom';
import Footer from '../footer';

const AuthPage = () => {
    return (
        <>
            <Switch>
                <Route path="/auth/sign-in" render={ () => <Story header={ <Header /> } form={ <SignInForm /> } /> } />
                <Route path="/auth/sign-up" render={ () => <Story header={ <Header /> } form={ <SignUpForm /> } /> } />
            </Switch>
            <Footer />
        </>
    );
}

export default AuthPage;