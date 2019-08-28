import React, { useState } from 'react'
import FormTravelDistance from './FormTravelDistance';
import FormUserAge from './FormUserAge.js';
import FormUserConditionOne from './FormUserConditionOne';
import FormUserConditionTwo from './FormUserConditionTwo';
import TrialData from '../TrialData.js';

const UserForm = (props) => {
    const [step, setStep] = useState(1);
    const [userDetails, setUserDetails] = useState({})

    // Proceed to next step in form.

    const nextStep = () => {
        setStep(step + 1);
    }

    // Go back to previous step in form.

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleChange = (event) => {
        // console.log(event);
        setUserDetails({...userDetails, [event.target.name]: event.target.value})
    }

    console.log(userDetails);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setUserDetails
    // }

    // Will render the appropriate part of the form depending on the value of step. This allows the user to interact
    // with one part of the form at a time.
    
    switch (step) {
        case 1: return(
            <FormTravelDistance
                nextStep={nextStep}
                handleChange={handleChange}
            />
        );

        case 2: return(
            <FormUserAge
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            />
        );

        case 3: return(
            <FormUserConditionOne 
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            />
        );

        case 4: return(
            <FormUserConditionTwo 
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            />
        );

        case 5: return(
            <TrialData setActiveStudy={props.setActiveStudy} userDetails={userDetails} />
        )

        default:
            return null;
    }
            
}

export default UserForm;