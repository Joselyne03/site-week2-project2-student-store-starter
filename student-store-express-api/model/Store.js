const productData = require("../data/db.json");

//backend of the store 

let products = productData;

const getAllProducts = () =>{
    return productData;
}

const getProductById = (id) => {
    const item = productData.products.find((product) => 
        {return product.id === id}
    )
    return item;

}

module.exports = {
    getAllProducts,
    getProductById
}