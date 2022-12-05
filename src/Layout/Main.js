import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;