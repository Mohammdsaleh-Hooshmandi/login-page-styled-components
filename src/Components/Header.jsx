import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderWrapper = styled.header`
    width: 100%;
    height: 7rem;
    background: linear-gradient(to right, #f8049c, #fdd54f);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;

    h1 {
        font-family: "Kaushan Script";
        font-size: 3rem;
        color: white;
    }
`;

const Navbar = styled.nav`
    font-family: "Open Sans";
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: .1rem;

    a {
        color: white;
        text-decoration: none;
        margin: 0 1rem;
    }

    @media (max-width: 750px) {
        a {
            display: none;
        }
    }
`;

const Menu = styled.div`
    width: 4rem;
    height: 2.5rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    div {
        width: 100%;
        height: .2rem;
        background-color: black;
    }

    @media (max-width: 750px) {
        display: flex;
    }
`;

const MobileNavbar = styled.nav`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 7rem;
    left: 0;
    z-index: 10;
    background-color: white;
    border-bottom: .2rem solid #fdd54f;

    a {
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
        font-family: "Open Sans";
        font-weight: bold;
    }

    @media (min-width: 750px) {
        display: none;
    }
`;

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);

    function clickHandler() {
        setShowNavbar(prevState => !prevState);
    }

    return (
        <HeaderWrapper>
            <h1>styled-components</h1>

            <Navbar>
                <Menu onClick={clickHandler}>
                    <div />
                    <div />
                    <div />
                </Menu>

                <NavLink to={"/"}>
                    Home
                </NavLink>

                <NavLink to={"/login"}>
                    Login
                </NavLink>
            </Navbar>

            {showNavbar &&
                <MobileNavbar>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>

                    <NavLink to={"/login"}>
                        Login
                    </NavLink>
                </MobileNavbar>
            }
        </HeaderWrapper>
    );
}

export default Header;