import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar.tsx';
import HeroBanner from '../components/HeroBanner.tsx';
import {Content} from '../types.tsx';
import {AUTH_ITEMS, NAV_ITEMS} from '../constants/menuItems.ts';
import logo from '../assets/logoipsum.svg';
import bannerImg from '../assets/banner-pawel-czerwinski.jpg';

const Header = () => {
    const [content, setContent] = useState<Content>({
        type: 'img',
        items: [
            {
                alt: 'placeholder',
                src: `${bannerImg}`
            }
        ],
        title: 'Test',
        subtitle: 'testing...'
    });

    useEffect(() => {
        // todo: call API to get banner content then update state
    }, []);

    return (
        <div>
            <Navbar
                logo={logo}
                navItems={NAV_ITEMS}
                authItems={AUTH_ITEMS}
            />
            <HeroBanner content={content}/>
        </div>
    );
};

export default Header;