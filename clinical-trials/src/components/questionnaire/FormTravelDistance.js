import React from 'react'
import {Form, Container} from 'semantic-ui-react';
import styled from 'styled-components';

const TravelMainContent = styled.section`
display: flex;
justify-content: center;
margin: 5%;
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

const RadioContainerTravelRadius = styled.label`
display: flex;
position: relative;
cursor: pointer;
user-select: none;
padding: 3px 0px 2px 43px;
margin: 34px 0px 0px 0px;
/* padding-left: 45px; */
/* padding-bottom: 30px; */
font-size: 21px;
font-weight: 500;
font-family: 'gilroylight';
`;

const Circle = styled.span`
display: inline-block;
width: 28px;
height: 28px;
border: .05em solid;
position: absolute;
left: 0;
top: 0;
border-radius: 50%; 
`;

const RemoveInputStyling = styled.input`
display: none;
`;

const FormTravelDistance = (props) => {
    return (
        <div>
            <TravelMainContent>
                <TravelRadiusPrompt>
                        <TravelRadiusText>How Far Are You Willing To Travel?</TravelRadiusText>
                            <RadioContainerTravelRadius> 25 Miles
                            <RemoveInputStyling
                                type="radio"
                                label='25 Miles'
                                value='25'
                                name="distance"
                                onClick={(event) => {
                                    props.handleChange(event) }}
                            /> <Circle />
                            </RadioContainerTravelRadius>
                            <RadioContainerTravelRadius> 50 Miles
                                <RemoveInputStyling
                                    type="radio"
                                    label='50 Miles'
                                    value='50'
                                    name="distance"
                                    onClick={(event) => {
                                        props.handleChange(event) }}
                                /> <Circle />
                            </RadioContainerTravelRadius>
                            <RadioContainerTravelRadius> 75 Miles
                                <RemoveInputStyling
                                    type="radio"
                                    label='75 Miles'
                                    value='75'
                                    name="distance"
                                    onClick={(event) => {
                                        props.handleChange(event) }}
                                /> <Circle />
                            </RadioContainerTravelRadius>
                            <RadioContainerTravelRadius> Any Distance
                                <RemoveInputStyling
                                    type="radio"
                                    label='100 Miles'
                                    value='any_distance'
                                    name="distance"
                                    onClick={(event) => {
                                        props.handleChange(event) }}
                                /><Circle />
                            </RadioContainerTravelRadius>
                            
                        <Form.Button onClick={() => props.nextStep()}>Next</Form.Button>
                </TravelRadiusPrompt>
            </TravelMainContent>
        </div>
    )
}

export default FormTravelDistance;