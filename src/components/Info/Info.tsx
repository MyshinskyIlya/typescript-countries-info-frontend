import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { filterByCode } from "../../API/config";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
    margin-top: 2rem;
    width: 100%;

    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media (min-width: 1024px) {
        gap: 4rem;
        flex-direction: row;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media (min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    cursor: pointer;
    box-shadow: var(--shadow);
    line-height: 1.5;
`;

interface IInfo {
    name: {
        common?: string;
        official?: string;
    };
    nativeName: string;
    flags: any;
    capital: string[];
    population: number;
    region: string;
    subregion: string;
    tld?: [];
    currencies: any;
    languages: [];
    borders?: [];
    push?: any;
}

export const Info: FC<IInfo> = (props) => {
    const navigate = useNavigate();

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (props.borders) {
            axios.get(filterByCode(props.borders)).then((res) => {
                setNeighbors(res.data.map((c: any) => c.name.common));
            });
        }
    }, [props.borders]);

    const neighborsHandler = (name: string) => {
        if (neighbors) {
            navigate(`/country/${name}`);
        }
    };

    return (
        <Wrapper>
            <InfoImage
                src={props.flags.svg}
                alt={props.name.common}
            ></InfoImage>

            <div>
                <InfoTitle>{props.name.common}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Official Name: </b> {props.name.official}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b> {props.population}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b> {props.region}
                        </ListItem>
                        <ListItem>
                            <b>Sub region: </b> {props.subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b> {props.capital.join(", ")}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain: </b>
                            {props.tld?.map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currencies: </b>
                            {Object.keys(props.currencies).map((key: any) => {
                                return (
                                    <span key={key}>
                                        {props.currencies[key].name}
                                    </span>
                                );
                            })}
                        </ListItem>
                        <ListItem>
                            <b>Languages: </b>

                            {Object.keys(props.languages).map((key: any) => (
                                <span key={key}>{props.languages[key]}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>

                <Meta>
                    <b>Border Countries:</b>
                    {props.borders ? (
                        <TagGroup>
                            {neighbors.map((b) => (
                                <Tag
                                    key={b}
                                    onClick={() => neighborsHandler(b)}
                                >
                                    {b}
                                </Tag>
                            ))}
                        </TagGroup>
                    ) : (
                        <span>There is no border countries</span>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
};
