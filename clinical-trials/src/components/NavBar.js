import React from 'react'
import styled from 'styled-components';

const Header = styled.header`
    width: 1368px;
    height: 55px;
    margin: 25px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
`;

const Nav = styled.nav`
    margin: 25px 0px 0px 0px;
`;

const Foo = styled.a`
    text-decoration: none;
    color: #545454;
    margin: 0px 0px 0px 69px;
`;

const NavBar = () => {
    return (
        <div>
            <Header>
                <img src={"../img/StudybookLogo.png"} />
                <Nav>
                    <Foo href="#">Find a Trial</Foo>
                    <Foo href="#">About</Foo>
                    <Foo href="#">Help</Foo>
                </Nav>
            </Header>
        </div>
    )
}

export default NavBar;