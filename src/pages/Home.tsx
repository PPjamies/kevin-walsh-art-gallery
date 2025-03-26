import React, {useEffect, useState} from 'react';
import Card from "../components/Card/Card.tsx";
import HoverCard from "../components/Card/HoverCard.tsx";
import {Art} from '../types.tsx';

import image from '../assets/temp/img.png';
import image1 from '../assets/temp/img_1.png';
import Section from "../components/Section.tsx";

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
        },
        {
            alt: 'starry night',
            src: `${image1}`,
            title: 'Starry Night',
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

            {/* Gallery Display */}
            <Section
                title={'Explore My Galleries'}
                description={'Take your time and explore the many galleries I\'ve personally crafted over the years.'}
                className={'bg-pink-400'}
            >
                <div className={'flex flex-row justify-center gap-14 bg-amber-500'}>
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
            </Section>

            {/* Gallery Display */}
            <Section
                title={'Introduction'}
                description={'Hi! My name is Papa Johns'}
                className={'bg-green-700'}
            >

            </Section>

            {/* Contact */}
            <Section
                title={'Let\'s Connect!'}
                description={'Hi! My name is Papa Johns'}
                className={'bg-purple-900'}
            >

            </Section>
        </div>
    )
};

export default Home;