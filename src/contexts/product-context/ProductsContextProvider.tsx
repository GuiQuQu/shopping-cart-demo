
import { IProduct } from "../../models";
import { createContext, useContext, useState, ReactNode } from "react";


/**
 * 定义Context以及Context的Provider
 * Context应该有的内容(IProductsContext)
 * - 所有产品,修改函数
 * - 当前过滤字符串,修改函数
 * - 是否正在获取数据
 * - 修改函数
 * 
 * 在Provider中使用3个useState来定好初始值,并返回相应的Provider
 * **/

export interface IProductsContext {
    isFetching: boolean;
    setIsFetching(state: boolean): void;
    products: IProduct[];
    setProducts(products: IProduct[]): void;
    filters: string[];
    setFilters(filters: string[]): void;
};

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

const useProductsContext = (): IProductsContext => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("要使用useProductsContext,请指定ContextProvider");
    }
    return context;
};

interface Props {
    children: ReactNode;
}

const ProductsProvider: React.FC<Props> = (props: Props) => {
    const [isFetching, setIsFetching] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filters, setFilters] = useState<string[]>([]);

    const contextValue: IProductsContext = {
        isFetching,
        setIsFetching,
        products,
        setProducts,
        filters,
        setFilters
    };
    return <ProductsContext.Provider value={contextValue} {...props} />
};

export { ProductsProvider, useProductsContext };
