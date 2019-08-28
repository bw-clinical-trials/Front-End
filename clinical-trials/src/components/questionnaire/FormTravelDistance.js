import React from 'react'
import {Form, Container} from 'semantic-ui-react';
import styled from 'styled-components';

const TravelMainContent = styled.section`
display: flex;
`;

const TravelRadiusPrompt = styled.form`
display:flex;
flex-direction: column;
height: 50vh;
margin-left: 7%;
margin-right: 5%;
`;

const TravelRadiusText = styled.p`
padding-bottom: 10%;
font-size: 2.5em;
`;

const FormTravelDistance = (props) => {
    return (
        <div>
            <TravelMainContent>
                <TravelRadiusPrompt>
                        <TravelRadiusText>How Far Are You Willing To Travel?</TravelRadiusText>
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
                        <Form.Button onClick={() => props.nextStep()}>Next</Form.Button>
                </TravelRadiusPrompt>
            </TravelMainContent>
        </div>
    )
}

export default FormTravelDistance;