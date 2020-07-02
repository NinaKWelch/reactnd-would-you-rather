import React from 'react';

const CardTemplate = ({ children, title, avatar }) => {
    return (
        <div style={{ border: '1px solid gray' }}>
            <div>
                <h3>{title}</h3>
            </div>
            <img src={avatar} alt="placeholder" />
            <div>{children}</div>
        </div>
    );
}

export default CardTemplate;
