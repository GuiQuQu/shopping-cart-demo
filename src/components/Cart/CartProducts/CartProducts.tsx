import React from "react";
import { ICartProduct } from "../../../models";
import Products from './../../Products/index';
import CartProduct from "./CartProduct";
import * as S from "./style";

interface IProps {
    products: ICartProduct[];
}

const CartProducts: React.FC<IProps> = ({ products }: IProps) => {

    return (<S.Container>
        {products?.length ? (
            products.map((p) => <CartProduct product={p} key={p.sku}/>)
        ) : (
            <S.CartProductEmpty>
                请先添加商品
                <br />
                <br />
                :)
            </S.CartProductEmpty>
        ) }
    </S.Container>);
}

export default CartProducts;