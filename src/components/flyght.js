import React, {useEffect, useState} from 'react';

const Flyght = ({item:value}) => {

    return (
        <div>
                <div className='flights'>
                    <div className='flightsInfo'>
                        <h2>{value.mission_name}</h2>
                        <p>{value.launch_year}</p>
                    </div>

                    <div className='images'>{<img src={value.links.mission_patch_small} alt="mission_patch"/>}
                    </div>

                </div>
                <hr/>
        </div>
    );
};

export default Flyght;