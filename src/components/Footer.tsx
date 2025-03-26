import React from 'react';
import {Link} from "react-router-dom";

import {SITE, SITE_CONTACT, SITE_SOCIALS} from "../constants/config.ts";
import {NAV_ITEMS} from "../constants/menuItems.ts";
import logo from '../assets/logoipsum.svg';

const Footer = () => {
    return (
        <div className={'bg-gray-900 text-white py-8 px-4'}>

            {/* Top */}
            <div>

                {/* Logo + contact*/}
                <div className={'flex flex-col items-start'}>
                    <img src={logo} alt={'company logo'} className={'w-32 h-auto mb-4'}/>
                    <p className={'text-sm'}>{SITE_CONTACT.email}</p>
                    <p className={'text-sm'}>{SITE_CONTACT.phone}</p>
                    <p className={'text-sm'}>{SITE_CONTACT.address}</p>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className={'flex flex-col gap-2'}>
                        {NAV_ITEMS.map((item, index) => (
                            <li
                                key={index}
                                className={'cursor-pointer shadow-2xl hover:text-gray-400'}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Middle Line */}
            <hr className={'border-t w-full max-w-xl'}/>

            {/* Bottom */}
            <div>

                {/* Socials */}
                <div>
                    <ul className={'flex flex-col gap-2'}>
                        {SITE_SOCIALS.map((item, index) => (
                            <li
                                key={index}
                                className={'flex items-center gap-2 cursor-pointer shadow-2xl hover:text-gray-400'}
                            >
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 inline"/>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Copy Right */}
                <div>
                    © 2025 by {SITE.domain}
                </div>

            </div>
        </div>
    );
};

export default Footer;