import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";



function Nav() {
  return (
    <header className='relative z-10'>
        <div className='w-full]'>
            <figure className='w-full '>
                <img src="/src/images/hbanner.png" alt="" className=' w-auto md:w-full h-[11vh] md:h-full '/>
            </figure>
        </div>

    <div className='fixed top-0 left-0 right-0 flex w-full p-4 bg-orange-200 shadow-lg
        justify-evenly hover:transition-all hover:scale-105 opacity-80 hover:opacity-100'> 
        <Link to='/' className='text-xl font-bold hover:text-white'>
            <p className='hidden md:inline'>Home</p>
            <AiOutlineHome className='text-3xl md:hidden ' />
        </Link>

        <Link to='./pages/Products' className='text-xl font-bold hover:text-white'>
            <p className='hidden md:inline'>Shop</p>
            <RiShoppingBag3Line className='text-3xl md:hidden' />
        </Link>
          
        <span className=' rounded-full bg-white justify-self-center text-center hover:bg-slate-900 hover:text-white'>
            <Link><p className='text-lg font-bold p-1'>TRAITS</p></Link>
        </span>
            
        <Link to='./pages/Cart' className='text-xl font-bold hover:text-white'>
            <p className='hidden md:inline'>Cart</p><TiShoppingCart className='text-3xl md:hidden' />
        </Link>
           
        <Link to='./pages/Login' className='text-lg font-bold hover:text-white'>
            <p className='hidden md:inline'>User</p>
            <FaRegUser className='text-3xl md:hidden'/>

        </Link>
    </div>
    </header>
    
  )
}

export default Nav