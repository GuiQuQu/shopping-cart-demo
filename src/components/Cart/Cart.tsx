import React from "react";
import useCart from './../../contexts/cart-context/useCart';
import formatPrice from './../../utils/formatPrice';
import CartProducts from "./CartProducts";
import * as S from "./style";

const Cart: React.FC = () => {
    const { isOpen, openCart, closeCart, products, total } = useCart();

    const handleCheckout = () => {
        if (total.productQuantity) {
            alert(`支付价格: ${total.currencyFormat} ${formatPrice(total.totalPrice)}`);
        } else {
            alert("请先选择商品");
        }
    };

    const handleToggleCart = (isOpen: boolean) => {
        isOpen ? closeCart() : openCart();
    }

    return (
        <S.Container isOpen={isOpen}>
            <S.CartButton onClick={() => handleToggleCart(isOpen)}>
                {isOpen ? (
                    <span>X</span>
                ) : (
                    <S.CartIcon>
                        <S.CartQuantity title="购物车中的产品数量">
                            {total.productQuantity}
                        </S.CartQuantity>
                    </S.CartIcon>
                )}
            </S.CartButton>

            {isOpen && (
                <S.CartContent>
                    <S.CartContontentHeader>
                        <S.CartIcon large>
                            <S.CartQuantity>
                                {total.productQuantity}
                            </S.CartQuantity>
                        </S.CartIcon>
                        <S.HeaderTitle>购物车</S.HeaderTitle>
                    </S.CartContontentHeader>
                    <S.CartMain>
                        <CartProducts products={products}></CartProducts>
                    </S.CartMain>
                    <S.CartFooter>
                        <S.Sub>金额</S.Sub>
                        <S.SubPrice>
                            <S.SubPriceValue>
                                {`${total.currencyFormat} ${formatPrice(total.totalPrice)}`}
                            </S.SubPriceValue>
                            <S.SubPriceInstallment>
                                {total.installments ? (
                                    <span>
                                        {`分期付款金额 ${total.installments} x ${total.currencyFormat} ${formatPrice(total.totalPrice / total.installments)
                                            }`}
                                    </span>
                                ) : null}
                            </S.SubPriceInstallment>
                        </S.SubPrice>
                        <S.CheckoutButton onClick={handleCheckout}>
                            支付
                        </S.CheckoutButton>
                    </S.CartFooter>
                </S.CartContent>
            )}
        </S.Container>
    );
};

export default Cart;

