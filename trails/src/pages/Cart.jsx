import React,{ useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartItem from '../components/Products/CartItem'

function Cart() {

    const { cart, clearCart } = useContext(CartContext); // Access the cart from CartContext

  return (
    <div className='h-full'>
        {
            cart.length === 0 ? (
                <div className='flex justify-center items-center h-100'>
                    <h1 className='text-2xl font-bold'>Your cart is empty</h1>
                </div>
            ) : (
    <>
        <p className='text-2xl font-bold text-center p-4'>Your Shopping Bag</p>
        <div className='flex h-screen shadow-lg/50 m-10'>
            <div className='w-full flex flex-col md:flex-row '>
                <div className='w-full '>
                    {cart.map((item) => {
                return <CartItem key={item.id} item={item}/>
                })
            }       
                </div>

                <div className='flex  w-full md:w-1/2 '>
                    <div className='flex flex-col items-center w-full h-full'>
                        <div className=' flex flex-col p-2 w-full '>
                            <p className='text-center text-2xl font-thin p-1'>Summary</p>
                                <div className='flex w-full justify-between'>
                                        <p>Items</p>
                                        <p>Total</p>
                                </div>
                            {
                                cart.map((item) => {
                                    return (
                                <div>    
                                    <div key={item.id} item={item} className='flex p-2 w-full border-b-2 border-amber-200'>
                                       <div className='w-full'>
                                            <div>{item.title}</div>
                                            <div>x{item.amount}</div>
                                            <div>{item.price}</div>
                                       </div>
                                        <div className='flex place-items-end font-bold'>
                                            {item.price * item.amount}
                                        </div>
                                    </div>   
                                 </div>
                                    )
                                })
                            }
                        </div>

                        <div className='w-full flex flex-col justify-center items-center font-bold'>
                            <div className='flex justify-center items-center w-2/3 rounded-full 
                            shadow-lg bg-orange-100 p-2 mt-2 hover:scale-110 transition-all duration-100'>
                                <button>Checkout</button>
                            </div>
                            <div className='flex justify-center items-center w-2/3 rounded-full 
                            shadow-lg bg-orange-100 p-2 mt-2 hover:scale-110 transition-all duration-100'>
                                <button onClick={()=>{clearCart()}}>Clear Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
     )
        }  
    </div>
  )
}

export default Cart