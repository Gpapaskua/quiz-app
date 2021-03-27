import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NAV>
            <H1>my-shop</H1>
            <UL>
                <li>home</li>
                <li>categories</li>
                <li>contact</li>
            </UL>
        </NAV>
    )
}
const H1 = styled.h1`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #fff;
`
const NAV = styled.nav`
    display: flex;
    justify-content: space-around;
    background: #000;
`
const UL = styled.ul`
    display: flex;
    width: 20%;
    color: #fff;
    list-style: none;
    justify-content: space-evenly;
`

export default Navbar;