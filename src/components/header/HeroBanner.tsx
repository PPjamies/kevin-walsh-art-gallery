import React from 'react';
import {Content} from "../../types.tsx";

type Props = {
    content: Content;
}

const HeroBanner: React.FC<Props> = ({content}) => {

    const displayContent = (content: Content) => {
        return (
            <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
                <h1 className="text-4xl font-bold">{content.title}</h1>
                <p className="mt-4 text-lg">{content.subtitle}</p>
            </div>
        );
    }

    return (
        <div className={'w-full max-h-[60vh]'}>
            <div className={'relative'}>

                {content.type === 'img' ? (
                    <img
                        src={content.items[0].src}
                        alt={content.items[0].alt}
                        className={'w-full max-h-[60vh] object-cover'}
                    />
                ) : (
                    <>
                        {/* todo: create transition slide show */}
                    </>
                )}

                {displayContent(content)}

            </div>
        </div>
    );
};

export default HeroBanner;