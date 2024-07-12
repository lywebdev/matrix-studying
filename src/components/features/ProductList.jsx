import './ProductsList.scss';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ProductContext} from "../../state";
import {routes} from "../../App";

const ProductList = ({products}) => {
    const {dispatchProducts} = useContext(ProductContext);

    const deleteProduct = event => {
        event.preventDefault();

        dispatchProducts({
            type: 'delete',
            payload: {
                id: event.target.dataset.productId,
            },
        });
    }

    return (
        <div>
            {
                products && (
                    <table className='products-table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td className='description'>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td className='actions'>
                                        <NavLink to={routes.showProduct(product.id)} className='btn'>Show</NavLink>
                                        <NavLink to={routes.editProduct(product.id)} className='btn'>Edit</NavLink>
                                        <button className='btn' data-product-id={product.id} onClick={deleteProduct}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default ProductList;