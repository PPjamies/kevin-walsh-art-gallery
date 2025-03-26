import React from 'react';
import './styles.css';

type Props = {
    alt: string;
    src: string;
    title: string;
    description: string;
    cta: string;
    ctaLink: string;
};

const HoverCard: React.FC<Props> = ({alt, src, title, description, cta, ctaLink}) => {
    return (
        <div
            className={'w-[20rem] h-[30rem] rounded-[10px] overflow-hidden cursor-pointer relative bg-white shadow-[0_10px_30px_5px_rgba(0,0,0,0.2)] card'}>

            <img
                src={src}
                alt={alt}
                className={'w-full h-full absolute top-0 left-0 object-cover opacity-90 transition-opacity duration-200 ease-out'}/>

            {/* Card Content */}
            <div>

                <h1
                    className={'absolute font-bold uppercase transition-all duration-[300ms] delay-[300ms] ease-out inset-auto top-auto right-auto bottom-[30px] left-[30px]'}>
                    {title}
                </h1>

                {/* Hidden Content */}
                <div>
                    <p className={'max-w-[80%] absolute opacity-0 transition-opacity duration-300 ease-out inset-auto top-auto right-auto bottom-[80px] left-[30px]'}>
                        {description}
                    </p>
                    <a href={ctaLink}
                       className={'max-w-[80%] absolute opacity-0 transition-opacity duration-300 ease-out inset-auto top-auto right-auto bottom-[40px] left-[30px]'}>
                        {cta}
                    </a>
                </div>

            </div>

        </div>
    );
};

export default HoverCard;