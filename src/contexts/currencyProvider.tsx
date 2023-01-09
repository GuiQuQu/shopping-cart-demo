/**
 * 提供全局统一的货币值
 * **/

import React, { ReactNode } from "react";
import { createContext, useState, useContext } from "react";

export interface ICurrency {
    currencyType: string;
    setCurrencyType(newType: string): void;
    currencyFormat: string;
    setCurrencyFormat(newFormat: string): void;
}

const currencyContext = createContext<ICurrency | undefined>(undefined);

const useCurrencyContext = () => {
    const context = useContext(currencyContext);
    if (!context) {
        throw new Error("要使用useCurrencyContext,请先提供currencyContextProvvider");
    }
    return context;
}

interface Props {
    children: ReactNode;
}

const CurrencyContextProvider: React.FC<Props> = (props: Props) => {
    const [currencyType, setCurrencyType] = useState("USD");
    const [currencyFormat, setCurrencyFormat] = useState("$");
    const contextValue: ICurrency = {
        currencyType,
        setCurrencyType,
        currencyFormat,
        setCurrencyFormat
    }
    return <currencyContext.Provider value={contextValue} {...props} />
}


export { useCurrencyContext, CurrencyContextProvider }