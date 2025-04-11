import React from 'react'
import { MdOutlineDiscount, MdOutlineLibraryBooks} from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='flex h-[100vh] w-full justify-center items-center text-center overflow-hidden bg-gray-100'>
        <div className=' h-[60vh] bg-orange-100 rounded-lg shadow-lg mx-auto flex flex-col p-10 pt-2'>
            <section className=''>
                <p className='text-2xl p-4 pt-0'>Hi friend!</p>
                <p className='text-xl'>Enter your username and password to sign in for </p>
                <div className='flex justify-evenly p-4 '>
                    <span ><MdOutlineDiscount /> Best Discounts</span>
                    <span><MdOutlineLibraryBooks className='text-center' /> Order Tracking</span>
                    <span> <FaShippingFast /> Speed Delivery</span>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center mt-8 text-black'>
                <form action="">
                    <input type="text" placeholder='Username' className='p-2 w-[70%] rounded-lg shadow-lg hover:bg-white '/>
                    <input type="password" placeholder='Password' className='p-2 w-[70%] rounded-lg shadow-lg mt-4 hover:bg-white'/>
                    <button className='bg-orange-200 p-2 w-[70%] rounded-lg shadow-lg mt-4 hover:bg-orange-600'>Login</button>
                </form>
            </section>

            <p className='mt-10'>Don't have an acoount? <Link className='text-blue-700 hover:text-orange-600'>Sign up</Link> for the best experience</p>
        </div>
        
    </div>
  )
}

export default Login