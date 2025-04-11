import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { CartContext } from '../../contexts/CartContext';

function ProductCard({ product }) { 
  const { id, title, price, image } = product; // Destructure the product object to get id, title, price, and image

  if (!product) return null; // Handle case where product is not provided
  
  const { addToCart, removeFromCart } = useContext(CartContext); // Access the addToCart function from CartContext

  return (
    
      <div className='relative group mb-4 rounded-lg shadow-md hover:shadow-lg/50 transition-shadow duration-300 bg-orange-100'>
        <div className='relative'>
          <img src={image} alt="" className='w-80 h-64 object-cover object-center'/>
          <div className='absolute bottom-5 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bottom-1'>
            <button onClick={()=> addToCart(product,id)} className=' bg-orange-100 p-2 rounded-full hover:scale-110 text-xl cursor-pointer mr-2'>
              <FaRegPlusSquare />
              </button>
            <button onClick={() => removeFromCart(id)} className='bg-orange-100 p-2 rounded-full hover:scale-110 text-xl cursor-pointer'>
              <FaRegMinusSquare />   
            </button>
          </div>
        </div>
     <Link to={`/products/${id}`}>
        <div className='w-80 bg-orange-100 flex justify-between'>
          <div>
            <p className='text-lg font-thin font-serif'>{title}</p> 
            <p className='font-medium'>${price}</p>
          </div>
        </div>
      </Link>
    </div>
    
  
    
  )
}

export default ProductCard