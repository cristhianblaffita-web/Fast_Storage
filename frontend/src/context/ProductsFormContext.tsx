import { createContext, useReducer } from "react";
import { productInitialState, productsFormReducer } from "../utils/productsFormReducer";
import { ProductsFormReducerActionKinds, type ProductsFormContextType } from "../types/types";
import type { ProductInput } from "../types/products";

export const ProductsFormContext = createContext<ProductsFormContextType | null>(null);

export function ProductsFormProvider(
    {
        children
    }: {
        children: React.ReactNode
    }) {
        
    const [formProduct, dispatch] = useReducer(productsFormReducer, productInitialState);

    function editProduct(product: ProductInput) {
        dispatch({type: ProductsFormReducerActionKinds.ALL, payload: product});
    }

    function clearForm() {
        dispatch({type: ProductsFormReducerActionKinds.CLEAR_ALL, payload: null});
    }
    
    return (
        <ProductsFormContext.Provider
            value={{
                formProduct,
                dispatch,
                editProduct,
                clearForm
            }}
        >
            {children}
        </ProductsFormContext.Provider>
    )
}