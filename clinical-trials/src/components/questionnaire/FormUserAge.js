import React from 'react'
import {Input, Button} from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
min-height: 600px;
width: 100%
`;

const InputWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 500px;
`;

const AgeText = styled.h1`
font-size: 2.5em;
width: 100%;
`;

const AgeInput = styled.input`
height: 42px;
width: 134px;
color: #828282;
font-family: "gilroylight";
font-size: 15px;
font-weight: 500;
line-height: 18px;
border: 0.05em solid #979797;
border-radius: 21px;
padding: 0px 0px 0px 25px;
z-index: 1;
`;

const NavButton = styled.button`
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


const FormUserAge = (props) => {
    return (
            <Container>
                <InputWrapper>
                <AgeText>How Old Are You?</AgeText>
                    <AgeInput
                        name="age" 
                        onChange={(event) => props.handleChange(event)}/>
                    <NavButton onClick={() => props.nextStep()}>Next</NavButton>
                    <NavButton onClick={() => props.prevStep()}>Previous</NavButton>
                </InputWrapper>

            </Container>
    )
}

export default FormUserAge;