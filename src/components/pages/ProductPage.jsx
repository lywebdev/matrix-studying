import {NavLink, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ProductContext} from "../../state";
import {config, routes} from "../../App";

const ProductPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const { productsState } = useContext(ProductContext);

    useEffect(() => {
        if (productsState === undefined || productsState.length === 0) {
            const products = JSON.parse(localStorage.getItem(config.productsKeyName));

            setProduct(products.find(product => product.id == id));
        } else {
            setProduct(productsState.find(product => product.id == id));
        }
    }, []);

    return <div>
        <h2>{product?.title}</h2>

        <div style={{lineHeight: '150%'}}>
            <div>
                <strong>Name: </strong>
                <span>{product?.title}</span>
            </div>
            <div>
                <strong>Price: </strong>
                <span>{product?.price}</span>
            </div>
            <div>
                <strong>Description: </strong>
                <span style={{lineHeight: '150%'}}>{product?.description}</span>
            </div>
        </div>

        <hr/>

        <NavLink to={routes.products} className='btn'>Go to products</NavLink>
        <NavLink to={routes.editProduct(product.id)} className='btn' style={{marginLeft: '15px'}}>Edit product</NavLink>
    </div>;
}

export default ProductPage;