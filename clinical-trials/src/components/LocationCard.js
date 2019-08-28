import React from 'react'
import {Card} from 'semantic-ui-react';

const LocationCard = (props) => {
    // console.log("In Location Card", props.details);
    return(
        <>
            <Card>
                <Card.Content>
                    <Card.Description>{props.details.LocationFacility}</Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default LocationCard;