import React from 'react';
import './TeamInfo.css';

const TeamInfo = props => {
    return (
        <div className='info-list'>
            {props.info.map(info => (
                <div className='info' key={info.id}>
                    <h2>{info.fName}</h2>
                    <h2>{info.lName}</h2>
                    <h2>{info.email}</h2>
                    <h2>{info.role}</h2>
                </div>
            ))}
        </div>
    );
};
export default TeamInfo;