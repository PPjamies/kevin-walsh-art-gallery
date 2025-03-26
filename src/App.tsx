import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from "./components/Header.tsx";
import AppRouter from './routes/AppRouter.tsx';
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}

export default App;