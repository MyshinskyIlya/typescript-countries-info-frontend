import { FC, useEffect, useState } from "react";
import { ControlsSearch } from "./ControlsSearch/ControlsSearch";
import { ControlsCustomSelect } from "./ControlsCustomSelector/ControlsCustomSelect";
import styled from "styled-components";

interface ControlsProps {
    onSearch: (search: string, region: string) => void;
}

interface IRegion {
    value: string;
    label: string;
}

const options = [
    {
        value: "Africa",
        label: "Africa",
    },
    {
        value: "America",
        label: "America",
    },
    {
        value: "Asia",
        label: "Asia",
    },
    {
        value: "Europe",
        label: "Europe",
    },
    {
        value: "Oceania",
        label: "Oceania",
    },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Controls: FC<ControlsProps> = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState<IRegion | null>(null);

    useEffect(() => {
        onSearch(search.toLocaleLowerCase(), region?.value!);
    }, [search, region]);

    return (
        <Wrapper>
            <ControlsSearch
                search={search}
                setSearch={setSearch}
            ></ControlsSearch>
            <ControlsCustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region}
                onChange={(newValue: IRegion | null, actionMeta: any) =>
                    setRegion(newValue)
                }
            ></ControlsCustomSelect>
        </Wrapper>
    );
};
