import styled from "styled-components";



export const BuyButton = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    padding: 15px 0;
    cursor: pointer;
    margin-top:10px;
    width: 100%;
    border: 0;

    transition: background-color 0.2s;

    &:focus-visible {
        outline: 3px solid ${props => props.theme.colors.secondary};
    }
`;

interface IImage {
    alt: string
}
export const Image = styled.div<IImage>``;

interface IContainer {
    sku: number | string
}

export const Container = styled.div<IContainer>`
    position: relative;
    text-align:center;
    box-sizing:border-box;
    cursor:default;
    padding: 10px;
    margin-bottom:30px;
    outline:none;

    &:focus-visible {
        outline: 3px solid ${props => props.theme.colors.secondary}
    }

    ${Image} {
        width:100%;
        height: 270px;
        position:relative;
        background-image:${props => `url(${require(`../../../static/products/${props.sku}-1-product.webp`)})`};
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        
        ::before {
        content: "";
            display:block;
            position:absolute;
            background: #eee;
            width:100%;
            height:100%;
            z-index: -1;
        }

        @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
            height: 320px;
        }
    }
 

    &:hover {
        ${Image} {
            background-image:${props => `url(${require(`../../../static/products/${props.sku}-2-product.webp`)})`};
        }

        ${BuyButton} {
        background-color: ${props => props.theme.colors.secondary};
        }
    }


`;

export const Stopper = styled.div`
    position:absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    font-size: 0.6em;
    color: #ececec;
    background-color: ${props => props.theme.colors.primary};
    cursor: default;
    z-index: 1;
`;

export const Title = styled.p`
    position:relative;
    padding: 0 20px;
    height: 45px;
    
    &::before {
        content: "";
        width: 20px;
        height: 2px;
        background-color: ${props => props.theme.colors.secondary};
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -10px;
    }
`;

export const Price = styled.div`
    height:60px;
    & b {
        font-size: 1.5em;
        margin-left: 5px;
    }
`;

export const Val = styled.p`
`;

export const Installment = styled.p`
    margin: 0;
    color: #9c9b9b;
`;