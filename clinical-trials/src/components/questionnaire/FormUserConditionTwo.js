import React from 'react'
import {Button} from 'semantic-ui-react';

const FormUserConditionTwo = (props) => {
    return (
        <div>
            <h1>Do you currently have Exclusionary Condition Two?</h1>
            <Button.Group>
                <Button
                    name="conditionTwo"
                    value="yes"
                    onClick={(event) => props.handleChange(event)}
                    >Yes</Button>
                <Button
                    name="conditionTwo"
                    value="no"
                    onClick={(event) => props.handleChange(event)}
                    >No</Button>
                <Button
                    name="conditionTwo"
                    value="idk"
                    onClick={(event) => props.handleChange(event)}
                    >I Don't Know</Button>
                <Button
                    name="conditionTwo"
                    value="skip"
                    onClick={(event) => props.handleChange(event)}
                    >Skip</Button>
                <Button onClick={() => props.nextStep()}>Next</Button>
                <Button>Submit</Button>
            </Button.Group>
        </div>
    )
}

export default FormUserConditionTwo;