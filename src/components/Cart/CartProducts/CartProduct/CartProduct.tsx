import React from "react"
import { ICartProduct } from "../../../../models";
import * as S from "./style";
import useCart from './../../../../contexts/cart-context/useCart';
import formatPrice from './../../../../utils/formatPrice';

interface IProps {
    product: ICartProduct;
}

const CartProduct: React.FC<IProps> = ({ product }: IProps) => {

    const { removeProduct, increaseProductQuantity, decreaseProductQuantity } = useCart();
    const {
        sku,
        title,
        price,
        style,
        currencyType,
        currencyFormat,
        availableSizes,
        quantity
    } = product;

    const handleRemoveProduct = () => removeProduct(product);
    const handleIncreaseProductQuantity = () => increaseProductQuantity(product, 1);
    const handleDecreaseProductQuantity = () => {
        if (quantity <= 1)
            removeProduct(product);
        else
            decreaseProductQuantity(product, 1);
    };

    return (
        <S.Container>
            <S.DeleteButton onClick={handleRemoveProduct}
                title={"删除该商品"}
            />
            <S.Image
                src={require(`../../../../static/products/${sku}-1-cart.webp`)}
                alt={title}
            />
            <S.Details>
                <S.Title>{title}</S.Title>
                <S.Desc>
                    {`${availableSizes[0]} | ${style}`} <br />
                    数量: {quantity}
                </S.Desc>
            </S.Details>
            <S.Price>
                <p>{`${currencyFormat}  ${formatPrice(price)}`}</p>
                <div>
                    <S.ChangeQuantity onClick={handleDecreaseProductQuantity}>-</S.ChangeQuantity>
                    <S.ChangeQuantity onClick={handleIncreaseProductQuantity}>+</S.ChangeQuantity>
                </div>
            </S.Price>
        </S.Container>)
};

export default CartProduct;