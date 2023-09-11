const getProducts = () => {
    return fetch(`https://dummyjson.com/products/`)
        .then(value => value.json())
}

const getProductById = (id) => {
    return fetch(`https://dummyjson.com/products/${id}`)
        .then(value => value.json())
}

const searchProducts = (query) => {
    return fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(value => value.json())
}
 

export {getProducts, getProductById, searchProducts}