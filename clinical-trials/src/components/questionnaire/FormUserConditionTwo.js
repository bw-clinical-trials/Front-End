import React from 'react'
import {Button} from 'semantic-ui-react';
import styled from 'styled-components';

const ClinicalTrialInput = styled.input`
padding: 1px 0px 0px 17px;
margin: 0px 9px 0px 13px;
width: 30em;
height: 42px;
border-radius: 21px;
border: 0.05em solid #979797;
font-size: 15px;
font-weight: 500;
font-family: "gilroylight";
letter-spacing: 0px;
z-index: 1;
`;

const ConditionButton = styled.button`
background-color: #223547;
font-family: "gilroylight";
height: 42px;
width: 127px;
border: 0;
color: white;
text-align: center;
align-items: center;
justify-content: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
border-radius: 21px;
margin: 0px 0px 0px 9px;
text-transform: uppercase;
z-index: 1;
`;

const ConditionContainer = styled.div`
min-height: 600px;
width: 100%
`;

const ConditionInputWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 500px;
`;

const FormUserConditionTwo = (props) => {
    return (
        <div>
            <ConditionContainer>
                <ConditionInputWrapper>
                    <h1>I'm looking for clinical trials related to:</h1>
                    <ClinicalTrialInput
                        type="text"
                        name="disease"
                        placeholder="Condition"
                        onChange={(event) => props.handleChange(event)} />
                    <ConditionButton onClick={() => props.prevStep()}>Previous</ConditionButton>
                    <ConditionButton onClick={() => props.nextStep()}>Submit</ConditionButton>
                </ConditionInputWrapper>
            </ConditionContainer>

        </div>
    )
}

export default FormUserConditionTwo;