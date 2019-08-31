import React from 'react'

import LocationCard from './LocationCard.js';

const LocationInfo = (props) => {
    console.log('In Location Info', props.locationData);
    return(
        <>
           {props.locationData.Location.map((cv) => {
                return <LocationCard details={cv} />
            })}
        </>
    )
}

export default LocationInfo;