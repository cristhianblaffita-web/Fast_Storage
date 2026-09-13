import { useState } from "react";
import api from "../api/api";

export function useDeleteProduct() {
    const [isProcessLoading, setIsProcessLoading] = useState(false);
    const [processError, setProcessError] = useState<unknown | null>(null);

    async function deleteProduct(productId: number) {
        if (isProcessLoading) return;

        try {
            setIsProcessLoading(true);
            await api.delete(`/products/${productId}`);
        } catch (err) {
            setProcessError(err);
            console.error('Something went wrong deleting products', err);
        } finally {
            setIsProcessLoading(false);
        }
    }

    return { deleteProduct, isProcessLoading, processError };
}