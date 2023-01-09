import { KeyboardEvent } from "react";
import React from "react";
import { IProduct } from './../../../models/index';
import useCart from './../../../contexts/cart-context/useCart';
import formatPrice from './../../../utils/formatPrice';
import * as S from "./style";
interface IProp {
    product: IProduct;
}

const Product: React.FC<IProp> = ({ product }: IProp) => {
    const { openCart, addProduct } = useCart();
    const {
        sku,
        title,
        price,
        installments,
        currencyFormat,
        isFreeShipping,
    } = product;
    const formattedPrice = formatPrice(price);
    const dotPosition = formattedPrice.indexOf(".");

    let productInstallment;
    if (installments) {
        const installmentPrice = price / installments;

        productInstallment = (
            <S.Installment>
                <span>or {installments} x</span>
                <b>
                    {currencyFormat}
                    {formatPrice(installmentPrice)}
                </b>
            </S.Installment>
        );
    }
    const handleAddProduct = () => {
        addProduct({ ...product, quantity: 1 });
        // openCart();
    }

    const handleAddProdcutWhenEnter = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.code === "Space") {
            addProduct({ ...product, quantity: 1 });
            openCart();
        };
    }
    return (
        <S.Container onKeyUp={handleAddProdcutWhenEnter} sku={sku}>
            {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>}
            <S.Image alt={title} />
            <S.Title>{title}</S.Title>
            <S.Price>
                <small>{currencyFormat}</small>
                <b>{formattedPrice.substring(0,dotPosition)}</b>
                <span>{formattedPrice.substring(dotPosition)}</span>
                {productInstallment}
            </S.Price>
            <S.BuyButton onClick={handleAddProduct}>
                添加到购物车
            </S.BuyButton>
        </S.Container>
    );
}

export default Product;