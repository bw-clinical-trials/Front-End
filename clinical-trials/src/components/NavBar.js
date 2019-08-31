import React from 'react'
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import logo from '../img/studybookLogo.svg';

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
                <Link to="/">
                <img src={logo} />
                </Link>
                <Nav>
                    <NavLink to="/search">Find a Trial</NavLink>
                    <Foo href="#">About</Foo>
                    <Foo href="#">Help</Foo>
                </Nav>
            </Header>
        </div>
    )
}

export default NavBar;