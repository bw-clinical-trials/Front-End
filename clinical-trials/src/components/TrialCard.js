import React from 'react'
import {Card, Button} from 'semantic-ui-react';

import LocationInfo from './LocationInfo.js';

const TrialData = (props) => {
    const title = props.details.Study.ProtocolSection.IdentificationModule.BriefTitle;
    let locationData = [];

    // Some of the search results don't have the ContactsLocationModule key.

    if (props.details.Study.ProtocolSection.hasOwnProperty('ContactsLocationsModule')) {
        locationData = props.details.Study.ProtocolSection.ContactsLocationsModule.LocationList.Location;
    } else {
        locationData.push("No Location Data Available")
    }

    console.log('In Trial Card', locationData);


    // console.log(props)
    return(
        <>
            <Card>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>Rank: {props.details.Rank}</Card.Meta>
                    <Card.Description>{(locationData === undefined) ? "No Location Data Available" : <LocationInfo locationData={locationData} />}</Card.Description>
                    {/* {(locationData === undefined || locationData.length === 0) ? <Card.Description>"No Location Data Available"</Card.Description> : <Card.Description><LocationInfo locationData={locationData} /></Card.Description> } */}
                    <Button>View Study</Button>
                </Card.Content>
            </Card>
        </>
    )
}

export default TrialData;