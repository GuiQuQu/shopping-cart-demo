import styled from "styled-components";


export const Container = styled.div``;

export const SideContainer = styled.div`
    display: flex;
    flex-direction:column;
    box-sizing: border-box;
    padding: 15px;
    
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        flex-grow: 0;
    }
`;

export const Main = styled.div``;

export const MainContainer = styled.div`
    
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        flex-grow: 1;
    }
`;

// pc布局 左右 1:2
// 手机布局 上下
export const TwoColumnFlex = styled.div`
    display:flex;
    max-width: 1200px;
    margin: 50px auto auto;
    flex-direction:column;
    align-items:center;

    @media screen and (min-width:${props => props.theme.breakpoints.tablet}) {
        flex-direction:row;
        margin: 80px auto auto;
        align-items:flex-start;
    }
`;

export const MainHeader = styled.main`
    display:flex;
    justify-content:flex-start;
    margin-bottom: 10px;
    margin-left:20px;
`;