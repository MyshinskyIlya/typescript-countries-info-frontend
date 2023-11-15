import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { FC, useEffect, useState } from "react";

import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    @media (min-width: 767px) {
        padding: 2rem 0;
    }
`;

const Title = styled(Link)`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

export const Header: FC = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title to={"/"}>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === "light" ? (
                            <IoMoon size="14px"></IoMoon>
                        ) : (
                            <IoMoonOutline size="14px"></IoMoonOutline>
                        )}
                        <span style={{ marginLeft: "0.75rem" }}>
                            {theme} Theme
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
