import { useContext } from "react";
import { ProductsFormContext } from "../context/ProductsFormContext";

export function useProductsFormContext() {
    const context = useContext(ProductsFormContext);

    if (!context) {
        throw new Error("The useProductsFormContext hook must be used into a ProductsFormProvider component")
    }

    return context;
}