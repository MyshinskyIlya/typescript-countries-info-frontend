import Select from "react-select";
import styled from "styled-components";

export const ControlsCustomSelect = styled(Select).attrs({
    styles: {
        control: (provided: any): any => ({
            ...provided,
            backgroundColor: "var(--colors-ui-base)",
            color: "var(--colors-text)",
            borderRadius: "var(--radii)",
            padding: "0.25rem",
            border: "none",
            boxShadow: "var(--shadow)",
            height: "50px",
        }),

        option: (provider, state): any => ({
            ...provider,
            cursor: "pointer",
            color: "var(--colors-text)",
            backgroundColor: state.isSelected
                ? "var(--colors-bg)"
                : "var(--colors-ui-base)",
        }),
    },
})`
    width: 100%;
    border-radius: var(--radii);
    font=family: var(--family);

    & > * {
        box-shadow: var(--shadow);
    }

    & input {
        padding-left: 0.25rem;
    }

    & * {
        color: var(--colors-text) !important;
    }

    & > div[id] {
        background-color: var(--colors-bg);
    }

    @media (min-width: 767px) {
        width: 200px;
    }
`;
