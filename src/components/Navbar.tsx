import React from 'react';
import logo from '../images/logo.svg';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: space-between
`

const Navbar: React.FC = () => {
    return (
        <Nav>
            <img src = {logo} alt='genoshi' className='logo'/>
            <button className='bt'> Logout </button>
        </Nav>
        );
};

export default Navbar;
