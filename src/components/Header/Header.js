import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <StyledLogo />
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
            </MainHeader>
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    position: relative;
    padding: 26px 32px 25px 32px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${COLORS.gray[300]};
`;

const StyledLogo = styled(Logo)`
    position: absolute;
    left: 32px;
    bottom: 23px;
    top: 21px;
`;

const Nav = styled.nav``;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    margin-right: 48px;
    &:first-of-type {
        color: ${COLORS.secondary};
        margin-left: 48px;
    }
`;

export default Header;
