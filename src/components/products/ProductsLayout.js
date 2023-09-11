import {useEffect, useState} from "react";
import {ProductShort} from "../product-short/ProductShort";
import {getProductById, getProducts} from "../../services/products/products.service.api";
import {ProductDetails} from "../product-details/ProductDetails";

const ProductsLayout = () => {
    let title = 'Products Main Layout'
    const [products, setProducts] = useState([]);
    const [chosenProduct, setChosenProduct] = useState(null);

    const onChoseProduct = (productId) => {
        getProductById(productId)
            .then(value => {
                setChosenProduct({...value})
            });
    }

    useEffect(() => {
        getProducts()
            .then(({products}) => setProducts(prevState => [...products]));
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            
            {chosenProduct.id && <>
                <hr/>
                <div><ProductDetails details={chosenProduct}/></div>
                <hr/>
            </>}


            <ul>
                {products.map(product => (<ProductShort
                    key={product.id}
                    product={product}
                    onChoseProduct={onChoseProduct}/>))}
            </ul>
        </div>
    );
};

export {ProductsLayout};