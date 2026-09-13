import type { ProductsListStateManagerProps } from "../../types/types";

export default function ProductsListStateManager({
  processLoading,
  loadingComponent,
  processError,
  errorComponent,
  children,
}: ProductsListStateManagerProps ) {
  return processLoading
    ? loadingComponent
    : processError
      ? errorComponent
      : children;
}