import React, { createContext, useContext, useState, ReactNode } from "react";
import { ICartProduct, ICartTotal } from "../../models";

export interface ICartContext {
    isOpen: boolean;
    setIsOpen(state: boolean): void;
    products: ICartProduct[];
    setProducts(products: ICartProduct[]): void;
    total: ICartTotal;
    setTotal(products: any): void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);
const useCartContext = (): ICartContext => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("使用useCartContext,请先提供相关的Provider");
    }
    return context;
}

const totalInitialValues: ICartTotal = {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyType: "USD",
    currencyFormat: "$"
}

interface Props {
    children: ReactNode;
}

const CartProvider: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<ICartProduct[]>([]);
    const [total, setTotal] = useState<ICartTotal>(totalInitialValues);

    const CartContextValue: ICartContext = {
        isOpen,
        setIsOpen,
        products,
        setProducts,
        total,
        setTotal
    }
    return <CartContext.Provider value={CartContextValue} {...props} />
}

export { CartProvider, useCartContext };