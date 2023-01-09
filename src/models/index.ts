/**
import { Product } from './index';
 * 参考项目命名为IProduct,前缀I意即这是一个接口
 * TypeScript 的官方示例以及之前的 handbook 里都建议不要用 I 作为 interface 前缀，社区里也有很多人反对。
 * **/
export interface IProduct {
    // 产品id
    id:number;
    
    // https://zhuanlan.zhihu.com/p/375713372
    // sku
    sku:number;
    
    title:string;
    description:string;
    availableSizes: string[];
    style:string;
    price:number;
    // 分期付款分期次数
    installments:number;
    // 货币
    currencyType: string;
    currencyFormat:string;
    
    isFreeShipping:boolean;
}

export interface ICartProduct extends IProduct {
    // 数量
    quantity:number;
}

export interface ICartTotal {
    productQuantity: number;
    installments: number;
    totalPrice: number;
    currencyType:string;
    currencyFormat:string;
}

export interface IGetProductsResponse {
    data: {
        products:IProduct[];
    }
}