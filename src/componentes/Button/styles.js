import styled from "styled-components";

export const StyledButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 1;
    transition: .15s opacity ease;
    padding: 0px;
    font-size: 12px;
    font-weigth: 300;

    &:hover {
        opacity: .75;
    }

    & svg {
        margin-right: 5px;
    }
`