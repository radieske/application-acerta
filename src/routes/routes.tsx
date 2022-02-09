import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from '../pages/Search';
import Register from '../pages/Register';

function PagesRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Search />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/register/:id" element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default PagesRoutes;