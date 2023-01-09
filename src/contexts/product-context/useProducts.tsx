
import { useCallback } from "react";
import { IProduct } from "../../models"
import { useProductsContext } from "./ProductsContextProvider"
import { getProductsAsync } from "../../services/product";

/**
 * 这个Hook获取Context数据,并且根据Context完成下面两个操作
 * - 获取所有产品
 * - 过滤产品
 * **/

const useProducts = () => {

    const {
        isFetching,
        setIsFetching,
        products,
        setProducts,
        filters,
        setFilters,
    } = useProductsContext();

    // 定义获取所有物品的函数
    const fetchpProducts = useCallback(async () => {
        setIsFetching(true);
        const gettedProducts:IProduct[] = await getProductsAsync();
        setIsFetching(false);
        setProducts(gettedProducts);
    }, [setIsFetching, setProducts]);

    const filterProducts = async (filters: string[]) => {
        let filteredProducts: IProduct[];
        const gettedProducts:IProduct[] = await getProductsAsync();
        if (filters && filters.length > 0) {
            filteredProducts = gettedProducts.filter((p: IProduct) => {
                return p.availableSizes.some((size) => filters.some((filter) => filter === size));
            });
        } else {
            filteredProducts = gettedProducts;
        }
        setFilters(filters);
        setProducts(filteredProducts);
    };
    return {
        isFetching,
        products,
        fetchpProducts,
        filterProducts,
        filters,
    }
};

export default useProducts;
