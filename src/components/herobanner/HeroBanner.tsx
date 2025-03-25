import React from 'react';
import {Content} from "../types.tsx";

type Props = {
    title: string;
    subtitle: string;
    background: Content;
}

const HeroBanner: React.FC<Props> = ({title, subtitle, background}) => {
    return (
        <div
            className="relative w-full h-full bg-cover bg-center blur-"
            style={{
                backgroundImage: `url(${background.src})`,
                minHeight: '50vh',
                maxHeight: '800px'
            }}
        >
            {/* Dark overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-30"></div>

            {/* Content */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="mt-4 text-lg">{subtitle}</p>
            </div>
        </div>
    );
};

export default HeroBanner;