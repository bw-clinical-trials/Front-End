import React from 'react'
import {Button} from 'semantic-ui-react';

const FormUserConditionTwo = (props) => {
    return (
        <div>
            <h1>I'm looking for clinical trials related to:</h1>
                <input
                    type="text"
                    name="disease"
                    placeholder="testing"
                    onChange={(event) => props.handleChange(event)} />
                <Button onClick={() => props.nextStep()}>Submit</Button>
        </div>
    )
}

export default FormUserConditionTwo;