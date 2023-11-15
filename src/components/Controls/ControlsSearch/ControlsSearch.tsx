import React, { FC } from "react";

import styled from "styled-components";

import { IoSearch } from "react-icons/io5";

interface ControlsSearchProps {
    search: string;
    setSearch: (item: string) => void;
}

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        margin-bottom: 0rem;
        width: 280px;
    }
`;
const Input = styled.input.attrs({
    type: "search",
    placeholder: "Search for a country...",
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    background-color: var(--colors-ui-base);
    color: var(--colors-text);
`;

export const ControlsSearch: FC<ControlsSearchProps> = ({
    search,
    setSearch,
}) => {
    return (
        <InputContainer>
            <IoSearch></IoSearch>
            <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            ></Input>
        </InputContainer>
    );
};
