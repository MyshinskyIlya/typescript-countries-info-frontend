import { useNavigate, useParams } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { fetchCountry } from "../API/fetchCountries";
import { Button } from "../components/Button/Button";
import { Info } from "../components/Info/Info";

export const Details = () => {
    const navigate = useNavigate();
    const { name } = useParams();

    const [country, setCountry] = useState<any>(null);

    useEffect(() => {
        if (name) {
            fetchCountry(name).then(({ data }) => {
                setCountry(data[0]);

                console.log(data[0]);

                console.log(country);
            });
        }
    }, [name]);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack></IoArrowBack>
                Back
            </Button>

            {country && <Info {...country}></Info>}
        </div>
    );
};
