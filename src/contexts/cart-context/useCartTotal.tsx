import { useCartContext } from "./CarContextProvider";
import { ICartProduct } from "../../models";
import { ICartTotal } from "../../models";
import { useCurrencyContext } from "../currencyProvider";
const useCartTotal = () => {
    const { total, setTotal } = useCartContext();
    const { currencyType, currencyFormat } = useCurrencyContext();
    const updateCartTotal = (products: ICartProduct[]) => {

        let sumQuantity = 0;
        let sumPrice = 0;
        let maxInstallments = 0;
        for (let i = 0; i < products.length; ++i) {
            sumQuantity += products[i].quantity;
            sumPrice += products[i].quantity * products[i].price;
            maxInstallments = Math.max(maxInstallments, products[i].installments);
        };

        const newCartTotal: ICartTotal = {
            productQuantity: sumQuantity,
            installments: maxInstallments,
            totalPrice: sumPrice,
            currencyType: currencyType,
            currencyFormat: currencyFormat,
        };
        setTotal(newCartTotal);
    };

    return { total, updateCartTotal };
};

export default useCartTotal;
