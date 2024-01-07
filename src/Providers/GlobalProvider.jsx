/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { getProductsData } from "../api/utils";


export const GLOBALCONTEXT = createContext(null)

const GlobalProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const productsData = async () => {
        const result = await getProductsData()
        setProducts(result?.Items)
    }

    const data = {
        products
    }

    useEffect(() => {
        productsData()
    }, [])

    return (
        <GLOBALCONTEXT.Provider value={data}>
            {children}
        </GLOBALCONTEXT.Provider>
    );
};

export default GlobalProvider;