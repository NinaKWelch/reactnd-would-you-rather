import React from 'react';

const StatsTemplate = ({ votes, totalVotes, text, selected }) => {
    return (
        <div style={{ border: '1px solid gray', margin: 20, padding: 20 }}>
            {selected && <span>Your pick</span>}
            <h4>{`Would you rather ${text}?`}</h4>
            <div style={{ border: '1px solid gray', width: 300, height: 30 }}>
                <div
                    style={{
                        background: 'gray',
                        width: `calc((100% / ${totalVotes}) * ${votes})`,
                        height: 30 
                    }}
                />
            </div>
            <p>{`${votes} out of ${totalVotes} votes`}</p>
        </div>
    );
}

export default StatsTemplate;
