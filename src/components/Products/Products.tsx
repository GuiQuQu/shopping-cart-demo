import React from "react";
import { IProduct } from "../../models";
import Product from "./Product/Product";
import * as S from "./style";

interface IProps {
    products: IProduct[];
}

const Products: React.FC<IProps> = ({ products }: IProps) => {
    return (
        <S.Container>
            {products.map(p => (<Product product={p} key={p.sku} />))}
        </S.Container>
    );
};

export default Products;