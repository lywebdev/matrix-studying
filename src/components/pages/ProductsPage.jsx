import {useContext, useEffect} from "react";
import {ProductContext} from "../../state";
import ProductList from "../features/ProductList";
import {NavLink} from "react-router-dom";
import {config, routes} from "../../App";
import {actions} from "../../state/productReducer";

const ProductsPage = () => {
    const { productsState, dispatchProducts } = useContext(ProductContext)

    useEffect(() => {
        const initializeData = async () => {
            const products = localStorage.getItem(config.productsKeyName);

            if (!products) {
                try {
                    const response = await fetch('https://fakestoreapi.com/products');
                    const data = await response.json();
                    localStorage.setItem(config.productsKeyName, JSON.stringify(data));

                    dispatchProducts({
                        type: actions.updateAll,
                        payload: data,
                    });
                } catch (error) {
                    console.log('Error when fetching products: ', error);
                }
            } else {
                dispatchProducts({
                    type: actions.updateAll,
                    payload: JSON.parse(products),
                });
            }
        };

        initializeData();
    }, []);

    const clearLocaleStorage = () => {
        localStorage.removeItem(config.productsKeyName);
        window.location.reload();
    }



    return <div className='products'>
        <h1>Products page</h1>

        <div style={{display: 'flex'}}>
            <NavLink to={routes.newProduct} className='btn'>Create new product</NavLink>
            <button className="btn" onClick={clearLocaleStorage} style={{marginLeft: '10px'}}>Fetch again</button>
        </div>
        <hr/>

        <ProductList products={productsState}/>
    </div>
}


export default ProductsPage;