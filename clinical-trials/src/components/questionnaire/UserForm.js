import React, { useState } from 'react'
import FormTravelDistance from './FormTravelDistance';
import FormUserAge from './FormUserAge.js';
import FormUserConditionOne from './FormUserConditionOne';
import FormUserConditionTwo from './FormUserConditionTwo';

const UserForm = () => {
    const [step, setStep] = useState(1);
    const [userDetails, setUserDetails] = useState({distance: "", age: 0})

    // Proceed to next step in form.

    const nextStep = () => {
        setStep(step + 1);
    }

    // Go back to previous step in form.

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleChange = (event) => {
        setUserDetails({...userDetails, [event.target.name]: event.target.value})
    }

    console.log(userDetails);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setUserDetails
    // }
    
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
            />
        );

        case 3: return(
            <FormUserConditionOne 
            nextStep={nextStep}
            prevStep={prevStep}
            />
        );

        case 4: return(
            <FormUserConditionTwo 
            handleChange={handleChange}
            prevStep={prevStep}
            />
        );
    }
            
}

export default UserForm;