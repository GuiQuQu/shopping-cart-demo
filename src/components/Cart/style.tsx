import styled from "styled-components";
import { theme } from "../../commons/style/theme";

export const CartButton = styled.button`
    width: 50px;
    height: 50px;
    color: #ececec;
    background-color: ${props => props.theme.colors.primary};
    position: absolute;
    padding: 0;
    margin: 0;
    top:0;
    left:0;
    outline: none;
    cursor: pointer;
    z-index:2;

    &:focus-visible {
        outline: 3px solid ${props => props.theme.colors.secondary};
    }
`;

interface IContainer {
    isOpen: boolean;
}
export const Container = styled.div<IContainer>`
    position:fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : "-100%")};
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
    box-sizing: border-box;
    z-index: 99; 

    transition: right 0.4s;
    ${CartButton} {
        left: ${props => (props.isOpen ? '0' : `-50px`)};
        background-color: ${props => (props.isOpen ? props.theme.colors.black : theme.colors.primary)}
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        width: 450px;
        right: ${props => (props.isOpen ? '0' : "-450px")};

        ${CartButton} {
            left: -50px;
        }
    }
`;


interface ICartIcon {
    large?: boolean;
}

export const CartQuantity = styled.div`
    display:inline-block;
    width: 18px;
    height: 18px;
    color: #0c0b10;
    line-height: 18px;
    font-weight: bold;
    text-align:center;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary};
    position: absolute;
    /* bottom:4px; */
    right: 6px;
`;

export const CartIcon = styled.div<ICartIcon>`
    width: ${props => props.large ? '60px' : '50px'};
    height: ${props => props.large ? '60px' : '50px'};
    position: relative;
    display:inline-block;
    background-image: url(${require("../../static/cart-icon.png")});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    vertical-align: ${props => props.large ? "middle" : "baseline"};
    ${CartQuantity} {
        bottom: ${props => props.large ? "6px" : "4px"}
    }
`;



export const CartContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
`;

export const CartContontentHeader = styled.div`
    color: #ececec;
    box-sizing: border-box;
    text-align: center;
    padding: 45px 0;
    flex-grow:0;
`;

export const CartMain = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        &::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 10px;
            background-color: #0c0b10;
            padding: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #0c0b10;
        }
    }
`;

export const HeaderTitle = styled.span`
    display: inline-block;
    font-weight: bold;
    font-size: 1.2em;
    padding-left: 3px;
    vertical-align:middle;
    
`;

export const Sub = styled.p`
    width: 20%;
    color: #5b5a5e;
    display: inline-block;
    vertical-align:middle;
`;

export const SubPrice = styled.div`
    width: 80%;
    text-align: right;
    color: #5b5a5e;
    display:inline-block;
    vertical-align:middle;
    
    
`;

export const SubPriceValue = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 22px;
    font-weight: 450;
    margin: 0;
`;

export const SubPriceInstallment = styled.p`
    margin: 0;
`;

export const CheckoutButton = styled.button`
    width: 100%;
    border: 0;
    color: #ececec;
    background-color: #0c0b10;
    text-align: center;
    padding: 15px 0;
    margin-top: 40px;
    text-align: center;
    cursor: pointer;
    outline: none;

    transition: background-color 0.3s;

    &:focus-visible {
        outline: 3px solid ${props => props.theme.colors.secondary}
    }
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const CartFooter = styled.div`
    box-sizing: border-box;
    padding: 5%;
    flex-grow: 0;
    width: 100%;
    min-height: 200px;
    z-index: 2;
    background-color: ${props => props.theme.colors.primary};

    // 给footer上方留下了一点空间
    &::before {
        content: "";
        width: 100%;
        height: 20px;
        display: block;
        position:absolute;
        top: -20px;
        left:0;
        background-color: linear-gradient(to, top, rgba(0,0,0,0.2), transparent);
    }
`;