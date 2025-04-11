import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { CartContext } from '../../contexts/CartContext'


function CartItem({item}) {
    const { id, title, price, image, amount } = item;
    const { increaseAmount, removeFromCart, decreaseAmount } = useContext(CartContext); // Access the addToCart function from CartContext

  return (
  <div key={id} className='relative flex w-full md:w-4/7 bg-orange-100 p-2 pt-3 rounded-lg shadow-md mb-4 justify-self-center'>
    <div className='p-3 pr-0'>
      <Link ><img src={image} alt="" className='w-50 h-full md:h-30 object-fill object-center'/></Link>  
    </div>
    <div className='flex flex-col w-full justify-center items-center'>

      <div className='flex flex-col w-full justify-center items-center'>
        <h1 className='text-lg font-bold'>{title}</h1>
        <p className='font-thin'>${price}</p>
      </div>
      <div className='flex justify-center items-center w-full ' >
        <button onClick={()=> {increaseAmount(id)}} className='bg-orange-100 p-2 hover:scale-110 text-xl cursor-pointer'>
          <IoMdAdd />
        </button>
        <div>
          <p className='text-lg font-bold'>{amount}</p>
        </div>
        <button onClick={() => {decreaseAmount(id)}} className='bg-orange-100 p-2 hover:scale-110 text-xl cursor-pointer'>
          <IoMdRemove />   
        </button>
      </div>
      <div className='-mb-1'>
        <p className='text-lg font-bold'>${ price * amount }</p>
      </div>
    </div> 
    <div>
      <button onClick={() => {removeFromCart(id)}} className='text-2xl cursor-pointer'><IoMdClose /></button>
    </div>
  </div>
  )
}

export default CartItem