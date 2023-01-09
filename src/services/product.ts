import axios from "axios";

import { IGetProductsResponse } from "../models";
import { IProduct } from './../models/index';

const isProdcution = process.env.NODE_ENV === 'production';

export const getProductsAsync = async () => {
    let response: IGetProductsResponse;
    if (isProdcution) {
        response = await axios.get("url");
    } else {
        response = require("../static/json/products-old.json");
    }
    throw new Error("人为异常");
    const { products } = response.data || [];
    return products;
}

export const getProductPromise = (): Promise<IProduct[]> => {
    let response: IGetProductsResponse;
    let products:IProduct[] = [];
    if (isProdcution) {
        axios.get("url").then(res => {
             response = res; 
             products = response.data.products;
        });
    }else {
        response = require("../static/json/products.json");
        products = response.data.products || [];
    }
    return Promise.resolve(products);
}