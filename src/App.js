import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import {useReducer} from "react";
import {ProductContext, productReducer} from "./state";
import CreateProduct from "./components/pages/CreateProduct";
import './App.scss';
import ProductPage from "./components/pages/ProductPage";
import EditProduct from "./components/pages/EditProduct";

export const routes = {
  products: '/products',
  newProduct: '/products/new',
  showProduct: id => id ? `/products/show/${id}` : `/products/show/:id`,
  editProduct: id => id ? `/products/edit/${id}` : `/products/edit/:id`,
};

export const config = {
  productsKeyName: 'products',
};


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.products,
        element: <ProductsPage />,
      },
      {
        path: routes.newProduct,
        element: <CreateProduct />
      },
      {
        path: routes.showProduct(),
        element: <ProductPage />
      },
      {
        path: routes.editProduct(),
        element: <EditProduct />
      }
    ],
  }
]);

const App = () => {
  const [productsState, dispatchProducts] = useReducer(productReducer, []);


  return <>
    <ProductContext.Provider value={{productsState, dispatchProducts}}>
      <RouterProvider router={router} />
    </ProductContext.Provider>
  </>
}

export default App;