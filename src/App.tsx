import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/header/Header'
import AppRouter from './routes/AppRouter';
import Footer from './components/footer/Footer';

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