import { useCartContext } from "./CarContextProvider";
import { ICartProduct } from "../../models";
import useCartTotal from "./useCartTotal";

/**
 * 数组map方法,对于数组中每一个元素都应用一个函数,要求返回值,然后创建一个新数组,不修改原数组
 * 数组filter方法,对于数组中每一个元素都应用一个函数,要求返回布尔值,然后创建一个新数组,保留返回true的值,不修改原数组
 * **/

const useCartProducts = () => {
    const { products, setProducts } = useCartContext();
    const { updateCartTotal } = useCartTotal();

    // 更新已经存在的物品的数量
    const updateQuantitySafely = (
        currentProduct: ICartProduct,
        targetProduct: ICartProduct,
        updateQuantity: number
    ) => {
        if (currentProduct.id === targetProduct.id) {
            // Object.assign,拷贝方法,对于简单属性,会赋值一份,
            //但是对于对象属性,只会复制其引用,浅拷贝
            return Object.assign({}, {
                ...currentProduct,
                quantity: Math.max(0,currentProduct.quantity + updateQuantity)
            });
        } else {
            return currentProduct;
        }
    };

    // 添加物品
    const addProduct = (newProduct: ICartProduct) => {
        let updatedProducts;
        const isProductAlreadyInCart = products.some(
            (p: ICartProduct) => newProduct.id === p.id);
        if (isProductAlreadyInCart) {
            updatedProducts = products.map((product: ICartProduct) => {
                return updateQuantitySafely(product, newProduct, newProduct.quantity);
            });
        } else {
            updatedProducts = [...products, newProduct];
        }
        setProducts(updatedProducts);
        updateCartTotal(updatedProducts);
    };

    // 删除物品
    const removeProduct = (productToRemove: ICartProduct) => {
        const updatedProducts = products.filter((product: ICartProduct) => product.id !== productToRemove.id);
        setProducts(updatedProducts);
        updateCartTotal(updatedProducts);
    };
    // 增加数量
    const increaseProductQuantity = (productToIncrease: ICartProduct, quantity: number) => {
        const updatedProducts = products.map((product: ICartProduct) => {
            return updateQuantitySafely(product, productToIncrease, quantity);
        });
        setProducts(updatedProducts);
        updateCartTotal(updatedProducts);
    };
    // 减少数量
    const decreaseProductQuantity = (productToDecrease: ICartProduct, quantity: number) => {
        const updatedProducts = products.map((product: ICartProduct) => {
            return updateQuantitySafely(product, productToDecrease, -quantity);
        });
        setProducts(updatedProducts);
        updateCartTotal(updatedProducts);
    }
    return {
        products,
        addProduct,
        removeProduct,
        increaseProductQuantity,
        decreaseProductQuantity,
    };
};

export default useCartProducts;