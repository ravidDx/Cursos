//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

//Routes
//import App from './components/App';
import AppRoutes from './routes';

//Assets
import './index.css';

import registerServiceWorker from './registerServiceWorker';

/*
ReactDOM.render(
    <App />,
    document.getElementById('root'));
    */
render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

