import React from 'react'
import {Button} from 'semantic-ui-react';

const FormUserConditionOne = (props) => {
    return (
        <div>
            <h1>Do you currently have Exclusionary Condition One?</h1>
            <Button.Group>
                <Button
                    name="conditionOne"
                    value="yes"
                    onClick={(event) => props.handleChange(event)}
                    >Yes</Button>
                <Button
                    name="conditionOne"
                    value="no"
                    onClick={(event) => props.handleChange(event)}
                    >No</Button>
                <Button
                    name="conditionOne"
                    value="idk"
                    onClick={(event) => props.handleChange(event)}
                    >I Don't Know</Button>
                <Button
                    name="conditionOne"
                    value="skip"
                    onClick={(event) => props.handleChange(event)}
                    >Skip</Button>
                <Button onClick={() => props.nextStep()}>Next</Button>
                <Button onClick={() => props.prevStep()}>Previous</Button>
            </Button.Group>
        </div>
    )
}

export default FormUserConditionOne;