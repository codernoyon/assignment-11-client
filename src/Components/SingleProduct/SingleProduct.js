import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product, handleDeleteProduct}) => {
    const {_id, name, img, price, quantity, supplier } = product;

    return (
        <div data-aos="flip-up" data-aos-duration="1500" className="flex bg-gray-50 items-center shadow-sm hover:shadow-md duration-200 cursor-pointer rounded py-3 md:py-0 w-full border hover:scale-[1.01]">
            <div className='w-20 md:w-32'>
                <img src={img} alt="" className="w-full rounded" />
            </div>
            <div className='pl-3 pr-2 md:pr-5 flex justify-between w-full md:items-center'>
                <div>
                    <p className="text-sm md:text-base">{name}</p>
                    <small>By {supplier}</small>
                </div>
                <p className='text-left text-sm md:text-base'>Price: ${price}</p>
                <p className='text-sm md:text-base'>Quantity: {quantity}</p>
                <div className=' flex flex-col md:flex-row'>
                    <Link to={`/product/${_id}`} className="text-sm md:text-base hover:bg-transparent text-center duration-200 hover:text-blue-400 bg-blue-400 px-2 md:px-4 py-1 ring-2 ring-blue-400 rounded text-white mb-2 md:mb-0 md:mr-2">
                        Update
                    </Link>
                    <button onClick={() => handleDeleteProduct(_id)} className="text-sm md:text-base hover:bg-transparent duration-200 hover:text-red-400 bg-red-400 px-2 md:px-4 py-1 ring-2 ring-red-400 rounded text-white">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;