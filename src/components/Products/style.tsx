import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);

    @media screen and (min-width: ${props=> props.theme.breakpoints.tablet}) {
        grid-template-columns: repeat(3,1fr);
    }

    @media screen and (min-width: ${props=> props.theme.breakpoints.desktop}) {
        grid-template-columns: repeat(4,1fr);
    }
`;