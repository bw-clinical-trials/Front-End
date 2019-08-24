import React from 'react'
import {Button} from 'semantic-ui-react';

const FormUserConditionTwo = (props) => {
    return (
        <div>
            <h1>Do you currently have Exclusionary Condition Two?</h1>
            <Button.Group>
                <Button>Yes</Button><br />
                <Button>No</Button><br />
                <Button>I Don't Know</Button><br />
                <Button>Skip</Button><br />
                <Button onClick={() => props.handleChange()}>Previous</Button>
                <Button onClick={() => props.prevStep()}>Submit</Button>
            </Button.Group>
        </div>
    )
}

export default FormUserConditionTwo;