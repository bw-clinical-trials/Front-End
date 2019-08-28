import React from 'react'
import homepage from "../img/homepage.svg";
import styled from 'styled-components';

const MainContent = styled.section`
width: 100%;
padding-left: 5%;
padding-top: 10%;
`;

// const QuestionPrompt = styled.div`

// `;

const PromptHeader = styled.h1`
width: 40%;
// font-family: "gilroylight";
font-weight: bold;
font-size: 3.75rem;
color: @font-color;
line-height: 1.25em;
padding-bottom: 2.5%;
`;

const PromptParagraph = styled.p`
width: 47%;
padding-bottom: 2.5%;
`;

const FindTrialInputs = styled.div`
display: flex;
padding: 45px 0px 0px 11px;
`;

const ImgWrapper = styled.div`
margin-top: -27%;
margin-bottom: 1.5%;
`;

const ConditionInput = styled.input`
margin-right: 10px;
padding: 0px 0px 0px 19px;
width: 30em;
height: 42px;
border-radius: 21px;
border: 0.05em solid #979797;
font-size: 15px;
font-weight: 500;
font-family: 'gilroylight'
`;

const PostalCodeInput = styled.input`
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
`;

const FindTrialButton = styled.button`
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
`;

const HomePage = () => {
    return(
        <>
            <MainContent>
                <PromptHeader>Looking for a clinical trial near you?</PromptHeader>
                <PromptParagraph>We'll help you break through the complex medical jargon and find a clinical study that you're eligible to join.</PromptParagraph>
            </MainContent>
            <FindTrialInputs>
                <ConditionInput type="text" placeholder="Medical Condition"></ConditionInput>
                <PostalCodeInput></PostalCodeInput>
                <FindTrialButton>Find a Trial</FindTrialButton>
            </FindTrialInputs>
            <ImgWrapper>
            <img src={homepage} />
            </ImgWrapper>
        </>
    )
}

export default HomePage;