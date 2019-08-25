import React from 'react'

import LocationCard from './LocationCard.js';

const LocationInfo = (props) => {
    console.log('In Location Info', props.locationData);
    return(
        <>
        <div>
           {props.locationData.map((location) => {
                return <LocationCard details={location} />
            })}
        </div>
        </>
    )
}

export default LocationInfo;