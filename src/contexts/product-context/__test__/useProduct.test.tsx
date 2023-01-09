import { renderHook } from '@testing-library/react';

import React, { ReactNode } from 'react';

import { IProduct, ICartProduct } from './../../../models';
// 虚假数据
import { mockProducts } from '../../../utils/mock';
import useProducts from './../useProducts';
import { ProductsProvider } from '../ProductsContextProvider';

// const warpper = ({ children }: { children: ReactNode }) => {
//     <ProductsProvider>{children}</ProductsProvider>
// }


describe("[context] - Products Context", () => {
    describe("useProducts", () => {
        let isFetching: boolean = false;
        let products: IProduct[] = []; // 多了quantity属性
        let filters: string[] = [];
        const originalUseContext = React.useContext;

        const setUpMockUseContext = (options: {
            initialProducts?: IProduct[],
            initialFilters?: string[]
        }): void => {
            isFetching = false;
            products = options.initialProducts || [];
            filters = options.initialFilters || [];

            const mockSetIsFetching = jest.fn().mockImplementation(
                (newValue: boolean) => {
                    isFetching = newValue;
                    return isFetching;
                });

            const mockSetProducts = jest.fn().mockImplementation(
                (mockProducts: ICartProduct[]) => {
                    products = mockProducts;
                    return products;
                });
            const mockSetFilters = jest.fn().mockImplementation(
                (newFilters: string[]) => {
                    filters = newFilters;
                    return filters;
                });
            const mockUseContext = jest.fn().mockImplementation(() => {
                return {
                    isFetching: isFetching,
                    setIsFeching: mockSetIsFetching,
                    products: products,
                    setProducts: mockSetProducts,
                    filters: filters,
                    setFilters: mockSetFilters
                }
            });
            React.useContext = mockUseContext;
        };

        const resetMocks = () => {
            React.useContext = originalUseContext;
        };

        describe("fetchProducts", () => {
            afterEach(() => {
                resetMocks();
            });

            test("should filter products", async () => {
                setUpMockUseContext({ initialProducts: mockProducts });
                const { result } = renderHook(() => useProducts(), {});
                expect(products).toEqual(mockProducts);

            });
        })
    })



});