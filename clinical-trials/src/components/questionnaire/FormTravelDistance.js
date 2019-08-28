import React from 'react'
import {Form, Container} from 'semantic-ui-react';
import styled from 'styled-components';

const FormTravelDistance = (props) => {
    return (
        <div>
            <Container >
                <Form>
                    <fieldset>
                        <Form.Group>
                        <label>How Far Are You Willing To Travel?</label>
                            <input
                                type="radio"
                                label='25 Miles'
                                value='25'
                                name="distance"
                                onClick={(event) => {
                                    props.handleChange(event) }}
                            />
                            <label>25 Miles</label>
                            <input
                                type="radio"
                                label='50 Miles'
                                value='50'
                                name="distance"
                                onClick={(event) => {
                                    props.handleChange(event) }}
                            />
                            <label>50 Miles</label>
                            <input
                                type="radio"
                                label='75 Miles'
                                value='75'
                                name="distance"
                                onClick={(event) => {
                                    props.handleChange(event) }}
                            />
                            <label>75 Miles</label>
                            <input
                                type="radio"
                                label='100 Miles'
                                value='100'
                                name="distance"
                                onClick={(event) => {
                                    props.handleChange(event) }}
                            />
                            <label>100 Miles</label>
                        </Form.Group>
                        <Form.Button onClick={() => props.nextStep()}>Next</Form.Button>
                    </fieldset>
                </Form>
            </Container>
        </div>
    )
}

export default FormTravelDistance;