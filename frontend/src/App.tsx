import { useProductContext } from "./hooks/useProductContext";
import ProductsListStateManager from "./components/products_list/ProductsListStateManager";
import ProductsList from "./components/products_list/ProductsList";
import ProductForm from "./components/products_form/ProductsForm";

function App() {
  const {
    productsResponse,
    totalProducts,
    isLoading,
    error,
    handleDeleteProduct,
    handleAddProduct
  } = useProductContext();

  const loadingCompo = (
    <div className="notification bg-secondary text-white text-sm p-4 rounded-lg shadow-2xl w-[80vw]">
      Fetching products. Please wait.
    </div>
  );
  const errorCompo = <div>{`${error}`}</div>;

  return (
    <main className="grid grid-cols-[1fr] gap-8 text-sm">
      <ProductForm addProductFunc={handleAddProduct} />
      <ProductsListStateManager
        processLoading={isLoading}
        loadingComponent={loadingCompo}
        processError={error}
        errorComponent={errorCompo}
      >
        <ProductsList
          productsResponse={productsResponse}
          totalProducts={totalProducts}
          handleDeleteProduct={handleDeleteProduct}
        />
      </ProductsListStateManager>
    </main>
  );
}

export default App;
