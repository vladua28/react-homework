import {getProductById} from "../../services/products/products.service.api";

const ProductShort = ({product, onChoseProduct}) => {
    const {id, title, description, price} = product;


    let onAllProductDetailClick = () => {

        onChoseProduct(id);

    }
    return (
        <li>
            {id}. {title}
            <br/>
            {description}
            <br/>
            price: {price}$
            <br/>
            <button onClick={onAllProductDetailClick}>all product details</button>
            <hr/>
        </li>
    );
};

export {ProductShort};