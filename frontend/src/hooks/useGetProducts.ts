import { useEffect, useState } from "react";
import api from "../api/api";
import type { ApiProductsResponse } from "../types/api";

export function useGetProducts() {
    const [response, setResponse] = useState<ApiProductsResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    async function getProducts() {
        try {
            setIsLoading(true);
            setError(null);

            const { data } = await api.get<ApiProductsResponse>("/products");
            setResponse(data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
 
    return { response, isLoading, error, getProducts}
}