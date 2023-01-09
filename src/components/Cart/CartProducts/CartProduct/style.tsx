import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 5%;
`;


export const DeleteButton = styled.button`
    position: absolute;
    top: 4%;
    right: 4%;
    width: 20px;
    height: 20px;
    background-image: url(${require("../../../../static/delete-icon.png")});
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 2;
    cursor: pointer;
    border: 0;
    background-color:transparent;

    &:focus-visible {
        outline: 3px solid ${props => props.theme.colors.secondary};
    }

    transition: height 0.3s;
    transition: width 0.3s;
    
    &:hover {
        width: 28px;
        height: 28px;
    }
`;

export const Title = styled.p`
    margin-top: 0;
`;

export const Desc = styled.div`
    color: #5b5a5e;
`;

export const Image = styled.img`
    display:inline-block;
    vertical-align:middle;
    width: 15%;
    height: auto;
    margin-right:3%;
`;


export const Details = styled.div`
    color: #ececec;
    display:inline-block;
    vertical-align: middle;
    width: 57%;
`;

export const ChangeQuantity = styled.button`
    display:inline-block;
    color: #b7b7b7;
    border: 0;
    box-sizing: border-box;
    background-color: #000;
    width: 24px;
    height: 24px;
    margin-top: 1em;
     &:focus-visible {
        outline: 3px solid ${props => props.theme.colors.secondary};
    }

    transition: background-color 0.3s;
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: #fff;
    }
`;


export const Price = styled.div`
    color: ${props => props.theme.colors.secondary};

    & p {
        margin:0;
        font-size: 20px;
    }
    display: inline-block;
    vertical-align: middle;
    text-align:right;
    width: 25%;
`;

