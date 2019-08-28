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

const HomePage = () => {
    return(
        <>
            <MainContent>
                <PromptHeader>Looking for a clinical trial near you?</PromptHeader>
                <PromptParagraph>We'll help you break through the complex medical jargon and find a clinical study that you're eligible to join.</PromptParagraph>
            </MainContent>
            <img src={homepage} />
        </>
    )
}

export default HomePage;