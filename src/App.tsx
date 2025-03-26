import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './includes/Header'
import AppRouter from './routes/AppRouter';
import Footer from './includes/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;