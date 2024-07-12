import ProductForm from "../features/ProductForm";
import {useContext, useState} from "react";
import {ProductContext} from "../../state";
import {routes} from "../../App";
import {actions} from "../../state/productReducer";
import {NavLink} from "react-router-dom";

const CreateProduct = () => {
    const {dispatchProducts} = useContext(ProductContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

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
            type: actions.add,
            payload: {
                title: title,
                price: price,
                description: description,
            },
        });

        window.location.href = routes.products;
    }


    return <div>
        <h1>Creating a new product</h1>
        <ProductForm
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
    </div>
}

export default CreateProduct;