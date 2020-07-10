import React from 'react';

const CardTemplate = ({ children, title, avatar, name }) => {
    return (
        <div style={{ border: '1px solid gray' }}>
            <div>
                <h3>{title}</h3>
            </div>
            <img src={avatar} alt={name} />
            <div>{children}</div>
        </div>
    );
}

export default CardTemplate;
