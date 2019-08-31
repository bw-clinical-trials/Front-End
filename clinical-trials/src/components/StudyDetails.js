import React from 'react'
import {Route} from 'react-router-dom';
import styled from 'styled-components';

const ContentContainer = styled.div`
margin: 73px 0px 0px 62px;
`;

const ResultsBackButtonContainer = styled.div`
width: 19.05%;
margin-bottom: 50px;
`;

const ResultsBackButton = styled.div`
height: auto;
border-radius: 23px;
background-color: #ffffff;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
margin: 40px 0px 0px 0px;
display: flex;
align-items: center;
justify-content: center;
min-width: fit-content;
`;

const BackButtonText = styled.p`
font-size: 18px;
font-weight: bolder;
line-height: 21px;
padding: 13px 0px 12px 0px;
`;

const StudyDetailsContainier = styled.div`

`;

const IntroDetails = styled.div`
margin-bottom: 90px;
`;

const StudyPurpose = styled.div`
margin-top: 99px;
`;

const StudyPurposeHeading = styled.h1`
font-size: 30px;
font-weight: bold;
line-height: 36px;
margin-bottom: 20px;
letter-spacing: 0px;
`;

const StudyPurposeText = styled.p`
font-size: 18px;
font-weight: 500;
line-height: 35px;
padding-right: 5%;
`;

const SummaryAndReqs = styled.div`
width: 100%;
height: 1200px;
display: flex;
flex-flow: column;
`;

const SummaryAndReqsHeader = styled.h1`
font-size: 30px;
font-weight: bold;
line-height: 36px;
margin-bottom: 29px;
letter-spacing: 0.4px;
`;



const StudyDetails = (props) => {
    console.log(props);
    return (
        <div>
            <ContentContainer>
                <ResultsBackButtonContainer>
                    <ResultsBackButton>
                        <BackButtonText>
                            Back to Study Results
                        </BackButtonText>
                    </ResultsBackButton>
                </ResultsBackButtonContainer>
                <StudyDetailsContainier>
                    <IntroDetails>
                        <h1>{props.activeStudy.IdentificationModule.OfficialTitle}</h1>
                    </IntroDetails>
                </StudyDetailsContainier>
            <p>ClinicalTrials.gov - {props.activeStudy.IdentificationModule.NCTId}</p>

            <StudyPurposeHeading>Study Purpose</StudyPurposeHeading>
            <StudyPurposeText>{props.activeStudy.DescriptionModule.DetailedDescription}</StudyPurposeText>

            <SummaryAndReqs>
                <SummaryAndReqsHeader>Study Summary</SummaryAndReqsHeader>
            </SummaryAndReqs>

            <h2>Time Commitment</h2>
            <p>Your participation could last up to: {props.activeStudy.DesignModule.TargetDuration || "No Duration Available"}</p>

            <h2>Key Participation Requirements</h2>
            <p>{props.activeStudy.EligibilityModule.EligibilityCriteria}</p>
            </ContentContainer>
        </div>
        
    )
}

export default StudyDetails;