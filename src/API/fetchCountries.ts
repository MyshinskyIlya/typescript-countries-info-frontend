import axios from "axios";
import { ICountry } from "../App";
import { ALL_COUNTRIES, searchByCountry } from "./config";

export const fetchCountries = async () => {
    const response = await axios.get<ICountry[] | null>(ALL_COUNTRIES);

    return response;
};

export const fetchCountry = async (name: string) => {
    const response = await axios.get(searchByCountry(name));

    return response;
};
