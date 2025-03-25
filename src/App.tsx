import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from "./components/header/Header.tsx";
import AppRouter from './routes/AppRouter.tsx';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;