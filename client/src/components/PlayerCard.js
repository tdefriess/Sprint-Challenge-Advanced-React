import React from 'react';

export default function PlayerCard({name, country, searches}){
    
    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>{country}</p>
            <p>Times searched: {searches}</p>
        </div>
    )
}