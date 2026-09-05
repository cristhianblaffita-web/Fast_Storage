import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function useProductContext() {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("The useProductContext hook must be used into a ProductProvider component")
    }

    return context;
}