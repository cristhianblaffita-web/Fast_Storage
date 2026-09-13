import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProductProvider } from './context/ProductContext.tsx'
import { ProductsFormProvider } from './context/ProductsFormContext.tsx'

createRoot(document.getElementById('root')!).render(
    <ProductProvider>
      <ProductsFormProvider>
        <App />
      </ProductsFormProvider>
    </ProductProvider>
)
