import React from 'react'
import {Card, Button} from 'semantic-ui-react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import LocationInfo from './LocationInfo.js';
import StudyDetails from './StudyDetails.js';

// Styles adapted from UI Devs. Names will vary from what is shown in the HTML for the marketing pages in some instances.
// Need to make minor adjustments.

const TrialContainer = styled.div`
width: 100%;
height: 150px;
padding: 22px 0px;
display: flex;
border-top: #f3f3f3 2px solid;
`;

const Condition = styled.div`
display: flex;
align-items: center;
font-size: 14px;
`;

const StudyTitleContainer = styled.div`
flex-basis: 35%;
`;

const StudyTitle = styled.h3`
font-size: 1.25rem;
font-weight: bolder;
padding: 22px 0px 0px 14px;
line-height: 27px;
letter-spacing: 0px;
`;

const StudyLocation = styled.div`
flex-basis: 33%;
display: flex;
font-weight: 600;
font-size: 18px;
`;

const IDWrapper = styled.div`
display: flex;
flex-flow: column;
flex-basis: 44%;
justify-content: center;
text-align: center;
`;

const IDHeader = styled.h2`
font-weight: bold;
font-size: 1.1rem;
`;

const IDParagraph = styled.p`
margin: 0px 0px 0px 0px;
`;

const LocationDetails = styled.div`
display: flex;
flex-basis: 70%;
flex-flow: column;
padding: 4px 0px 0px 22px;
line-height: 18px;
justify-content: center;
`;

const LocationHeader = styled.h2`
font-weight: bold;
font-size: 1.1rem;
`;

const LocationParagraph = styled.p`
margin: 0px 0px 0px 0px;
`;

const StudyStatus = styled.div`
flex-basis: 18%;
display: flex;
flex-flow: column;
justify-content: center;
text-align: center;
align-self: center;
`;

const StatusHeader = styled.h2`
font-weight: bold;
font-size: 1.1rem;
`;

const StatusIcon = styled.div`
background-color: #1bd9c4;
border-radius: 100%;
width: 18px;
height: 18px;
margin: 1px auto;
`;

const StudyButtonContainer = styled.div`
flex-basis: 10%;
padding-left: 42px;
display: flex;
justify-content: center;
margin: auto auto;
`;

const StudyButton = styled.button`
background-color: #223547;
color: #ffffff;
padding: 10px;
border-radius: 10%;
font-size: 1.1rem;
`;

const TrialData = (props) => {
    const title = props.details.Study.ProtocolSection.IdentificationModule.BriefTitle;

    return(
        <>
            <TrialContainer>
                    <StudyTitleContainer>
                        <StudyTitle>
                            {title}
                        </StudyTitle>
                    </StudyTitleContainer>
                    <StudyLocation>
                        <IDWrapper>
                            <IDHeader>Study ID</IDHeader>
                            <IDParagraph>{props.details.Study.ProtocolSection.IdentificationModule.NCTId}</IDParagraph>
                        </IDWrapper>
                        <LocationDetails>
                            <LocationHeader>Type of Study:</LocationHeader>
                            <LocationParagraph>{props.details.Study.ProtocolSection.DesignModule.StudyType}</LocationParagraph>
                        </LocationDetails>
                    </StudyLocation>
                    <StudyStatus>
                        <StatusHeader>
                            Trial Status
                        </StatusHeader>
                        <StatusIcon />
                        <p>{props.details.Study.ProtocolSection.StatusModule.OverallStatus}</p>
                    </StudyStatus>
                    <StudyButtonContainer>
                        <StudyButton onClick={ () => {props.setActiveStudy(props.details.Study.ProtocolSection)
                            props.history.push("/study");
                    }
                            // {Set Active Tab and route user to active route}
                        }>View Study</StudyButton>
                    </StudyButtonContainer>
            </TrialContainer>
        </>
    )
}

export default withRouter(TrialData);