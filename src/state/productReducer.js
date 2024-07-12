import { v4 as uuid } from 'uuid';
import {config} from "../App";

export const actions = {
    add: 'add',
    delete: 'delete',
    updateAll: 'updateAll',
    update: 'update'
};

export function productReducer(state, action) {
    switch (action.type) {
        case actions.add: {
            const { title, price, description } = action.payload;

            const newState = [
                ...state,
                {
                    id: uuid(),
                    title: title,
                    price: price,
                    description: description,
                }
            ];

            localStorage.setItem(config.productsKeyName, JSON.stringify(newState));

            return newState;
        }
        case actions.update: {
            const { id, title, price, description } = action.payload;

            const newState = state.map(product => {
                if (product.id === id) {
                    product.title = title;
                    product.priec = price;
                    product.description = description;
                }

                return product;
            });

            localStorage.setItem(config.productsKeyName, JSON.stringify(newState));

            return newState;
        }
        case actions.delete: {
            const { id } = action.payload;

            const newState = state.filter((product) => product.id != id);
            localStorage.setItem(config.productsKeyName, JSON.stringify(newState));

            return newState;
        }
        case actions.updateAll: {
            return action.payload;
        }

        default:
            throw new Error('Unknown action');
    }
}