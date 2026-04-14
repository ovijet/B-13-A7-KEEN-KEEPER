import React from 'react';
import HomePage from '../Page/HomePage';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <HomePage></HomePage>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;