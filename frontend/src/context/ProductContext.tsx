import { createContext } from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import type { ApiProductsResponse } from "../types/api";
import type { ProductContextType } from "../types/types";

export const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }:{ children: React.ReactNode}) {
    const {
        isLoading,
        error,
        response,
        getProducts
    } = useGetProducts()

    const productsResponse: ApiProductsResponse = {
        data: response?.data || [],
        column_names: response?.column_names || []
    };

    const totalProducts = response?.data?.length || 0;

    return (
        <ProductContext.Provider
            value={{
                isLoading,
                error,
                productsResponse,
                totalProducts,
                getProducts
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}
