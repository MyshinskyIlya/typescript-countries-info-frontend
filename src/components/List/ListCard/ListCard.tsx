import React, { FC } from "react";
import styled from "styled-components";

interface ListCardProps {
    img?: string;
    name?: string;
    info?: any[];
    listCardHanlder: (name: string) => void;
}

const Wrapper = styled.div`
    border-radius: var(--radii);
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    height: 200px;
    object-position: center;
    box-shadow: var(--shadow);
`;

const CardBody = styled.div`
    padding: 2rem 2rem;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0;
`;

const CardListItem = styled.li`
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);
    & > b {
        font-weight: var(--fw-bold);
    }
`;

export const ListCard: FC<ListCardProps> = ({
    img,
    name,
    info = [],
    listCardHanlder,
}) => {
    return (
        <Wrapper onClick={() => listCardHanlder(name as string)}>
            <CardImage src={img} alt="flag"></CardImage>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el, index) => (
                        <CardListItem key={index}>
                            <b>{el.title}: </b>
                            {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};
