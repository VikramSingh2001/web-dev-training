import React, { useState, useEffect } from 'react';
import Productcard from './Productcard';
import './Productcardlist.css';
const ProductCardList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts =  () => {
            setTimeout(async ()=>{
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            }
            catch (error) {
                console.error('Error in fetching products:', error);
            }
                setLoading(false);
        },5000)
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-card-list">
            {products.map(product => (
                <Productcard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCardList;