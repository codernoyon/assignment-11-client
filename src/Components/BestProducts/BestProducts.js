import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const BestProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('https://salty-refuge-04381.herokuapp.com/product?limit=6&pageNumber=0');
            setProducts(data.data);
        }
        fetchProducts();
    },[])
    return (
        <div className='py-24'>
            <div className="container mx-auto px-5 lg:px-16">
                <div data-aos="zoom-in" data-aos-duration="1000" className='space-y-2 text-center mb-10'>
                    <h2 className="text-2xl">See What's Trending Now</h2>
                    <p>From the world's best brands and boutiques.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        products?.map(product => <Product product={product} key={product._id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestProducts;