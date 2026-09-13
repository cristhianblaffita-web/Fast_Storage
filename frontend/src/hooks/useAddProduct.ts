import { useState } from "react";
import api from "../api/api";
import type { ProductInput } from "../types/products";

export function useAddProduct() {
    const [isProcessLoading, setIsProcessLoading] = useState(false);
    const [processError, setProcessError] = useState<unknown | null>(null);

    async function addProduct(product: ProductInput) {
        if (isProcessLoading) return;

        try {
            setIsProcessLoading(true);
            await api.post('/products', product);
        } catch (err) {
            setProcessError(err);
            console.error('Something went wrong adding products', err);
        } finally {
            setIsProcessLoading(false);
        }
    }

    return { isProcessLoading, processError, addProduct }
}