import React from 'react';
import Navbar from "../navbar/Navbar.tsx";

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

    return (
        <Navbar
            logo={logo}
            navItems={navItems}
            authItems={authItems}
        />
    );
};

export default Header;