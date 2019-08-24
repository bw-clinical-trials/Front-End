import React from 'react'
import {Form, Container} from 'semantic-ui-react';

const FormTravelDistance = (props) => {
    return (
        <div>
            <Container >
                <Form>
                    <fieldset>
                        <Form.Group>
                        <label>How Far Are You Willing To Travel?</label>
                            <Form.Radio
                                label='25 Miles'
                                value='25'
                                name="distance"
                                // checked={value === 'sm'}
                            />
                            <Form.Radio
                                label='50 Miles'
                                value='50'
                                name="distance"
                                // checked={value === 'md'}
                            />
                            <Form.Radio
                                label='75 Miles'
                                value='75'
                                name="distance"
                                // checked={value === 'lg'}
                            />
                            <Form.Radio
                                label='100 Miles'
                                value='100'
                                name="distance"
                                // checked={value === 'lg'}
                            />
                        </Form.Group>
                        <Form.Button onClick={() => props.nextStep()}>Next</Form.Button>
                    </fieldset>
                </Form>
            </Container>
        </div>
    )
}

export default FormTravelDistance;