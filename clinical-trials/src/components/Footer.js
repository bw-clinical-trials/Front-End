import React from 'react'
import styled from 'styled-components';

const FooterNavWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
width: 100%;
padding-top: 10px;
border-top: 1px solid #dddddd;
`;

const FooterNavBar = styled.nav`
display: flex;
margin: 36px 515px 0px 0px;
`;

const FooterNavTextLinks = styled.div`
margin: 0px 25px 0px 0px;
`;

const FooterLink = styled.a`
align-items: center;
/* margin: 0px 0px 0px 0px; */
text-decoration: none;
font-family: "gilroylight";
font-size: 1.4rem;
color: #3f3f3f;
font-weight: 900;
line-height: 16px;
`;

const FooterNavImgLinks = styled.div`
margin: 0px 0px 0px 0px;
display: flex;
justify-content: space-between;
`;



const Footer = () => {

    return(
        <>
                <FooterNavWrapper>
                    <FooterNavBar>
                        <FooterNavTextLinks>
                            <FooterLink>Terms</FooterLink>
                            <FooterLink>Privacy</FooterLink>
                            <FooterLink>Contact</FooterLink>
                        </FooterNavTextLinks>
                    </FooterNavBar>
                </FooterNavWrapper>
        </>
    )
}

export default Footer;