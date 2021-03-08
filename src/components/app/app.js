import React from 'react';
import { MainPage, AuthPage, MoviesPage} from '../pages';
import PrivateRoute from '../private-route';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={ MainPage } exact />
            <Route path="/auth" component={ AuthPage } />
            <PrivateRoute path="/movies" component={ MoviesPage } />
        </Switch>
    );
}

export default App;