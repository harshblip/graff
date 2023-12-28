import React from 'react';
import logo from '../images/logo.svg';
import styled from 'styled-components';

const Navbar: React.FC = () => {
    const Nav = styled.div`
        display: flex;
        justify-content: space-between
    `
    return (
        <Nav>
            <img src = {logo} alt='genoshi' className='logo'/>
            <button className='bt'> Logout </button>
        </Nav>
        );
};

export default Navbar;
