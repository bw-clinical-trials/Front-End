import React from 'react'

const StudyDetails = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.activeStudy.IdentificationModule.OfficialTitle}</h1>
            <p>ClinicalTrials.gov - {props.activeStudy.IdentificationModule.NCTId}</p>

            <h2>Study Purpose</h2>
            <p>{props.activeStudy.DescriptionModule.DetailedDescription}</p>

            <h2>Time Commitment</h2>
            <p>Your participation could last up to: {props.activeStudy.DesignModule.TargetDuration}</p>

            <h2>Key Participation Requirements</h2>
            <p>{props.activeStudy.EligibilityModule.EligibilityCriteria}</p>
        </div>
    )
}

export default StudyDetails;