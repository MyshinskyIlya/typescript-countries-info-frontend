import { FC, useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Details } from "./pages/Details";
import axios from "axios";
import { fetchCountries } from "./API/fetchCountries";

export interface ICountry {
    capital: string;
    flags?: {
        alt?: string;
        png?: string;
        svg?: string;
    };
    name: {
        common: string;
        official: string;
    };
    region: string;
    population: number;
}

export const App: FC = () => {
    const [countries, setCountries] = useState<ICountry[] | null>([]);

    useEffect(() => {
        if (countries?.length === 0) {
            fetchCountries().then((res) => {
                setCountries(res.data);
            });
        }
    }, []);

    return (
        <>
            <Header></Header>
            <Main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home countries={countries}></Home>}
                    ></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                    <Route
                        path="/country/:name"
                        element={<Details></Details>}
                    ></Route>
                </Routes>
            </Main>
        </>
    );
};
