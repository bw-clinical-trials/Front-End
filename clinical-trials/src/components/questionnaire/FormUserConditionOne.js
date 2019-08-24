import React from 'react'
import {Button} from 'semantic-ui-react';

const FormUserConditionOne = (props) => {
    return (
        <div>
            <h1>Do you currently have Exclusionary Condition One?</h1>
            <Button.Group>
                <Button>Yes</Button><br />
                <Button>No</Button><br />
                <Button>I Don't Know</Button><br />
                <Button>Skip</Button><br />
                <Button onClick={() => props.nextStep()}>Next</Button>
                <Button onClick={() => props.prevStep()}>Previous</Button>
            </Button.Group>
        </div>
    )
}

export default FormUserConditionOne;