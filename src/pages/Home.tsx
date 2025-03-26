import React, {useEffect, useState} from 'react';
import Card from "../components/Card/Card.tsx";

import image from '../assets/temp/img.png';
import {Art} from '../types.tsx';
import HoverCard from "../components/Card/HoverCard.tsx";

const Home = () => {
    const [series, setSeries] = useState<Art[]>([
        {
            alt: 'aqua series oil on wood',
            src: `${image}`,
            title: 'Aqua 1',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
            dimensions: '12ft x 12ft x 4in',
            price: '$1400',
            isSold: false
        }
    ]);

    useEffect(() => {
        // todo: call API to get list of series
    }, []);


    return (
        <div>
            HOME PAGE

            <div className={'flex flex-row justify-center'}>
                {series.map((item, index) => (
                    <Card>
                        <HoverCard
                            key={index}
                            alt={item.alt}
                            src={item.src}
                            title={item.title}
                            description={item.description}
                            cta={'Find out more'}
                            ctaLink={'#'}/>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default Home;