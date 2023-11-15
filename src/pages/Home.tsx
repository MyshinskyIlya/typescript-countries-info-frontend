import { FC, useEffect, useState } from "react";
import { Controls } from "../components/Controls/Controls";
import { List } from "../components/List/List";
import { ListCard } from "../components/List/ListCard/ListCard";
import { useNavigate } from "react-router-dom";
import { ICountry } from "../App";

interface HomeProps {
    countries: ICountry[] | null;
}

export const Home: FC<HomeProps> = ({ countries }) => {
    const navigate = useNavigate();

    const [filteredCountries, setFilteredCountries] = useState<ICountry[]>(
        countries || []
    );

    useEffect(() => {
        setFilteredCountries(countries!);
    }, [countries]);

    const handleSearch = (search: string, region: string) => {
        if (countries?.length) {
            let data = [...countries];

            if (region) {
                data = data.filter((item) => item.region.includes(region));
            }

            if (search) {
                data = data.filter((item) =>
                    item.name.official.toLowerCase().includes(search)
                );
            }

            setFilteredCountries(data);
        }
    };

    const listCardHanlder = (name: string) => {
        if (name) {
            navigate(`/country/${name}`);
        }
    };
    return (
        <>
            <Controls onSearch={handleSearch}></Controls>
            <List>
                {filteredCountries?.map((item) => {
                    const countryInfo = {
                        img: item.flags?.png,
                        name: item.name.official,
                        info: [
                            {
                                title: "Population",
                                description: item.population.toLocaleString(),
                            },
                            {
                                title: "Region",
                                description: item.region,
                            },
                            {
                                title: "Capital",
                                description: item.capital,
                            },
                        ],
                    };

                    return (
                        <ListCard
                            key={item.flags?.png}
                            {...countryInfo}
                            listCardHanlder={listCardHanlder}
                        ></ListCard>
                    );
                })}
            </List>
        </>
    );
};
