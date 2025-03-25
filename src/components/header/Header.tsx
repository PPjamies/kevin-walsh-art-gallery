import React from 'react';

import Navbar from "../navbar/Navbar.tsx";
import HeroBanner from "../herobanner/HeroBanner.tsx";

import {Content, MenuItem} from "../types.tsx";

const Header = () => {
    let logo: string = 'src/assets/img/logoipsum.svg';
    let navItems: MenuItem[] = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Series',
            path: '/series'
        },
        {
            label: 'About',
            path: '/about'
        },
        {
            label: 'Contact',
            path: '/contact'
        },
    ];
    let authItems: MenuItem[] = [
        {
            label: 'Login',
            path: '/login'
        },
        {
            label: 'Signup',
            path: '/signup'
        }
    ];
    let background: Content = {
        type: 'img',
        src: 'src/assets/img/banner-pawel-czerwinski.jpg'
    };

    return (
        <div className={'relative'}>
            <div className={'absolute z-3'}>
                <Navbar
                    logo={logo}
                    navItems={navItems}
                    authItems={authItems}
                />
            </div>
            <div className={'absolute top-0 left-0 w-full h-full z-0'}>
                <HeroBanner
                    title={'test'}
                    subtitle={'testing...'}
                    background={background}/>
            </div>
        </div>
    );
};

export default Header;