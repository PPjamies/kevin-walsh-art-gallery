import React from 'react';

type Props = {
    children: React.ReactNode
    className?: string;
};

const Card: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default Card;