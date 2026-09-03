export interface ProductInput {
    name: string;
    description: string;
    price: number;
    quantity: number;
};

export interface ProductOutput extends ProductInput {
    id: number;
}
