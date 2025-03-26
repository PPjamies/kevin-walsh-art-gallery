import React, {ReactNode} from 'react';

type Props = {
    title: string;
    description?: string;
    children: ReactNode;
    className?: string;
};

const Section: React.FC<Props> = ({title, description, children, className}) => {
    return (
        <div className={`flex flex-col items-center p-20 ${className}`}>
            <h1 className={'text-4xl mb-5'}>{title}</h1>
            <p className={'text-lg mb-13'}>{description}</p>
            {children}
        </div>
    )
}

export default Section;