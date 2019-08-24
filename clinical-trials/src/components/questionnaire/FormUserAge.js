import React from 'react'
import {Input, Button} from 'semantic-ui-react';


const FormUserAge = (props) => {
    return (
        <div>
            <label>How Old Are You?</label>
            <Input />
            <Button onClick={() => props.nextStep()}>Next</Button>
            <Button onClick={() => props.prevStep()}>Previous</Button>
        </div>
    )
}

export default FormUserAge;