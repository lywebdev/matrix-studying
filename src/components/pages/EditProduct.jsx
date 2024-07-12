import ProductForm from "../features/ProductForm";
import {useContext, useEffect, useState} from "react";
import {ProductContext} from "../../state";
import {config, routes} from "../../App";
import {actions} from "../../state/productReducer";
import {NavLink, useParams} from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const {productsState, dispatchProducts} = useContext(ProductContext);

    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);

    useEffect(() => {
        if (productsState === undefined || productsState.length === 0) {
            const products = JSON.parse(localStorage.getItem(config.productsKeyName));

            setProduct(products.find(product => product.id == id));
        } else {
            setProduct(productsState.find(product => product.id == id));
        }
    }, []);

    useEffect(() => {
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
    }, [product]);


    const onTitleUpdate = event => {
        setTitle(event.target.value);
    }

    const onPriceUpdate = event => {
        setPrice(event.target.value);
    }

    const onDescriptionUpdate = event => {
        setDescription(event.target.value);
    }



    const addProduct = () => {
        dispatchProducts({
            type: actions.update,
            payload: {
                id: product.id,
                title: title,
                price: price,
                description: description,
            },
        });

        window.location.href = routes.products;
    }


    return <div>
        <h1>Editing {product?.title}</h1>
        <ProductForm
            id={product?.id}
            onSubmit={addProduct}
            title={title}
            price={price}
            description={description}
            onTitleUpdate={onTitleUpdate}
            onPriceUpdate={onPriceUpdate}
            onDescriptionUpdate={onDescriptionUpdate}
        />

        <hr/>
        <NavLink to={routes.products} className='btn'>Go to products</NavLink>
        <NavLink to={routes.showProduct(product.id)} className='btn' style={{marginLeft: '15px'}}>Show product</NavLink>
    </div>
}

export default EditProduct;