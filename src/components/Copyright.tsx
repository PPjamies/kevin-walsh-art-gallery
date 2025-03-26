import React from 'react';
import {SITE} from '../constants/config.ts';

const Copyright = () => {
    return (
        <div className={'w-full h-auto flex flex-row justify-center bg-pink-400'}>
            © 2025 by {SITE.domain}
        </div>
    );
}

export default Copyright;