import { createContext } from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { useAddProduct } from "../hooks/useAddProduct";
import type { ProductContextType } from "../types/types";
import type { ProductInput } from "../types/products";


export const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const {
        isLoading,
        error,
        response,
        getProducts
    } = useGetProducts()

    const { deleteProduct } = useDeleteProduct();
    const { addProduct } = useAddProduct();

    async function handleAddProduct(product: ProductInput) {
        await addProduct(product);
        await getProducts();
    }

    async function handleDeleteProduct(productId: number) {
        await deleteProduct(productId);
        await getProducts();
    };

    const totalProducts = response?.data?.length || 0;

    return (
        <ProductContext.Provider
            value={{
                isLoading,
                error,
                productsResponse: response,
                totalProducts,
                getProducts,
                handleDeleteProduct,
                handleAddProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}
